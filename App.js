import React from "react";
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createSwitchNavigator} from 'react-navigation';
import Login from './src/Containers/Auth/Login';
import ForgetPass from './src/Containers/Auth/ForgetPass';
import InputMXN from './src/Containers/Auth/InputMXN';
import NewPass from './src/Containers/Auth/NewPass';
import SignUp from './src/Containers/Auth/SignUp';
import Splash from './src/Containers/Splash';
import {Dimensions } from "react-native";
const screenWidth = Math.round(Dimensions.get('window').width);
const StackNavigatorAuth = createStackNavigator({
    LoginScreen:{
        screen: Login,
        navigationOptions :{
            title:"Đăng nhập",
            headerTitleContainerStyle: {
                alignItems: "center",
                justifyContent: "center",
                width : screenWidth - 35
            },
        }
    },
    ForgetPassScreen:{
        screen: ForgetPass,
        navigationOptions:{
            title:"Quên mật khẩu",
            headerTitleContainerStyle: {
                alignItems: "center",
                justifyContent: "center",
                width : screenWidth - 147
            },
        }
    },
    InputMXNScreen:{
        screen: InputMXN,
        navigationOptions:{
            title:"Nhập mã xác nhận"
        }
    },
    NewPassScreen:{
        screen: NewPass,
        navigationOptions:{
            title:"Nhập mật khẩu mới"
        }
    },
    SignUpScreen:{
        screen: SignUp,
        navigationOptions:{
            title:"Đăng kí tài khoản"
        }
    },
})


const InitialNavigator = createSwitchNavigator({
    SplashScreen: {
        screen : Splash
    },
    Auth: StackNavigatorAuth
});
const AppContainer_splash =  createAppContainer(InitialNavigator);
export default class App extends React.Component {
    render() {
        return (
            <AppContainer_splash></AppContainer_splash>
        )
    }
}
