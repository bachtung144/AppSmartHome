import {createStackNavigator} from 'react-navigation-stack';
import Login from '../Containers/Auth/Login';
import ForgetPass from '../Containers/Auth/ForgetPass';
import InputMXN from '../Containers/Auth/InputMXN';
import NewPass from '../Containers/Auth/NewPass';
import SignUp from '../Containers/Auth/SignUp';
import InputMXNSignUp from '../Containers/Auth/InputMXNSignUp';
import {Dimensions} from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width);
export const StackNavigatorAuth = createStackNavigator({
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
