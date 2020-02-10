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
import {stylesForgetPass} from '../../Components/Styles';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
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
    };
  }

  noti() {
    this.setState({checkBox: !this.state.checkBox});
  }

  onSubmit1 = values => {
    const {navigate} = this.props.navigation;
    let data = {};
    data.callingCode = this.state.callingCode;
    data.phone = values.phoneNumber;
    console.warn(data);

    fetch('http://192.168.99.199:1123/reg', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.warn('Success', data);
        console.warn(data.message.match(/\d/g).join(''));
      })
      .catch(error => {
        console.warn(error);
      })
      .done(
        navigate('InputMXNSignUpScreen', {
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
            validationSchema={Yup.object({
              phoneNumber: Yup.string()
                .matches(phoneRegExp, 'Phone number is not valid')
                .required('Required'),
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

                {this.state.checkBox ? (
                  <ButtonCustom
                    onPress={props.handleSubmit}
                    name={'Tiếp tục'}
                  />
                ) : (
                  <ButtonCustom name={'Tiếp tục'} />
                )}
              </View>
            )}
          </Formik>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              width: '100%',
              marginTop: 15,
            }}>
            <TouchableOpacity
              onPress={() => this.noti()}
              style={{marginRight: 10, marginTop: 2.5}}>
              {this.state.checkBox ? (
                <Icon name={'check-square'} color={'#1490b5'} size={15} />
              ) : (
                <Icon name={'check-square'} color={'black'} size={15} />
              )}
            </TouchableOpacity>
            <Text>Tôi đồng ý điều khoản và chính sách</Text>
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
