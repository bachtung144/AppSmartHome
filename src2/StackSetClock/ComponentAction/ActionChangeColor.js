import React,{Component} from 'react';
import {Text,View } from 'react-native';
import { ColorPicker } from 'react-native-color-picker'

export default class ActionChangeColor extends Component{
    render(){
        return(
            <ColorPicker
                onColorSelected={color => alert(`Color selected: ${color}`)}
                style={{flex:1}}
            />
        )
    }
}
