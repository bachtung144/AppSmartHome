import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Linking,
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

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      callingCode: '84',
      nameNation: 'Vietnam',
      modal: false,
      phoneNumberCode: '',
      checkBox: false,
      phoneNum: '',
      verify: true,
    };
  }

  noti() {
    this.setState({checkBox: !this.state.checkBox});
  }

  onSubmit1 = values => {
    this.setState({isLoading: false});
    const {navigate} = this.props.navigation;
    let data = {};
    data.callingCode = this.state.callingCode;
    data.phone = values.phoneNumber;

    fetch('http://192.168.99.199:1123/reg', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(async data => {
        console.warn('Success', data);
        if (data.status === 'success') {
          await navigate('InputMXNSignUpScreen', {
            code_clicked: this.state.callingCode,
            phone: values.phoneNumber,
          });
        }
        if (data.status === 'fail') {
          await this.setState({verify: false});
        }
      })
      .catch(error => {
        console.warn(error);
      });
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
                {this.state.verify ? null : (
                  <Text style={{color: 'red'}}>
                    Số điện thoại không tồn tại
                  </Text>
                )}

                {this.state.checkBox &&
                props.isValid &&
                props.values.phoneNumber ? (
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
          <View style={stylesForgetPass.containerIconCheckBox}>
            <TouchableOpacity
              onPress={() => this.noti()}
              style={{
                padding: 5,
              }}>
              {this.state.checkBox ? (
                <Icon name={'check-square'} color={'#1490b5'} size={15} />
              ) : (
                <Icon name={'check-square'} color={'black'} size={15} />
              )}
            </TouchableOpacity>
            <Text style={{marginTop: 2}}>
              Tôi đồng ý
              <Text
                style={{color: '#1490b5', textDecorationLine: 'underline'}}
                onPress={() => Linking.openURL('http://google.com')}>
                {' '}
                điều khoản và chính sách
              </Text>
            </Text>
          </View>

          <BlockLink
            name1={'Đăng nhập'}
            name2={'Quên mật khẩu'}
            onPress1={() => navigate('LoginScreen')}
            onPress2={() => navigate('ForgetPassScreen')}
          />
        </View>
      </View>
    );
  }
}
