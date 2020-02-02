import React, {Component} from 'react';
import {Button, View, Text,TextInput } from 'react-native';

export default class ForgetPass extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>Quoc Gia</Text>
                <TextInput placeholder={"so dien thoai"}></TextInput>
                <TextInput placeholder={"mat khau"}></TextInput>
                <Button title={"Tiep tuc"} onPress={() => navigate('InputMXNScreen')}></Button>
                <Button title={"Dang ki tai khoan"} style={{marginLeft:'auto'}}></Button>
                <Button title={"Dang nhap"} ></Button>
            </View>
        );
    }
}
