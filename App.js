import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createSwitchNavigator} from 'react-navigation';
import Login from './src/Containers/Auth/Login';
import ForgetPass from './src/Containers/Auth/ForgetPass';
import InputMXN from './src/Containers/Auth/InputMXN';
import NewPass from './src/Containers/Auth/NewPass';
import SignUp from './src/Containers/Auth/SignUp';
import Splash from './src/Containers/Splash';
import {Dimensions} from 'react-native';
import UserInfor from './src/Containers/Auth/UserInfor';
import InputMXNSignUp from './src/Containers/Auth/InputMXNSignUp';
import Home from './src/Containers/Auth/Home';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Device from './src/Containers/Auth/Device';
import Layer from './src/Containers/Auth/Layer';


const screenWidth = Math.round(Dimensions.get('window').width);

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let iconName;
  if (routeName === 'Home') {
    iconName = `home`;
  } else if (routeName === 'User') {
    iconName = `user-alt`;
  }else if (routeName === 'Device'){
    iconName = `satellite-dish`;
  }else if (routeName === 'Layer'){
    iconName = `layer-group`
  }
  return <Icon name={iconName} size={25} color={tintColor} />;
};
const TabNavigator = createBottomTabNavigator({
  Home: {screen: Home},
  Device:{screen:Device},
  Layer:{screen:Layer},
  User: {screen: UserInfor},
},
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) =>
            getTabBarIcon(navigation, focused, tintColor),
      }),
      tabBarOptions: {
        activeTintColor: '#1291b6',
        inactiveTintColor: 'gray',
      },
    }
);
const StackNavigatorAuth = createStackNavigator({
  LoginScreen: {
    screen: Login,
    navigationOptions: {
      title: 'Đăng nhập',
      headerTitleContainerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: screenWidth - 35,
      },
    },
  },
  ForgetPassScreen: {
    screen: ForgetPass,
    navigationOptions: {
      title: 'Quên mật khẩu',
      headerTitleContainerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: screenWidth - 147,
      },
    },
  },
  InputMXNScreen: {
    screen: InputMXN,
    navigationOptions: {
      title: 'Nhập mã xác nhận',
      headerTitleContainerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: screenWidth - 147,
      },
    },
  },
  NewPassScreen: {
    screen: NewPass,
    navigationOptions: {
      title: 'Nhập mật khẩu mới',
      headerTitleContainerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: screenWidth - 50,
      },
      headerLeft: null,
      gesturesEnabled: false,
    },
  },
  SignUpScreen: {
    screen: SignUp,
    navigationOptions: {
      title: 'Đăng kí tài khoản',
      headerTitleContainerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: screenWidth - 147,
      },
    },
  },

  InputMXNSignUpScreen: {
    screen: InputMXNSignUp,
    navigationOptions: {
      title: 'Nhập mã xác nhận',
      headerTitleContainerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: screenWidth - 50,
      },
      headerLeft: null,
      gesturesEnabled: false,
    },
  },
});

const InitialNavigator = createSwitchNavigator({
  SplashScreen: {
    screen: Splash,
  },
  Auth: StackNavigatorAuth,
  UserInforScreen: TabNavigator,
});

const AppContainer_splash = createAppContainer(InitialNavigator);
export default class App extends React.Component {
  render() {
    return <AppContainer_splash />;
  }
}
