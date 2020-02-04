import React, {Component} from 'react';
import {Button, View,TextInput,Text } from 'react-native';

export default class InputMXN extends Component{
    render() {
        return (
            <View>
                <Text> Mã xác nhận đã được gửi vào số điện thoại
                    {/*(+{this.props.navigation.state.params.Code_Clicked})*/}
                    {/*{this.props.navigation.state.params.Phone_Clicked}*/}
                </Text>
            </View>
        );
    }
}
