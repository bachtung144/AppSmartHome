import React from "react";
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createSwitchNavigator} from 'react-navigation';
import Login from './src/Components/Login';
import ForgetPass from './src/Components/ForgetPass';
import InputMXN from './src/Components/InputMXN';
import NewPass from './src/Components/NewPass';
import SignUp from './src/Components/SignUp';
import Splash from './src/Components/Splash';
import {Dimensions } from "react-native";
const screenWidth = Math.round(Dimensions.get('window').width);
const StackNavigator = createStackNavigator({
    LoginScreen:{
        screen: Login,
        navigationOptions :{
            title:"Đăng nhập",
            // headerTitleContainerStyle :{justifyContent: 'center',alignItems:'center'
            //     ,color:'red',marginLeft:0,paddingLeft:0,width:"100%"}
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
            title:"Quên mật khẩu"
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
const AppContainer = createAppContainer(StackNavigator);

const InitialNavigator = createSwitchNavigator({
    SplashScreen: {
        screen : Splash
    },
    App: StackNavigator
});
const AppContainer_splash =  createAppContainer(InitialNavigator);
export default class App extends React.Component {
    render() {
        return (
            <AppContainer_splash></AppContainer_splash>
        )
    }
}
