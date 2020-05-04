import React from 'react';
import {Text} from 'react-native';
import GoBackButton from '../../../../Components/GoBackButton';
import NavigationService from '../../../../Function/NavigationService';

export default class ActionGoogleVoice extends React.Component {
  static navigationOptions = ({navigation}) => {
    let LastRouteName = navigation.getParam('LastRouteName', 'default value');
    return {
      headerLeft: <GoBackButton
          onPress={() => NavigationService.navigate(LastRouteName)}/>
    }
  };
  render() {
    return <Text>ActionGoogleVoice</Text>;
  }
}
