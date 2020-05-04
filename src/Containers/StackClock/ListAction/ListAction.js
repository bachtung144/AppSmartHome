import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {styleListAction} from './StyleComponentAction/StyleListAction';
import GoBackButton from '../../../Components/GoBackButton';
import {StyleSetClockScreen} from '../StyleStackAlarm/StyleStackAlarm';

class ItemAction extends React.Component {
  render() {
    let onPress = this.props.onPress;
    return (
      <TouchableOpacity style={styleListAction.item} onPress={onPress}>
        <Text style={styleListAction.title}>{this.props.ActionName}</Text>
        <Feather
          name={'chevron-right'}
          size={27}
          style={styleListAction.feather}
        />
      </TouchableOpacity>
    );
  }
}

export default class ListAction extends React.Component {
  navigateAction(command_check) {
    const {navigation} = this.props;
    const {navigate} = this.props.navigation;
    let callback = navigation.getParam('callback', 'default value');
    let command = navigation.getParam('command', 'default value');
    let value = navigation.getParam('value', 'default value');
    let arr_action = navigation.getParam('arr_action_done', 'default value');
    let arr_action_done = arr_action.filter(
      item => item.command === command_check,
    );
    navigate('TermActionScreen', {
      arr_action_done: arr_action_done,
      callback: callback,
      command: command,
      value: value,
      check_goback:true
    });
  }
  render() {
    const {navigation} = this.props;
    let arr_action_done = navigation.getParam(
      'arr_action_done',
      'default value',
    );
    return (
      <View>
        <View style={StyleSetClockScreen.header}>
          <GoBackButton onPress={() => navigation.dismiss()} />
        </View>
        <FlatList
          data={arr_action_done}
          renderItem={({item}) => (
            <ItemAction
              ActionName={item.name}
              onPress={() => this.navigateAction(item.command)}
            />
          )}
          keyExtractor={item => item.command}
        />
      </View>
    );
  }
}
