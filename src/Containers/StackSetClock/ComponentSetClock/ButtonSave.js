import React from 'react';
import {
    TouchableOpacity,
    Text,
} from 'react-native';

export default class ButtonSave extends React.PureComponent{
    render(){
        let onPress = this.props.onPress;
        return(
            <TouchableOpacity onPress={onPress}>
                <Text style={{color:'#1291b6',marginRight:10,fontSize:20}}>Lưu</Text>
            </TouchableOpacity>
        )
    }
}

