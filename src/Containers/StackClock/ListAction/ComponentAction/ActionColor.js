import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {ColorPicker} from 'react-native-color-picker';
import {styleActionColor} from '../StyleComponentAction/StyleActionColor';

const ActionColor = React.memo(function ActionColor({
  navigation,
  arr_action_done,
}) {
  const [colorPicked, setColor] = useState('white');
  let callback = navigation.getParam('callback', 'default value');
  let value = navigation.getParam('value', 'default value');
  let command = navigation.getParam('command', 'default value');
  let command_pass = arr_action_done[0].command;

  return (
    <View>
      <ColorPicker
        onColorSelected={color => setColor(color)}
        style={styleActionColor.colorPicker}
      />
      <View style={styleActionColor.footer}>
        <View>
          <Text style={styleActionColor.textLeft}>Màu đang chọn</Text>
          <View
            style={[styleActionColor.testColor, {backgroundColor: colorPicked}]}
          />
          <Text style={styleActionColor.textLeft}>Màu đã chọn</Text>
          <View
            style={[
              styleActionColor.testColor,
              {backgroundColor: command === command_pass ? value : 'white'},
            ]}
          />
        </View>
        <TouchableOpacity
          style={styleActionColor.buttonAgree}
          onPress={() => {
            navigation.dismiss();
            callback(command_pass, colorPicked);
          }}
          value_check={value}>
          <Text style={styleActionColor.textAg}>Đồng ý</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});

export default ActionColor;
