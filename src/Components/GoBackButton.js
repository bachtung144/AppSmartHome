import React from 'react';
import {View,TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
export default class GoBackButton extends React.PureComponent{
    render(){
        let onPress = this.props.onPress;
        return(
            <View>
                <TouchableOpacity onPress={onPress}>
                    <Feather name={'arrow-left'} size={30} />
                </TouchableOpacity>
            </View>
        )
    }
}
