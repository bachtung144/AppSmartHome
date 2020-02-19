import {View, Text, Button, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import NavigationService from '../../Function/NavigationService';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Alarm from './Alarm';
import AddAlarm from './AddAlarm';
import {createAppContainer} from 'react-navigation';
import {styleDetailDevice} from '../../Components/Styles'
export default class DetailDevice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appTest: null,
    };
  }
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('deviceName', 'default value'),
      headerRight: () => (
        <View style={{ flexDirection: 'row'}}>
          <TouchableOpacity>
            <Feather name={'phone-call'} size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('MenuDetailScreen')}>
            <Feather name={'menu'} size={30} />
          </TouchableOpacity>
        </View>
      ),
    };
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styleDetailDevice.container}>

        <View
          style={styleDetailDevice.subContainer1}>
          <TouchableOpacity
            style={styleDetailDevice.buttonOff}>
            <Icon name={'power-off'} size={60} />
          </TouchableOpacity>
        </View>

        <View
          style={styleDetailDevice.subContainer2}>
          <TouchableOpacity
            style={styleDetailDevice.clock}>
            <Icon name={'clock-o'} size={15} />
            <Text>Hẹn giờ</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styleDetailDevice.clock}>
            <Icon name={'history'} size={15} />
            <Text>Lịch sử</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}
