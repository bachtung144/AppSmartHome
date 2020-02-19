import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import hp_wall from '../Picture/hp_wall.png';
import Icon from 'react-native-vector-icons/AntDesign';
import {styleFlatList} from '../Components/Styles'

export default function Item({title,onPress}) {
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

