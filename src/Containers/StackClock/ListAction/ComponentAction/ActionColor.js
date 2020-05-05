import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {ColorPicker} from 'react-native-color-picker';
import {styleActionColor} from '../StyleComponentAction/StyleActionColor';

const ActionColor = React.memo(function ActionColor({
  navigation,
  callback,
  value,
  command_pass,
  command,
}) {
  const [colorPicked, setColor] = useState('white');

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
