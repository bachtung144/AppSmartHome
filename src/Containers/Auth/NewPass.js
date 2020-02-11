import React, {Component} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import BackGround from '../../Components/BackGround';
import Icon from 'react-native-vector-icons/FontAwesome';
import ButtonCustom from '../../Components/Button';
import {stylesNewPass} from '../../Components/Styles';
import onPost from '../../Function/onPost';
import {_storeData} from '../../Function/_storeData'

export default class NewPass extends Component {
  state = {
    callingCode: '84',
    password: '',
    secureTextEntry: true,
    nameNation: 'Vietnam',
    modal: false,
  };
  onSubmit = () => {
    const {navigate} = this.props.navigation;
    let data = {};
    data.token = this.props.navigation.state.params.token;
    data.pword = this.state.password;

    fetch('http://192.168.99.199:1123/setPword', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(async data => {
        console.warn('Success', data);
        await _storeData('Token', data.data.token);
        await onPost();
        await navigate('UserInforScreen');
      })
      .catch(error => {
        console.warn(error);
      })

  };

  secureTextEntryFunction() {
    this.setState({
      secureTextEntry: !this.state.secureTextEntry,
    });
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <BackGround />
        <View style={stylesNewPass.container}>
          <View style={stylesNewPass.blockPass}>
            <TextInput
              placeholder={'Mật khẩu'}
              secureTextEntry={this.state.secureTextEntry}
              value={this.state.password}
              onChangeText={password => this.setState({password})}
              style={{flex: 1}}
            />
            <TouchableOpacity
              onPress={() => this.secureTextEntryFunction()}
              style={stylesNewPass.iconEye}>
              <Icon
                name={this.state.secureTextEntry ? 'eye-slash' : 'eye'}
                color="black"
                size={15}
              />
            </TouchableOpacity>
          </View>

          <ButtonCustom name={'Xác nhận'} onPress={this.onSubmit} />
        </View>
      </View>
    );
  }
}
