import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export default class ButtonAdd extends React.PureComponent {
  render() {
    let onPress = this.props.onPress;
    return (
      <View style={{marginRight: 10}}>
        <TouchableOpacity onPress={onPress}>
          <Feather name={'plus-circle'} size={30} color={'#1291b6'} />
        </TouchableOpacity>
      </View>
    );
  }
}
