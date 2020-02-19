import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import BackGround from '../../Components/BackGround';
import CountryPicker from 'react-native-country-picker-modal';
import Icon from 'react-native-vector-icons/FontAwesome';
import background_input from '../../Picture/backround_input.png';
import ButtonCustom from '../../Components/Button';
import {Formik} from 'formik';
import * as Yup from 'yup';
import BlockLink from '../../Components/BlockLink';
import {styleButtonBlue, stylesForgetPass} from '../../Components/Styles';
import ButtonTest from '../../Components/ButtonTest';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export default class ForgetPass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      callingCode: '84',
      nameNation: 'Vietnam',
      modal: false,
      phoneNumberCode: '',
    };
  }
  onSubmit1 = values => {
    const {navigate} = this.props.navigation;
    let data = {};
    data.callingCode = this.state.callingCode;
    data.phone = values.phoneNumber;

    fetch('http://192.168.99.199:1123/forgetPword', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.warn('Success', data);
      })
      .catch(error => {
        console.warn(error);
      })
      .done(
        navigate('InputMXNScreen', {
          code_clicked: this.state.callingCode,
          phone: data.phone,
        }),
      );
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{flex: 1}}>
        <BackGround />

        <View style={stylesForgetPass.container}>
          <ImageBackground
            source={background_input}
            style={stylesForgetPass.imageBackGround}
          />
          <CountryPicker
            withEmoji
            withCallingCode
            visible={this.state.modal}
            onSelect={country =>
              this.setState({
                nameNation: country.name,
                callingCode: country.callingCode,
              })
            }
            withFilter={true}
            onClose={() => this.setState({modal: false})}
            placeholder={''}
          />
          <TouchableOpacity
            style={stylesForgetPass.nation}
            onPress={() => this.setState({modal: true})}>
            <Text style={stylesForgetPass.smallNation}>Quốc gia</Text>
            <Text style={stylesForgetPass.callCode}>
              {this.state.nameNation}
              (+{this.state.callingCode})
            </Text>
            <Icon
              name="angle-right"
              size={20}
              style={stylesForgetPass.styleIcon}
            />
          </TouchableOpacity>

          <Formik
            initialValues={{phoneNumber: ''}}
            validationSchema={Yup.object().shape({
              phoneNumber: Yup.string()
                .min(9, 'Auth.FieldValidation.min_length_phone')
                .max(15, 'Auth.FieldValidation.max_length_phone')
                .required('Auth.FieldValidation.required_phone')
                .test(
                  'check_phone',
                  'Auth.FieldValidation.check_is_phone',
                  value => !isNaN(value),
                ),
            })}
            onSubmit={this.onSubmit1}>
            {props => (
              <View style={{width: '100%'}}>
                <TextInput
                  onChangeText={props.handleChange('phoneNumber')}
                  onBlur={props.handleBlur('phoneNumber')}
                  value={props.values.phoneNumber}
                  placeholder="phoneNumber"
                  style={stylesForgetPass.phonenumber}
                />
                {props.touched.phoneNumber && props.errors.phoneNumber ? (
                  <Text style={stylesForgetPass.error}>
                    {props.errors.phoneNumber}
                  </Text>
                ) : null}
                {props.isValid && props.values.phoneNumber ? (
                  <ButtonCustom
                    onPress={props.handleSubmit}
                    name={'Tiếp tục'}
                    style={styleButtonBlue.buttonLogin}
                  />
                ) : (
                  <ButtonTest name={'Tiếp tục'} />
                )}
              </View>
            )}
          </Formik>
          <BlockLink
            name1={'Đăng kí tài khoản'}
            name2={'Đăng nhập'}
            onPress1={() => navigate('SignUpScreen')}
            onPress2={() => navigate('LoginScreen')}
          />
        </View>
      </View>
    );
  }
}
