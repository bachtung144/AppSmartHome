import React,{Component} from 'react';
import {Text,View } from 'react-native';
import { ColorPicker } from 'react-native-color-picker'

export default class ActionChangeColor extends Component{
    state  ={
        colorPicked :''
    };
    render(){
        return(
            <View>
            <ColorPicker
                onColorSelected={color => this.setState({colorPicked:color})}
                style={{height:400}}
            />
            <View style={{marginTop:20,marginLeft:20}}>
                <Text style={{fontSize:15}}>Màu đã chọn</Text>
                <View
                    style={{backgroundColor:this.state.colorPicked,
                        height:30,width:150,borderWidth:0.5,borderColor:'gray'}}/>
            </View>
            </View>
        )
    }
}
