import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import hp_wall from '../Picture/hp_wall.png';
import Icon from 'react-native-vector-icons/AntDesign';
import {styleFlatList} from '../Components/Styles';
import {connect} from 'react-redux';
import DetailDevice from '../Containers/StackHome/DetailDevice';
import NavigationService from './NavigationService';

class ItemDeviceRoom extends React.Component {
  render() {

    console.log('heloo'+this.props.DeviceInfor);
    return (
      <TouchableOpacity style={styleFlatList.container}
                        onPress={() => {NavigationService.navigate
                        ('DetailDeviceScreen',
                            {id:this.props.id});
                     }}>
        <Text style={styleFlatList.title}>
          {this.props.DeviceInfor[0].deviceName}

        </Text>

        <View style={styleFlatList.body}>
          <Image source={hp_wall} style={styleFlatList.Image} />
          <TouchableOpacity style={styleFlatList.Icon}>
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
