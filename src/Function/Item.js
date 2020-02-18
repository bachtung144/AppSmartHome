import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import hp_wall from '../Picture/hp_wall.png';
import Icon from 'react-native-vector-icons/AntDesign';
import {Global,Global1} from './Global';
import {styleFlatList} from '../Components/Styles'

export default function Item({title,onPress}) {
    // const {navigate} = this.props.navigation;
    // Global.navigation = this.props.navigation;
  return (
    <TouchableOpacity
      style={styleFlatList.container}
         onPress ={onPress}
    >
      <Text
        style={styleFlatList.title}>
        {title}
      </Text>

      <View
        style={styleFlatList.body}>
        <Image source={hp_wall} style={styleFlatList.Image} />
        <TouchableOpacity
          style={styleFlatList.Icon}>
          <Icon name={'poweroff'} size={30} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

