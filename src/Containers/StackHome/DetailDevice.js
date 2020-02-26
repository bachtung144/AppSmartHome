import {View, Text, Button, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import NavigationService from '../../Function/NavigationService';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styleDetailDevice} from '../../Components/Styles';
import Title from '../../Components/Title';

export default class DetailDevice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appTest: null,
    };
  }
  static navigationOptions = ({navigation}) => {
    return {
      title: (
        <Title
          roomId={navigation.getParam('roomId', 'default value')}
          deviceName={navigation.getParam('deviceName', 'default value')}
          index={navigation.getParam('index', 'default value')}
        />
      ),
      headerRight: () => (
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Feather name={'phone-call'} size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('MenuDetailScreen', {
                deviceName1: navigation.getParam('deviceName', 'default value'),
                deviceModel1: navigation.getParam(
                  'deviceModel',
                  'default value',
                ),
                id1: navigation.getParam('id', 'default value'),
                roomId1: navigation.getParam('roomId', 'default value'),
              })
            }>
            <Feather name={'menu'} size={30} />
          </TouchableOpacity>
        </View>
      ),
    };
  };

  render() {
    return (
      <View style={styleDetailDevice.container}>
        <View style={styleDetailDevice.subContainer1}>
          <TouchableOpacity style={styleDetailDevice.buttonOff}>
            <Icon name={'power-off'} size={60} />
          </TouchableOpacity>
        </View>

        <View style={styleDetailDevice.subContainer2}>
          <TouchableOpacity style={styleDetailDevice.clock}
                            onPress={() =>NavigationService.navigate('StackSetClockScreen') }>
            <Icon name={'clock-o'} size={15} />
            <Text>Hẹn giờ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styleDetailDevice.clock}>
            <Icon name={'history'} size={15} />
            <Text>Lịch sử</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
