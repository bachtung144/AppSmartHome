import React, {Component} from 'react';
import {Text,View,Button} from 'react-native';

export default class ListSettingClock extends React.Component{
    static navigationOptions = {
        headerTitle: 'bla2'
    };
    render(){
        const {navigate} = this.props.navigation
        return(
            <View>
                <Text> List setting Clock</Text>
                <Button title={'SetClock'} onPress={() => navigate('SetClockScreen')}/>
            </View>
        )
    }
}
