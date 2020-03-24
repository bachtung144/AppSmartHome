import React from 'react';
import {View, Text} from 'react-native';
// import onPost from '../Function/onPost';
import {_retrieveData} from '../Function/_retrieveData';
import {stylesSplash} from '../Components/Styles';
import NavigationService from '../Function/NavigationService';
import {AddCallingCode, AddPhone} from '../Redux/Action/ActionUserInfor';
import {connect} from 'react-redux';
import socket from '../Socket/SocketIo';
import {AddListAllDevice} from '../Redux/Action/ActionListAllDevice';
import io from 'socket.io-client';

class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
    this.socket = io('http://192.168.99.199:1123');

  }

  async LoadSocket() {
    console.log(1);
    try {
      this.socket.emit('listDevice', JSON.stringify({page: 1}));
      // this.socket.emit('listDevice', JSON.stringify({page: 2}));
      return new Promise(async (resolve, reject) => {
        await this.socket.on(
          'listDevice',
          async response => {
            if (response) {
              await this.props.AddListAllDevice(JSON.parse(response).data);
              console.log(2);
              return resolve(JSON.parse(response));
            } else {
              return reject("error");
            }
          },
        )
      })
    } catch (e) {
      console.log(e.message);
    }
  }

  async onPost() {
    var data = {};
    data.token = await _retrieveData();
    return new Promise(async (resolve, reject) => {
      await this.LoadSocket();
      console.log(3);
      fetch(`http://192.168.99.199:1123/userinfo?token=${data.token}`, {
        method: 'GET',
      })
        .then(response => response.json())
        .then(json => {
          this.props.AddPhone(json.data.phone);
          this.props.AddCallingCode(json.data.callingCode);
          resolve(true);
        })
        .catch(error => {
          reject(error);
        })
        .done(NavigationService.navigate('UserInforScreen'));
    });
  }

  async componentDidMount() {
    var value = await _retrieveData();

    if (value === null) {
      this.props.navigation.navigate('Auth');
    }
    if (value !== null) {
      await this.onPost();
    }
  }

  render() {
    return (
      <View style={stylesSplash.viewStyles}>
        <View style={stylesSplash.BlockStyle}>
          <Text style={stylesSplash.Logo}>Logo GratIoT</Text>
        </View>
        <View>
          <Text style={stylesSplash.textStyles}>
            Kết nối mọi vật thật dễ dàng
          </Text>
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  Phone: state.phoneNumber,
  CallingCode: state.CallingCode,
  ListAllDevice: state.ListAllDevice.ListAllDevice,
});

const mapDispatchToProps = dispatch => ({
  AddPhone: phone => dispatch(AddPhone(phone)),
  AddCallingCode: callingCode => dispatch(AddCallingCode(callingCode)),
  AddListAllDevice: (ListAllDevice: []) =>
    dispatch(AddListAllDevice(ListAllDevice)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SplashScreen);
