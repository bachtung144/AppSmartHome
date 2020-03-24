import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Home from '../Containers/StackHome/Home';
import HeaderHome from '../Components/HeaderHome';
import Device from '../Containers/StackDevice/Device';
import Layer from '../Containers/Auth/Layer';
import UserInfor from '../Containers/Auth/UserInfor';
import {createStackNavigator} from 'react-navigation-stack';
import DetailDeviceTest from '../Containers/StackHome/DetailDeviceTest';
import DetailDevice from '../Containers/StackHome/DetailDevice';
import MenuDetail from '../Containers/StackHome/MenuDetail';
import MenuDetailTest from '../Containers/StackHome/MenuDetailTest'
import {Dimensions} from 'react-native';
import AddDevice from '../Containers/StackHome/AddDevice';
import ListSetAction from '../Containers/StackSetClock/ListSetAction';
import ListSettingClock from '../Containers/StackSetClock/ListSettingClock';
import SetClock from '../Containers/StackSetClock/SetClock';
import ActionOnOff from '../Containers/StackSetClock/ComponentAction/ActionOnOff';
import ActionChangeColor from '../Containers/StackSetClock/ComponentAction/ActionChangeColor';
import ActionGoogleVoice from '../Containers/StackSetClock/ComponentAction/ActionGoogleVoice';
import ActionHumidity from '../Containers/StackSetClock/ComponentAction/ActionHumidity';
import ActionTemperature from '../Containers/StackSetClock/ComponentAction/ActionTemperature';
import DeviceTest from '../Containers/StackDevice/DeviceTest';
import HomeTest from '../Containers/StackHome/HomeTest';

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
    navigationOptions: {
      header: () => <HeaderHome />,
    },
  },
);

const StackSetClock = createStackNavigator({
  ListSettingClockScreen: {screen: ListSettingClock},
  SetClockScreen: {
    screen: SetClock,
    navigationOptions: {
      headerShown: false,
    },
  },
  ListSetActionScreen: {screen: ListSetAction},
  ActionOnOffScreen: {screen: ActionOnOff},
  ActionChangeColorScreen: {screen: ActionChangeColor},
  ActionGoogleVoiceScreen:{screen:ActionGoogleVoice},
  ActionHumidityScreen:{screen:ActionHumidity},
  ActionTemperatureScreen:{screen:ActionTemperature}
});

export const stackRoot = createStackNavigator({
  TabNavigator: TabNavigator,
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
