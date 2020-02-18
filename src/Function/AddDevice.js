import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import hp_wall from '../Picture/hp_wall.png';
import Icon from 'react-native-vector-icons/AntDesign';
export default class AddDevice extends Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          marginVertical: 10,
          marginHorizontal: 15,
          width: 150,
          borderRadius: 10,
          overflow: 'hidden',
          padding: 3,
          backgroundColor: 'white',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.2,
          shadowRadius: 1.41,
          elevation: 2,
          alignItems: 'center',
          justifyContent: 'center',
          height: 90,
        }}>
        <Icon name={'pluscircleo'} size={50} color={'#1291b6'} />
      </TouchableOpacity>
    );
  }
}
