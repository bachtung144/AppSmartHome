import React from 'react';
import {View, Text,Button} from 'react-native';
import {_retrieveData} from '../Function/_retrieveData';
import {stylesSplash} from '../Components/Styles';
import NavigationService from '../Function/NavigationService';
import {AddCallingCode, AddPhone} from '../Redux/UserInfor/ActionUserInfor';
import {connect} from 'react-redux';
import {AddListAllDevice} from '../Redux/ListAllDevice/ActionListAllDevice';
import io from 'socket.io-client';
import {connectSocket} from '../Socket/_Socket'
import {emit} from '../Socket/_Socket';

class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
      let isConnect =  connectSocket();
      console.log("isConnect => ", isConnect)
      // this.emitEvent();
  }

  // async LoadSocket() {
  //   // console.log(1);
  //   try {
  //     this.socket.emit('listDevice', JSON.stringify({page: 1}));
  //     // this.socket.emit('listDevice', JSON.stringify({page: 2}));
  //     return new Promise(async (resolve, reject) => {
  //       await this.socket.on(
  //           'listDevice',
  //           async response => {
  //             if (response) {
  //                 // console.warn(JSON.parse(response).data)
  //               await this.props.AddListAllDevice(JSON.parse(response).data);
  //               return resolve(JSON.parse(response));
  //             } else {
  //               return reject("error");
  //             }
  //           },
  //       )
  //     })
  //   } catch (e) {
  //     console.log(e.message);
  //   }
  // }
    async loadSocket(){
        return new Promise(async () =>{
            await emit('listDevice', JSON.stringify({page: 1}));
             await emit('listRoom');
        })
    }
  async onPost() {
       // emit('listRoom');
    var data = {};
    data.token = await _retrieveData();
    return new Promise(async (resolve, reject) => {
        // emit('listRoom');
       await this.loadSocket();
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
          // .done(NavigationService.navigate('UserInforScreen'));
    });
  }

  async componentDidMount() {
    var value = await _retrieveData();
    if (value === null) {
      this.props.navigation.navigate('Auth');
    }
    if (value !== null) {
      await this.loadSocket()
      // await this.onPost();
      // await NavigationService.navigate('UserInforScreen')
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
