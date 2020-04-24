import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import GoBackButton from '../../../Components/GoBackButton';
import NavigationService from '../../../Function/NavigationService';
import GobackAction from '../GobackAction';
import {ColorPicker} from 'react-native-color-picker';
import {styleActionColor} from '../StyleComponentAction/StyleActionColor';
import {store} from '../../../Redux/Store';
import {
  AddActionColor,
  EditActionColor,
} from '../../../Redux/ListActionDevice/ActionListActionDevice';

const ActionColor = React.memo(function ActionColor({navigation}) {
  const [colorPicked, setColor] = useState('white');
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
  let ActionDeviceInfor = store
    .getState()
    .ListActionDevice.ListColor.filter(ele => ele.id === id);
  let id_check =
    ActionDeviceInfor.length !== 0 ? ActionDeviceInfor[0].id : null;
  let command_check =
    ActionDeviceInfor.length !== 0 ? ActionDeviceInfor[0].command : null;
  let color_check =
    ActionDeviceInfor.length !== 0 ? ActionDeviceInfor[0].value : 'white';

  function SelectColor() {
    let obj = {id: id, command: command, value: colorPicked};
    if (id_check === id && command_check === command) {
      store.dispatch(EditActionColor(id, command, colorPicked));
    } else {
      store.dispatch(AddActionColor(obj));
    }
    NavigationService.navigate(LastRouteName);
  }

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
            style={[styleActionColor.testColor, {backgroundColor: color_check}]}
          />
        </View>
        <TouchableOpacity
          style={styleActionColor.buttonAgree}
          onPress={() => SelectColor()}>
          <Text style={styleActionColor.textAg}>Đồng ý</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});

ActionColor.navigationOptions = ({navigation}) => ({
  headerLeft: () => (
    <GoBackButton
      onPress={() =>
        NavigationService.navigate(
          GobackAction(
            navigation.getParam('RouteNameListAction', 'default value'),
            navigation.getParam('LastRouteName', 'default value'),
          ),
          {id: navigation.getParam('id', 'default value')},
        )
      }
    />
  ),
});

export default ActionColor;
