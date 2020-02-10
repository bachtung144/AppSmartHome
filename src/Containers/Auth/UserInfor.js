import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ButtonCustom from '../../Components/Button';
import {AsyncStorage} from 'react-native';
import {Global} from '../../Function/Global';

export default class UserInfor extends React.Component {
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
      return navigate('LoginScreen');
    }
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.containerFirst}>
          <View style={styles.containerFirstItem}>
            <View style={styles.circleIcon}>
              <Icon name="user" size={130} color={'#555555'} />
            </View>
            <Text>
              (+{Global.userinfor.callingCode}){Global.userinfor.phone}
            </Text>
          </View>
        </View>

        <View style={styles.container}>
          <TouchableOpacity style={styles.changePass}>
            <Text style={styles.text}>Thay đổi mật khẩu </Text>
            <Icon name="angle-right" style={styles.iconAngle} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.containerPhanhoi}>
            <Text style={styles.text}>Phản hồi </Text>
            <Icon name="angle-right" style={styles.iconAngle} />
          </TouchableOpacity>

          <View style={styles.containerPBUD}>
            <Text style={styles.text}>Phiên bản ứng dụng </Text>
            <Text style={styles.version}>1.0.0(v121)</Text>
          </View>

          <ButtonCustom name={'Đăng xuất'} onPress={this.navi} />
        </View>
      </View>
    );
  }
}

const styles = {
  containerFirst: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  containerFirstItem: {justifyContent: 'center', alignItems: 'center'},
  circleIcon: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    backgroundColor: '#d8d8d8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {backgroundColor: '#f7f7f7', flex: 1, marginTop: 10},
  changePass: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  text: {marginTop: 15},
  iconAngle: {
    width: 15,
    marginTop: 15,
    fontSize: 20,
  },
  containerPhanhoi: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f9f9f9',
  },
  containerPBUD: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    backgroundColor: 'white',
  },
  version: {width: 80, marginTop: 15},
};
