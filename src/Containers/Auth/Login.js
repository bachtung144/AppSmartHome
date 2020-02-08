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
import {AsyncStorage} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Global} from './Global';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export default class Login extends Component {
  state = {
    callingCode: '84',
    password: '',
    phoneNum: '',
    secureTextEntry: true,
    nameNation: 'Vietnam',
    modal: false,
    status: '',
    isLoading: true,
  };

  secureTextEntryFunction() {
    this.setState({
      secureTextEntry: !this.state.secureTextEntry,
    });
  }
  navig = status => {
    const {navigate} = this.props.navigation;
    if (status === 'success') {
      return navigate('UserInforScreen');
    }
  };
  onSubmit1 = values => {
    let data = {};
    data.phone = values.phoneNumber;
    data.pword = this.state.password;
    data.callingCode = this.state.callingCode;
    this._storeData('phone', data.phone);
    this._storeData('calling', data.callingCode);
    this._storeData('phone', data.phone);
    fetch('http://192.168.99.199:1123/login', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.warn('Success', data);
        this._storeData('Token', data.data.token);
        this.onPost();
        this.navig(data.status);
      })
      .catch(error => {
        console.warn(error);
      });
  };

  _storeData = async (Token, data) => {
    try {
      await AsyncStorage.setItem(Token, data);
    } catch (error) {
      console.log('AsyncStorage save error: ' + error.message);
    }
  };
  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('Token');
      if (value !== null) {
        return value;
      } else {
        return null;
      }
    } catch (error) {
      console.warn('Error');
      return null;
    }
  };
  async onPost() {
    var data = {};
    data.token = await this._retrieveData();
    fetch(`http://192.168.99.199:1123/userinfo?token=${data.token}`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(json => {
        Global.userinfor.phone = json.data.phone;
        Global.userinfor.callingCode = json.data.callingCode;
        this._storeData('phone', json.data.phone);
        this._storeData('callingCode', json.data.callingCode);
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={{flex: 1}}>
        <BackGround />

        <View style={styles.container}>
          <ImageBackground
            source={background_input}
            style={styles.imageBackGround}
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
            style={styles.nation}
            onPress={() => this.setState({modal: true})}>
            <Text style={styles.smallNation}>Quốc gia</Text>
            <Text style={styles.callCode}>
              {this.state.nameNation}
              (+{this.state.callingCode})
            </Text>
            <Icon name="angle-right" size={20} style={styles.styleIcon} />
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
                  style={styles.phonenumber}
                />
                <View style={styles.blockPass}>
                  <TextInput
                    placeholder={'Mật khẩu'}
                    secureTextEntry={this.state.secureTextEntry}
                    value={this.state.password}
                    onChangeText={password => this.setState({password})}
                    style={{flex: 1}}
                  />

                  <TouchableOpacity
                    onPress={() => this.secureTextEntryFunction()}
                    style={styles.iconEye}>
                    <Icon
                      name={this.state.secureTextEntry ? 'eye-slash' : 'eye'}
                      color="black"
                      size={15}
                    />
                  </TouchableOpacity>
                </View>
                {props.touched.phoneNumber && props.errors.phoneNumber ? (
                  <Text style={styles.error}>{props.errors.phoneNumber}</Text>
                ) : null}
                <ButtonCustom onPress={props.handleSubmit} name={'Tiếp tục'} />
              </View>
            )}
          </Formik>

          <View style={styles.blockLink}>
            <Text
              style={styles.customLink}
              onPress={() => navigate('SignUpScreen')}>
              Đăng kí tài khoản
            </Text>
            <Text
              style={styles.customLink}
              onPress={() => navigate('ForgetPassScreen')}>
              Quên mật khẩu
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    marginHorizontal: 30,
    flex: 1,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  imageBackGround: {
    resizeMode: 'contain',
    height: 500,
    width: 500,
    position: 'absolute',
  },
  nation: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 50,
    backgroundColor: 'white',
  },
  phonenumber: {
    borderColor: 'gray',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    width: '100%',
    height: 50,
    backgroundColor: 'white',
  },
  blockPass: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    height: 50,
    backgroundColor: 'white',
  },
  iconEye: {
    width: 40,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  blockLink: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  customLink: {
    paddingVertical: 10,
    color: '#22a4c5',
    fontWeight: 'bold',
  },
  styleIcon: {
    paddingRight: 5,
    color: 'black',
  },
  smallNation: {
    flex: 1,
    paddingLeft: 5,
  },
  callCode: {
    textAlign: 'center',
    paddingRight: 5,
  },
};
