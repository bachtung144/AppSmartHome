import React, {Component} from 'react';
import {Button, View, Text,TextInput } from 'react-native';


export default class Login extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>Quốc gia</Text>
                <TextInput placeholder={"Số điện thoại"}></TextInput>
                <TextInput placeholder={"Mật khẩu"}></TextInput>
                <Button title={"Đăng nhập"} ></Button>
                <Button title={"Đăng kí tài khoản"} style={{marginLeft:'auto'}}></Button>
                <Button title={"Quên mật khẩu"} style={{marginRight:'auto'}} onPress={() => navigate('ForgetPassScreen')}>

                </Button>
            </View>
        );
    }
}
