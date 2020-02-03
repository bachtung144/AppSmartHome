import React, {Component} from 'react';
import {Button, View, Text,TextInput } from 'react-native';
import BackGround from './BackGround';

export default class Login extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <View>
                    <BackGround/>
                </View>
            </View>
        );
    }
}

const styles ={

}
