import React from 'react';
import {View, Text, AsyncStorage} from 'react-native';
import {Global} from './Auth/Global';

export default class SplashScreen extends React.Component {
  performTimeConsumingTask = async () => {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve('result');
      }, 2000),
    );
  };
  async onPost() {
    var data = {};
    data.token = await this._retrieveData();
    return new Promise(async (resolve, reject) => {
      fetch(`http://192.168.99.199:1123/userinfo?token=${data.token}`, {
        method: 'GET',
      })
          .then(response => response.json())
          .then( json => {
            Global.userinfor.phone = json.data.phone;
            Global.userinfor.callingCode = json.data.callingCode;
            resolve (true)
          })
          .catch(error => {
            reject(error)
          });
    })}

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('Token');
      if (value !== null) {
        return value;
      } else {
        return null;
      }
    } catch (error) {
      console.warn('Error');
      return null;
    }
  };
  async componentDidMount() {
    const data = await this.performTimeConsumingTask();
    var value = await this._retrieveData();
    if (data !== null ) {
      if(value === null) this.props.navigation.navigate('Auth');
      if(value !== null) {
        await this.onPost()
        await this.props.navigation.navigate('UserInforScreen');}
  }}

  render() {
    return (
      <View style={styles.viewStyles}>
        <View style={styles.BlockStyle}>
          <Text style={styles.Logo}>Logo GratIoT</Text>
        </View>
        <View>
          <Text style={styles.textStyles}>Kết nối mọi vật thật dễ dàng</Text>
        </View>
      </View>
    );
  }
}
const styles = {
  BlockStyle: {
    backgroundColor: '#DCDCDC',
    borderRadius: 2,
    height: 50,
    width: 150,
    alignItems: 'center',
  },
  Logo: {
    textAlign: 'center',
    color: '#1E90FF',
    paddingTop: 15,
  },
  viewStyles: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    flexDirection: 'column',
    paddingTop: 200,
  },
  textStyles: {
    color: 'black',
    fontSize: 10,
    fontWeight: 'bold',
  },
};
