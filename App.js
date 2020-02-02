import React from "react";
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './src/Components/Login';
import ForgetPass from './src/Components/ForgetPass';
import InputMXN from './src/Components/InputMXN';
import NewPass from './src/Components/NewPass';


const StackNavigator = createStackNavigator({
    LoginScreen:{
        screen: Login,
        navigationOptions:{
            title:"Dang Nhap"
        }
    },
    ForgetPassScreen:{
        screen: ForgetPass,
        navigationOptions:{
            title:"Quen mat khau"
        }
    },
    InputMXNScreen:{
        screen: InputMXN,
        navigationOptions:{
            title:"Nhap ma xac nhan"
        }
    },
    NewPassScreen:{
        screen: NewPass,
        navigationOptions:{
            title:"Nhap mat khau moi"
        }
    }
})

const AppContainer = createAppContainer(StackNavigator);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}
