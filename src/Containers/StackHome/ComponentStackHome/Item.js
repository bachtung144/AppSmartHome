import {View, Text, Image, TouchableOpacity, Button} from 'react-native';
import React from 'react';
import hp_wall from '../../../Picture/hp_wall.png';
import Icon from 'react-native-vector-icons/AntDesign';
import {styleItem} from './StyleComponentStackHome/StyleItem';
import {connect} from 'react-redux';

import NavigationService from '../../../Function/NavigationService';

class ItemDeviceRoom extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={styleItem.container}
        onPress={() => {
          NavigationService.navigate('DetailDeviceScreen', {id: this.props.id});
        }}>
        <Text style={styleItem.title}>
          {this.props.DeviceInfor !== null &&
          this.props.DeviceInfor.length !== 0
            ? this.props.DeviceInfor[0].deviceName
            : null}
        </Text>
        <View style={styleItem.body}>
          <Image source={hp_wall} style={styleItem.Image} />
          <TouchableOpacity style={styleItem.Icon}>
            <Icon name={'poweroff'} size={30} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    DeviceInfor: state.ListAllDevice.ListAllDevice.filter(
      ele => ele.id === props.id,
    ),
  };
};

export default connect(
  mapStateToProps,
  null,
)(ItemDeviceRoom);
