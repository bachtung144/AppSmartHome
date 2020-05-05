import React from 'react';
import {View} from 'react-native';
import GoBackButton from '../../Components/GoBackButton';
import NavigationService from '../../Function/NavigationService';
import ButtonAdd from '../../Components/ButtonAdd';

export default class ListAlarm extends React.Component {
  static navigationOptions = ({navigation}) => {
    let id = navigation.getParam('id', 'default value');
    return {
      title: 'Danh sách báo thức',
      headerLeft: () => (
        <GoBackButton
          onPress={() => NavigationService.navigate('DetailDeviceScreen')}
        />
      ),
      headerRight: () => (
        <ButtonAdd
          onPress={() =>
            navigation.navigate('SetClockScreen', {
              id: id,
              LastRouteName: navigation.state.routeName,
            })
          }
        />
      ),
      headerTitleContainerStyle: {
        marginLeft: 15,
      },
    };
  };
  render() {
    return <View />;
  }
}
