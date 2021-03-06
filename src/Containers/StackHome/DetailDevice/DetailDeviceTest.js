import {View, Text, Button, TouchableOpacity} from 'react-native';
import React from 'react';
import NavigationService from '../../../Function/NavigationService';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome';
import TitleDetailDevice from './ComponentDetailDevice/TitleDetailDevice';
import {styleDetailDevice} from './StyleDetailDevice/StyleDetailDevice';
import {store} from '../../../Redux/Store';
import {connect} from 'react-redux';

export default class DetailDeviceTest extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: (
        <TitleDetailDevice id={navigation.getParam('id', 'default value')} />
      ),
      headerRight: () => (
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Feather name={'phone-call'} size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('MenuDetailScreen', {
                id: navigation.getParam('id', 'default value'),
              })
            }>
            <Feather name={'menu'} size={30} />
          </TouchableOpacity>
        </View>
      ),
    };
  };

  render() {
    const {navigation} = this.props;
    return (
      <View style={styleDetailDevice.container}>
        <View style={styleDetailDevice.subContainer1}>
          <TouchableOpacity style={styleDetailDevice.buttonOff}>
            <Icon name={'power-off'} size={60} />
          </TouchableOpacity>
        </View>

        <View style={styleDetailDevice.subContainer2}>
          <TouchableOpacity
            style={styleDetailDevice.clock}
            onPress={() =>
              NavigationService.navigate('StackSetClockScreen', {
                id: navigation.getParam('id', 'default value'),
              })
            }>
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

