import React, {Component} from 'react';
import {Button, View,TextInput } from 'react-native';

export default class NewPass extends Component{
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <TextInput placeholder={"Nhập mật khẩu mới"}></TextInput>
                <Button title={"Xác nhận"} onPress={() => navigate('LoginScreen')}></Button>
            </View>
        );
    }
}
