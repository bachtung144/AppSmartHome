import React, {Component} from 'react';
import {Button, View, Text,TextInput } from 'react-native';


export default class Login extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>Quoc Gia</Text>
                <TextInput placeholder={"so dien thoai"}></TextInput>
                <TextInput placeholder={"mat khau"}></TextInput>
                <Button title={"Dang Nhap"} ></Button>
                <Button title={"Dang ki tai khoan"} style={{marginLeft:'auto'}}></Button>
                <Button title={"Quen mat khau"} style={{marginRight:'auto'}} onPress={() => navigate('ForgetPassScreen')}>

                </Button>
            </View>
        );
    }
}
