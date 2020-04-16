import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styleButtonDelete} from './StyleComponenMenuDetail/StyleButtonDelete';

export default class ButtonDelete extends React.PureComponent {
  render() {
    let onPress = this.props.onPress;
    return (
      <View style={styleButtonDelete.containerButtonDelete}>
        <TouchableOpacity
          style={styleButtonDelete.buttonDelete}
          onPress={onPress}>
          <Text style={styleButtonDelete.text}>Xóa </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
