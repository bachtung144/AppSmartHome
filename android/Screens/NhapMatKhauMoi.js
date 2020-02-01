import React, {Component} from 'react';
import {Button, View, Text,TextInput } from 'react-native';

export default class NhapMatKhauMoi extends Component{
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <TextInput placeholder={"nhap mat khau moi"}></TextInput>
                <Button title={"Xac nhan"} onPress={() => navigate('DangNhap')}></Button>
            </View>
        );
    }
}
