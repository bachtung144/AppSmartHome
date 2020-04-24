import React from 'react';
import {
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Button,
} from 'react-native';
import GoBackButton from '../../../Components/GoBackButton';
import NavigationService from '../../../Function/NavigationService';
import {store} from '../../../Redux/Store';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  AddActionPower,
  EditActionPower,
} from '../../../Redux/ListActionDevice/ActionListActionDevice';
import {styleActionPower} from '../StyleComponentAction/StyleActionPower';
import GobackAction from '../GobackAction';
function Item({nameOfValueCm, onPress, valueCm}) {
  return (
    <TouchableOpacity style={styleActionPower.item} onPress={onPress}>
      <Text style={styleActionPower.textItem}>{nameOfValueCm}</Text>
      {valueCm === nameOfValueCm ? (
        <AntDesign name={'checkcircle'} color={'#1291b6'} size={20} />
      ) : null}
    </TouchableOpacity>
  );
}

const ActionPower = React.memo(function ActionPower({navigation}) {
  let id = navigation.getParam('id', 'default value');
  let termAction =
    id !== 'default value'
      ? store
          .getState()
          .ListAllDevice.ListAllDevice.filter(ele => ele.id === id)[0].actions
      : [];
  let command =
    termAction.length === 1
      ? termAction[0].command
      : navigation.getParam('command', 'default value');
  let LastRouteName = navigation.getParam('LastRouteName', 'default value');
  let ListAction = store.getState().ListAction.ListAction[0];
  let nameCommand =
    command !== 'default value'
      ? ListAction.filter(ele => ele.command === command)[0].name
      : null;
  let ListValuesCommand =
    command !== 'default value'
      ? ListAction.filter(ele => ele.command === command)[0].values
      : null;
  let ActionDeviceInfor = store
    .getState()
    .ListActionDevice.ListPower.filter(ele => ele.id === id);
  let valueCm =
    ActionDeviceInfor.length !== 0 ? ActionDeviceInfor[0].value : null;
  let id_check =
    ActionDeviceInfor.length !== 0 ? ActionDeviceInfor[0].id : null;
  let command_check =
    ActionDeviceInfor.length !== 0 ? ActionDeviceInfor[0].command : null;

  function settingDone(valueCommand) {
    let obj = {id: id, command: nameCommand, value: valueCommand};
    if (id_check === id && command_check === nameCommand) {
      store.dispatch(EditActionPower(id, nameCommand, valueCommand));
    } else {
      store.dispatch(AddActionPower(obj));
    }
    NavigationService.navigate(LastRouteName);
  }

  return (
    <SafeAreaView>
      <FlatList
        style={styleActionPower.flatList}
        data={ListValuesCommand}
        renderItem={({item}) => (
          <Item
            nameOfValueCm={item.name}
            onPress={() => settingDone(item.name)}
            valueCm={valueCm}
          />
        )}
        keyExtractor={item => item.name}
      />
      {/*<Button title={'rrr'} onPress={() => console.warn(termAction)} />*/}
    </SafeAreaView>
  );
});

ActionPower.navigationOptions = ({navigation}) => ({
  headerLeft: () => (
    <GoBackButton
      onPress={() =>
        NavigationService.navigate(
          GobackAction(
            navigation.getParam('RouteNameListAction', 'default value'),
            navigation.getParam('LastRouteName'),
          ),
          {id: navigation.getParam('id', 'default value')},
        )
      }
    />
  ),
});

export default ActionPower;
