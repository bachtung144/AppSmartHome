import React, {Component} from 'react';
import {Button, View,TextInput } from 'react-native';

export default class InputMXN extends Component{
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <TextInput placeholder={"ma xac nhan"}></TextInput>
                <Button title={"Xac nhan"} onPress={() => navigate('NewPassScreen')}></Button>
                <Button title={"dang ki tai khoan"} ></Button>
                <Button title={"dang  nhap"} ></Button>
            </View>
        );
    }
}
