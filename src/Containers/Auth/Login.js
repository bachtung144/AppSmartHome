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

export default class Login extends Component {
  state = {
    callingCode: '84',
    password: '',
    phoneNum: '',
    secureTextEntry: true,
    nameNation: 'Vietnam',
    modal: false,
  };

  secureTextEntryFunction() {
    this.setState({
      secureTextEntry: !this.state.secureTextEntry,
    });
  }

  onSubmit() {
    const {navigate} = this.props.navigation;
    let data = {};
    data.callingCode = this.state.callingCode;
    data.password = this.state.password;
    data.phoneNum = this.state.phoneNum;

    fetch('http://192.168.99.116:1123/login', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success', data);
      })
      .catch(error => {
        console.warn(error);
      })
      .done(() => navigate('TestScreen'));
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

          <View style={styles.phonenumber}>
            <TextInput
              placeholder="Số điện thoại"
              value={this.state.phoneNum}
              onChangeText={phoneNum => this.setState({phoneNum})}
            />
          </View>

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
          <ButtonCustom name={'Đăng nhập'} onPress={() => this.onSubmit()} />

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
