import React from 'react';
import {View, Text} from 'react-native';
import onPost from '../Function/onPost';
import {_retrieveData} from '../Function/_retrieveData';
import {stylesSplash} from '../Components/Styles';

export default class SplashScreen extends React.Component {
  performTimeConsumingTask = async () => {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve('result');
      }, 2000),
    );
  };

  async componentDidMount() {
    const data = await this.performTimeConsumingTask();
    var value = await _retrieveData();
    if (data !== null) {
      if (value === null) {
        this.props.navigation.navigate('Auth');
      }
      if (value !== null) {
        await onPost();
        await this.props.navigation.navigate('UserInforScreen');
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
