import React from 'react';
import {Text, TouchableOpacity, SafeAreaView, FlatList,Button} from 'react-native';
import {styleActionPower} from '../StyleComponentAction/StyleActionPower';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
  let check_goback = navigation.getParam('check_goback', 'default value');
  console.warn(check_goback);
  let command_pass = arr_action_done[0].command;
  console.warn(arr_action_done)
  let ListValuesCommand = arr_action_done[0].values;
    const {goBack} = navigation;
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
              callback(command_pass, item.name);
            }}
            value_check={value}
          />
        )}
        keyExtractor={item => item.name}
      />
      {/*<Button title={'d'} onPress={() => navigation.goBack()}/>*/}
    </SafeAreaView>
  );
});

export default ActionPower;
