import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Home from '../Containers/StackHome/Home';
import HeaderHome from '../Components/HeaderHome';
import Device from '../Containers/Auth/Device';
import Layer from '../Containers/Auth/Layer';
import UserInfor from '../Containers/Auth/UserInfor';
import {createStackNavigator} from 'react-navigation-stack';
import DetailDevice from '../Containers/StackHome/DetailDevice';
import {Text} from 'react-native';
import HeaderDetailDevice from '../Components/HeaderDetailDevice';
import MenuDetail from '../Containers/StackHome/MenuDetail';
import Alarm from '../Containers/StackHome/Alarm';
import AddAlarm from '../Containers/StackHome/AddAlarm';
import {createAppContainer} from "react-navigation";
import {Dimensions} from 'react-native';
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
        Home: {screen: Home},
        Device: {screen: Device},
        Layer: {screen: Layer},
        User: {screen: UserInfor,
            navigationOptions : {
                header: null,
            }},
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
        }
    },
);

// const stackDevice = createStackNavigator({
//     DetailDevice : {screen:DetailDevice}
// })
const tabDetailDevice = createBottomTabNavigator(
    {
        AlarmScreen:{screen:Alarm},
        AddAlarmScreen:{screen:AddAlarm},
    }
)

export const stackRoot = createStackNavigator({
    TabNavigator : TabNavigator,
    DetailDeviceScreen : {screen:DetailDevice,},
    MenuDetailScreen:{screen:MenuDetail,
        navigationOptions:{
            title:'Cài đặt thiết bị',
            headerTitleContainerStyle: {
                alignItems: 'center',
                justifyContent: 'center',
                width: screenWidth - 130,
            },
        }},
    AlarmScreen:{screen:Alarm},
    AddAlarmScreen:{screen:AddAlarm},
},)

// export const stackRootTest = createAppContainer(stackRoot);

