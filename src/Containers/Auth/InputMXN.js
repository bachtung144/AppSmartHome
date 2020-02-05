import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import BackGround from '../../Components/BackGround';
import background_input from '../../Picture/backround_input.png';
import ButtonCustom from '../../Components/Button';

export default class InputMXN extends Component {
  state = {
    MXN: '',
  };

  onSubmit = () => {
    const {navigate} = this.props.navigation;
    const {navigation} = this.props;
    let data = {};
    data.callingCode = this.props.navigation.state.params.code_clicked
    data.phoneNum = navigation.getParam('phone', 'default value')
    data.MXN = this.state.MXN

    console.warn(data)
    fetch('http://192.168.99.116:1123/forgetPwordVerify', {
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
      .done(() => navigate('NewPassScreen'));
  }

  render() {
    const {navigate} = this.props.navigation;
    const {navigation} = this.props;
    return (
      <View style={{flex: 1}}>
        <BackGround />
        <View style={styles.noti}>
          <Text>Mã xác nhận đã được gửi vào số điện thoại :</Text>
          <Text>
            (+{this.props.navigation.state.params.code_clicked})
            {navigation.getParam('phone', 'default value')}
          </Text>
        </View>
        <View style={styles.container}>
          <ImageBackground
            source={background_input}
            style={styles.imageBackGround}
          />
          <View style={styles.phonenumber}>
            <TextInput placeholder={'Mã xác nhận'}
                       value={this.state.MXN}
                       onChangeText={MXN => this.setState({MXN})}/>
          </View>

          <ButtonCustom name={'Xác nhận'} onPress={this.onSubmit} />

          <View style={styles.blockLink}>
            <Text
              style={styles.customLink}
              onPress={() => navigate('SignUpScreen')}>
              Đăng kí tài khoản
            </Text>
            <Text
              style={styles.customLink}
              onPress={() => navigate('LoginScreen')}>
              Đăng nhập
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
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: 'pink',
  },
  imageBackGround: {
    resizeMode: 'contain',
    height: 500,
    width: 500,
    position: 'absolute',
  },
  phonenumber: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    width: '100%',
    height: 50,
    backgroundColor: 'white',
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
  noti: {
    justifyContent: 'center',
    alignItems: 'center',
  },
};
