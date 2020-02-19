import React from 'react';
import {View, Text} from 'react-native';
// import onPost from '../Function/onPost';
import {_retrieveData} from '../Function/_retrieveData';
import {stylesSplash} from '../Components/Styles';
import NavigationService from '../Function/NavigationService';
import {AddCallingCode, AddPhone} from '../Redux/Action/ActionUserInfor';
import {connect} from 'react-redux';

 class SplashScreen extends React.Component {
  performTimeConsumingTask = async () => {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve('result');
      }, 2000),
    );
  };
  async  onPost() {
    var data = {};
    data.token = await _retrieveData();
    return new Promise(async (resolve, reject) => {
      fetch(`http://192.168.99.199:1123/userinfo?token=${data.token}`, {
        method: 'GET',
      })
          .then(response => response.json())
          .then(json => {
            this.props.AddPhone(json.data.phone)
            this.props.AddCallingCode(json.data.callingCode)
            resolve(true);
          })
          .catch(error => {
            reject(error);
          });
    });
  }

  async componentDidMount() {
    const data = await this.performTimeConsumingTask();
    var value = await _retrieveData();
    if (data !== null) {
      if (value === null) {
        this.props.navigation.navigate('Auth');
      }
      if (value !== null) {
        this.onPost();
        // await this.props.navigation.navigate('UserInforScreen');
        NavigationService.navigate('UserInforScreen')
      }
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
  CallingCode: state.CallingCode
});

const mapDispatchToProps = dispatch => ({
  AddPhone: phone => dispatch(AddPhone(phone)),
  AddCallingCode: callingCode => dispatch(AddCallingCode(callingCode))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SplashScreen)
