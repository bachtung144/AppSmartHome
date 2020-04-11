import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import io from 'socket.io-client';
import {View,Text} from 'react-native';

export default class App3 extends React.Component {
    constructor(props) {
        super(props);
        this.socket = io(' https://thuctapgratiot.herokuapp.com/');
        this.socket.on('connection', function() {
            console.log('check ', this.socket.connected);
        });
        this.socket.on('listRoom');
        this.socket.emit('listRoom',response => console.log(response.json))
    }
    componentDidMount(): void {
         this.socket.on('listRoom');
        this.socket.emit('listRoom',response => console.warn(response))
    }

    render() {
        return (
            <View>
                <Text>Hello App3</Text>
            </View>
        );
    }
}
