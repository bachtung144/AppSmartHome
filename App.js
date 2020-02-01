import * as React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import DangNhap from './android/Screens/DangNhap';
import QuenMK from './android/Screens/QuenMK';
import NhapMaXacNhan from './android/Screens/NhapMaXacNhan';
import NhapMatKhauMoi from './android/Screens/NhapMatKhauMoi';

const AppNavigator = createStackNavigator(
    {
        DangNhap,
        QuenMK,
        NhapMaXacNhan,
        NhapMatKhauMoi
    },
    {
        initialRouteName: 'DangNhap'
    }
);
const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}
