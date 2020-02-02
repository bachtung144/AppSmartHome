import React from "react";
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './src/Components/Login';
import ForgetPass from './src/Components/ForgetPass';
import InputMXN from './src/Components/InputMXN';
import NewPass from './src/Components/NewPass';
import SignUp from './src/Components/SignUp';


const StackNavigator = createStackNavigator({
    LoginScreen:{
        screen: Login,
        navigationOptions:{
            title:"Đăng nhập"
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

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}
