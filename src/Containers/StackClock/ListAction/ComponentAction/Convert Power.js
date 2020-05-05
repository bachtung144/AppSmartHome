import {store} from '../../../../Redux/Store';
import {View, Text} from 'react-native';
import React from 'react';
import {styleConvertColor} from '../StyleComponentAction/StyleConvertColor';

export default function ConvertPower(command, value) {
  let ActionDeviceInfor = store.getState().ListAction.ListAction[0];
  switch (command) {
    case 'power':
      let checkPower = ActionDeviceInfor.filter(
        item => item.command === 'power',
      )[0];
      let nameCommand_convert = checkPower.name;
      let checkListPower = checkPower.values;
      let checkValue = checkListPower.filter(item => item.value === value);
      let value_convert = checkValue.length !== 0 ? checkValue[0].name : null;
      return {nameCommand: nameCommand_convert, nameValue: value_convert};
    case 'color':
      let nameCommandColor = ActionDeviceInfor.filter(
        item => item.command === 'color',
      )[0].name;
      return {
        nameCommand: command,
        nameValue: null,
        cptValue: (
          <View style={styleConvertColor.container}>
            <Text style={styleConvertColor.text}>{nameCommandColor} : </Text>
            <View
              style={[
                styleConvertColor.containerColor,
                {backgroundColor: value},
              ]}
            />
          </View>
        ),
      };
    default:
      return {nameCommand: null, nameValue: null};
  }
}
