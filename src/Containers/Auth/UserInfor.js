import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ButtonCustom from '../../Components/Button';
import {AsyncStorage} from 'react-native';
import {Global} from '../../Function/Global';
import {styleButtonBlue, stylesUserInfor} from '../../Components/Styles';
import { connect } from 'react-redux'
import NavigationService from '../../Function/NavigationService';

export default class UserInfor extends React.Component {
  static navigationOptions = {
    header: null,
  }
  constructor(props) {
    super(props);
  }

  removeItemValue = async key => {
    try {
      await AsyncStorage.removeItem(key);
      return 1;
    } catch (error) {
      return 0;
    }
  };

  navi = async () => {
    const {navigate} = this.props.navigation;
    let term1 = await this.removeItemValue('Token');
    if (term1 === 1) {
      return NavigationService.navigate('LoginScreen')
    }
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={stylesUserInfor.containerFirst}>
          <View style={stylesUserInfor.containerFirstItem}>
            <View style={stylesUserInfor.circleIcon}>
              <Icon name="user" size={130} color={'#555555'} />
            </View>
            <Text>
              (+{Global.userinfor.callingCode}){Global.userinfor.phone}
            </Text>
          </View>
        </View>

        <View style={stylesUserInfor.container}>
          <TouchableOpacity style={stylesUserInfor.changePass}>
            <Text style={stylesUserInfor.text}>Thay đổi mật khẩu </Text>
            <Icon name="angle-right" style={stylesUserInfor.iconAngle} />
          </TouchableOpacity>

          <TouchableOpacity style={stylesUserInfor.containerPhanhoi}>
            <Text style={stylesUserInfor.text}>Phản hồi </Text>
            <Icon name="angle-right" style={stylesUserInfor.iconAngle} />
          </TouchableOpacity>

          <View style={stylesUserInfor.containerPBUD}>
            <Text style={stylesUserInfor.text}>Phiên bản ứng dụng </Text>
            <Text style={stylesUserInfor.version}>1.0.0(v121)</Text>
          </View>

          <ButtonCustom name={'Đăng xuất'}
                        onPress={this.navi}
                        style={styleButtonBlue.buttonLogin}/>
        </View>
      </View>
    );
  }
}
// const mapStateToProps = state => ({
//   tasks: state.todoList
// })
