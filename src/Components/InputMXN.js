import React, {Component} from 'react';
import {Button, View,TextInput,Text } from 'react-native';

export default class InputMXN extends Component{
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text> Mã xác nhận đã được gửi vào số điện thoại
                    {this.props.navigation.state.params.Phone_Clicked}</Text>
                <TextInput placeholder={"Mã xác nhận"}></TextInput>
                <Button title={"Xác nhận"} onPress={() => navigate('NewPassScreen')}></Button>
                <Button title={"Đăng kí tài khoản"} ></Button>
                <Button title={"Đăng nhập"} onPress={() => navigate('LoginScreen')}></Button>
            </View>
        );
    }
}
