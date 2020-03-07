import {Switch, Text, TouchableOpacity, View} from 'react-native';
import {StyleListSetting} from '../StyleSetClock/StyleSetClock';
import React from 'react';

export const Item = ({hour, minute, actionOnOff, nameClock,onPress}) => {
  return (
    <TouchableOpacity style={StyleListSetting.rowFront} underlayColor={'#AAA'} onPress={onPress}>
      <View>
        <Text style={StyleListSetting.textHour}>
          {hour}:{minute}
        </Text>

        <View style={StyleListSetting.status}>
          <Text style={StyleListSetting.text}>Trạng thái chuyển :</Text>
          {actionOnOff === 0 || actionOnOff === 'default value' ? (
            <Text> Tắt</Text>
          ) : (
            <Text> Bật</Text>
          )}
        </View>

        <View style={StyleListSetting.status}>
          <Text style={StyleListSetting.text}>{nameClock}:</Text>
          <Text>hàng ngày</Text>
        </View>
      </View>
      <Switch />
    </TouchableOpacity>
  );
};
