import React from 'react';
import ActionPower from './ActionPower';
import ActionColor from './ActionColor';
import ActionHumidity from './ActionHumidity';
import ActionTemperature from './ActionTemperature';
import ActionGoogleVoice from './ActionGoogleVoice';
import GoBackButton from '../../../../Components/GoBackButton';
import {View, Text} from 'react-native';
import {styleTermActionColor} from '../StyleComponentAction/StyleTermAction';

const TermAction = React.memo(function TermAction({navigation}) {
  let arr_action_done = navigation.getParam('arr_action_done');
  let check_goback = navigation.getParam('check_goback', 'default value');
  let callback = navigation.getParam('callback', 'default value');
  let value = navigation.getParam('value', 'default value');
  let command = navigation.getParam('command', 'default value');
  let command_pass = arr_action_done[0].command;
  let command_check = arr_action_done[0].command;

  function checkBack(check_goback) {
    check_goback === 'default value'
      ? navigation.dismiss()
      : navigation.goBack();
  }

  return (
    <View>
      <View style={styleTermActionColor.containerHeader}>
        <View style={styleTermActionColor.containerSmall}>
          <GoBackButton onPress={() => checkBack(check_goback)}/>
          <View style={styleTermActionColor.containerText}>
            <Text style={styleTermActionColor.text}>{arr_action_done[0].name}</Text>
          </View>
        </View>
      </View>
      {
        {
          power: (
            <ActionPower
              arr_action_done={arr_action_done}
              navigation={navigation}
              callback={callback}
              value={value}
              command={command}
              command_pass={command_pass}
            />
          ),
          color: (
            <ActionColor
              arr_action_done={arr_action_done}
              navigation={navigation}
              callback={callback}
              value={value}
              command={command}
              command_pass={command_pass}
            />
          ),
          humidity: <ActionHumidity />,
          temperature: <ActionTemperature />,
          google_voice: <ActionGoogleVoice />,
        }[command_check]
      }
    </View>
  );
});

export default TermAction;
