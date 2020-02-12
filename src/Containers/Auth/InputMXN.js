import React, {Component} from 'react';
import {View, Text, TextInput, ImageBackground} from 'react-native';
import BackGround from '../../Components/BackGround';
import background_input from '../../Picture/backround_input.png';
import ButtonCustom from '../../Components/Button';
import BlockLink from '../../Components/BlockLink';
import {stylesInputMXN} from '../../Components/Styles';
import ButtonTest from '../../Components/ButtonTest';

export default class InputMXNSignUp extends Component {
  state = {
    MXN: '',
    token: '',
    verify: true,
  };
  navig = status => {
    if (status === 'fail') {
      this.setState({verify: !this.state.verify});
    }
  };

  onSubmit = () => {
    const {navigate} = this.props.navigation;
    const {navigation} = this.props;
    let data = {};
    data.phone = navigation.getParam('phone', 'default value');
    data.code = this.state.MXN;
    data.callingCode = this.props.navigation.state.params.code_clicked;
    console.warn(data);

    fetch('http://192.168.99.199:1123/forgetPwordVerify', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.warn('Success', data);
        this.setState({token: data.data.token});
        if (data.status === 'success') {
          return navigate('NewPassScreen', {token: this.state.token});
        }
        this.navig(data.status);
      })
      .catch(error => {
        console.warn(error);
      });
  };

  render() {
    const {navigate} = this.props.navigation;
    const {navigation} = this.props;
    return (
      <View style={{flex: 1}}>
        <BackGround />
        <View style={stylesInputMXN.noti}>
          <Text>Mã xác nhận đã được gửi vào số điện thoại :</Text>
          <Text>
            (+{this.props.navigation.state.params.code_clicked})
            {navigation.getParam('phone', 'default value')}
          </Text>
        </View>
        <View style={stylesInputMXN.container}>
          <ImageBackground
            source={background_input}
            style={stylesInputMXN.imageBackGround}
          />
          <View style={stylesInputMXN.phonenumber}>
            <TextInput
              placeholder={'Mã xác nhận'}
              value={this.state.MXN}
              onChangeText={MXN => this.setState({MXN})}
            />
          </View>
          {this.state.verify ? null : (
            <Text style={{color: 'red'}}>Mã xác nhận ko đúng!</Text>
          )}
          {this.state.MXN ? (
            <ButtonCustom onPress={this.onSubmit} name={'Xác nhận'} />
          ) : (
            <ButtonTest name={'Xác nhận'} />
          )}
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
