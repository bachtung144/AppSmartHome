import React, {Component} from 'react';
import {Button, View, Text,TextInput } from 'react-native';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phonenumber:'',
        };
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>Quoc Gia</Text>
                <TextInput placeholder={"Số điện thoại"}
                           value={this.state.phonenumber} onChangeText = {phonenumber => this.setState({phonenumber})}>
                </TextInput>
                <Text>{this.state.input}</Text>
                <TextInput placeholder={"Mật khẩu"}></TextInput>
                <Button title={"Tiếp tục"} onPress={() => navigate('InputMXNScreen',
                    {Phone_Clicked : this.state.phonenumber})}></Button>
                <Button title={"Đăng Nhập"} onPress={() => navigate('LoginScreen')}></Button>
                <Button title={"Quên mật khẩu"} onPress={() => navigate('ForgetPass')} ></Button>
            </View>
        );
    }
}
