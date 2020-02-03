import React, {Component} from 'react';
import {Button, View, Text,TextInput,TouchableOpacity ,ImageBackground} from 'react-native';
import BackGround from './BackGround';
import CountryPicker, { getAllCountries, getCallingCode } from 'react-native-country-picker-modal';
import Icon from 'react-native-vector-icons/FontAwesome';
import background_input from '../Picture/backround_input.png'
import ButtonCustom from './Button'

export default class ForgetPass extends Component {
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
                <Button title={"Đăng kí tài khoản"} style={{marginLeft:'auto'}}></Button>
                <Button title={"Đăng nhập"} onPress={() => navigate('LoginScreen')} ></Button>
            </View>
        );
    }
}
