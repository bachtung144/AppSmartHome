import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styleMenuDetail} from '../StyleMenuDetail/StyleMenuDetail';

export default class ButtonDelete extends React.PureComponent {
  render() {
    let onPress = this.props.onPress;
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <TouchableOpacity
          style={styleMenuDetail.buttonDelete}
          onPress={onPress}>
          <Text style={{color: 'white'}}>Xóa </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
