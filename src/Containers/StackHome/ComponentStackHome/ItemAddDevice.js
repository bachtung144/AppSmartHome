import {TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {styleItemAddDevice} from './StyleComponentStackHome/StyleItemAddDevice';

export default function ItemAddDevice({onPress}) {
  return (
    <TouchableOpacity style={styleItemAddDevice} onPress={onPress}>
      <Icon name={'pluscircleo'} size={50} color={'#1291b6'} />
    </TouchableOpacity>
  );
}
