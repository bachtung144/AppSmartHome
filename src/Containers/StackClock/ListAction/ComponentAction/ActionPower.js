import React from 'react';
import {
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {styleActionPower} from '../StyleComponentAction/StyleActionPower';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ConvertPower from './Convert Power';
function ItemPower({nameOfValueCm, onPress, value_check}) {
  return (
    <TouchableOpacity style={styleActionPower.item} onPress={onPress}>
      <Text style={styleActionPower.textItem}>{nameOfValueCm}</Text>
      {nameOfValueCm === value_check ? (
        <AntDesign name={'checkcircle'} color={'#1291b6'} size={20} />
      ) : null}
    </TouchableOpacity>
  );
}

const ActionPower = React.memo(function ActionPower({
  navigation,
  arr_action_done,
}) {
  let callback = navigation.getParam('callback', 'default value');
  let value = navigation.getParam('value', 'default value');
  let command_pass = arr_action_done[0].command;
  let check_value = ConvertPower(command_pass, value).nameValue;
  let ListValuesCommand = arr_action_done[0].values;
  return (
    <SafeAreaView>
      <FlatList
        style={styleActionPower.flatList}
        data={ListValuesCommand}
        renderItem={({item}) => (
          <ItemPower
            nameOfValueCm={item.name}
            onPress={() => {
              navigation.dismiss();
              callback(command_pass, item.value);
            }}
            value_check={check_value}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
});

export default ActionPower;
