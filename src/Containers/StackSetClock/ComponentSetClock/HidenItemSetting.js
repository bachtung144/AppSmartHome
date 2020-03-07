import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {StyleListSetting} from '../StyleSetClock/StyleSetClock';
export const RenderHiddenItem = ({onPress}) => {
  return (
    <View style={StyleListSetting.rowBack}>
      <TouchableOpacity
        style={[
          StyleListSetting.backRightBtn,
          StyleListSetting.backRightBtnRight,
        ]}
        onPress={onPress}>
        <Text style={StyleListSetting.backTextWhite}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};
