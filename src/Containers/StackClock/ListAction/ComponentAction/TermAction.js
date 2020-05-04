import React from 'react';
import ActionPower from './ActionPower';
import ActionColor from './ActionColor';
import ActionHumidity from './ActionHumidity';
import ActionTemperature from './ActionTemperature';
import ActionGoogleVoice from './ActionGoogleVoice';
import GoBackButton from '../../../../Components/GoBackButton';
import NavigationService from '../../../../Function/NavigationService';
import GobackAction from '../../../../StackAlarm/ListAction/GobackAction';

const TermAction = React.memo(function TermAction({navigation}) {
  let arr_action_done = navigation.getParam('arr_action_done');
  let check_goback = navigation.getParam('check_goback','default value');
  console.warn(check_goback);
  let command_check = arr_action_done[0].command;
  switch (command_check) {
    case 'power':
      return (
        <ActionPower
          arr_action_done={arr_action_done}
          navigation={navigation}
        />
      );
    case 'color':
      return (
        <ActionColor
          arr_action_done={arr_action_done}
          navigation={navigation}
        />
      );
    case 'humidity':
      return <ActionHumidity />;
    case 'temperature':
      return <ActionTemperature />;
    case 'google_voice':
      return <ActionGoogleVoice />;
  }
});
// TermAction.navigationOptions = ({navigation}) => ({
//   headerLeft: () => (
//       <GoBackButton
//           onPress={() => navigation.d
//           }
//       />
//   ),
// });
export default TermAction;
