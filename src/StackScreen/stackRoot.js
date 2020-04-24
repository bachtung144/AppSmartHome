import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Device from '../Containers/StackDevice/Device';
import Layer from '../Containers/Auth/Layer';
import UserInfor from '../Containers/Auth/UserInfor';
import {createStackNavigator} from 'react-navigation-stack';
import DetailDeviceTest from '../Containers/StackHome/DetailDevice/DetailDeviceTest';
import MenuDetailTest from '../Containers/StackHome/MenuDetail/MenuDetailTest';
import {Dimensions} from 'react-native';
import AddDevice from '../Containers/StackHome/ComponentStackHome/AddDevice';
import DeviceTest from '../Containers/StackDevice/DeviceTest';
import HomeTest from '../Containers/StackHome/HomeDevice/HomeTest';
import ListAlarm from '../StackAlarm/ListAlarm';
import SetClock from '../StackAlarm/SetClock/SetClock';
import ListAction from '../StackAlarm/ListAction/ListAction';
import ActionPower from '../StackAlarm/ListAction/ComponentAction/ActionPower';
import ActionColor from '../StackAlarm/ListAction/ComponentAction/ActionColor';
import ActionGoogleVoice from '../StackAlarm/ListAction/ComponentAction/ActionGoogleVoice';
import ActionHumidity from '../StackAlarm/ListAction/ComponentAction/ActionHumidity';
import ActionTemperature from '../StackAlarm/ListAction/ComponentAction/ActionTemperature';

const screenWidth = Math.round(Dimensions.get('window').width);

const getTabBarIcon = (navigation, focused, tintColor) => {
  const {routeName} = navigation.state;
  let iconName;
  if (routeName === 'Home') {
    iconName = 'home';
  } else if (routeName === 'User') {
    iconName = 'user-alt';
  } else if (routeName === 'Device') {
    iconName = 'satellite-dish';
  } else if (routeName === 'Layer') {
    iconName = 'layer-group';
  }
  return <Icon name={iconName} size={25} color={tintColor} />;
};

const TabNavigator = createBottomTabNavigator(
  {
    Home: {screen: HomeTest},
    Device: {screen: DeviceTest},
    Layer: {screen: Layer},
    User: {
      screen: UserInfor,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
      activeTintColor: '#1291b6',
      inactiveTintColor: 'gray',
    },
  },
);
const StackActions = createStackNavigator({
  ActionPowerScreen: {screen: ActionPower},
  ActionColorScreen: {screen: ActionColor},
  ActionGoogleVoiceScreen: {screen: ActionGoogleVoice},
  ActionHumidityScreen: {screen: ActionHumidity,},
  ActionTemperatureScreen: {screen: ActionTemperature},
},);

const StackSetClock = createStackNavigator({
  ListAlarmScreen: {screen: ListAlarm},
  SetClockScreen: {screen: SetClock,navigationOptions:{
    headerShown:false
    }},
  ListActionScreen: {screen: ListAction},
  ActionsScreen : {screen: StackActions,navigationOptions: {
      headerShown: false,
    },}
});

export const stackRoot = createStackNavigator({
  TabNavigator: {
    screen: TabNavigator,
    navigationOptions: {
      headerShown: false,
    },
  },
  DetailDeviceScreen: {screen: DetailDeviceTest},
  MenuDetailScreen: {
    screen: MenuDetailTest,
    navigationOptions: {
      title: 'Cài đặt thiết bị',
      headerTitleContainerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: screenWidth - 130,
      },
    },
  },
  AddDeviceScreen: {screen: AddDevice},
  StackSetClockScreen: {
    screen: StackSetClock,
    navigationOptions: {
      headerShown: false,
    },
  },
});
