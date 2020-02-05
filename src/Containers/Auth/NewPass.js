import React, {Component} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import BackGround from '../../Components/BackGround';
import Icon from 'react-native-vector-icons/FontAwesome';
import ButtonCustom from '../../Components/Button';

export default class NewPass extends Component {
  state = {
    callingCode: '84',
    password: '',
    secureTextEntry: true,
    nameNation: 'Vietnam',
    modal: false,
  };
  secureTextEntryFunction() {
    this.setState({
      secureTextEntry: !this.state.secureTextEntry,
    });
  }

  render() {
    const {navigate} = this.props.navigation;
    const {navigation} = this.props;
    return (
      <View style={{flex: 1}}>
        <BackGround />
        <View style={styles.container}>
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

          <ButtonCustom
            name={'Xác nhận'}
            onPress={() => navigate('LoginScreen')}
          />
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
  blockPass: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    height: 50,
    backgroundColor: 'white',
  },
  iconEye: {
    width: 40,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
