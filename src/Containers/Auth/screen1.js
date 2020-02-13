import React, {Component} from 'react';
import {Text, View, Button, TextInput, TouchableOpacity} from 'react-native';
import io from 'socket.io-client';
import AppTest from './AppContainer';

export default class screen1 extends Component{
    constructor(props) {
        super(props);
        this.state = {
            listRoom:[]
        };
        this.socket = io('http://192.168.99.199:1123');
    }
    componentDidMount() {
        this.socket.emit('listRoom');
        this.socket.on('listRoom', response =>
            this.setState({listRoom:JSON.parse(response).data}),
        );
    }
    submitChatMessage() {
        this.socket.emit('listRoom');
        this.socket.on('listRoom', response =>
            console.warn(JSON.parse(response).data),
        );
    }
    render(){
        return(
            <View><View>
                {this.state.listRoom.map((item, index)=>{
                    return (<Text key = {index}>{item.roomName}</Text>)
                })}
            </View>
                <Button onPress={() => this.submitChatMessage()} title={'test'}/>
            </View>
        )
    }
}
