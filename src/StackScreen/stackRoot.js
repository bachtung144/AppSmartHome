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
import ListAlarm from '../Containers/StackClock/ListAlarm';
import SetClock from '../Containers/StackClock/SetClock/SetClock';
import ListAction from '../Containers/StackClock/ListAction/ListAction';
import TermAction from '../Containers/StackClock/ListAction/ComponentAction/TermAction';
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
  ListActionScreen: {
    screen: ListAction,
    navigationOptions: {
      headerShown: false,
    },
  },
  TermActionScreen:{screen:TermAction,navigationOptions: {
      headerShown: false,
    },}
});

const StackSetClock = createStackNavigator({
  ListAlarmScreen: {screen: ListAlarm},
  SetClockScreen: {
    screen: SetClock,
    navigationOptions: {
      headerShown: false,
    },
  },
  ActionsScreen: {
    screen: StackActions,
    navigationOptions: {
      headerShown: false,
    },
  },
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
