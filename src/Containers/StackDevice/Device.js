import React, {Component} from 'react';
import {Text} from 'react-native';
import io from 'socket.io-client';

export default class Device extends Component {
    constructor(props) {
        super(props);
        this.socket = io('http://192.168.99.199:1123');
    }
    componentDidMount = async () => {
        await this.socket.emit('listDevice', JSON.stringify({page: 1}));
        this.socket.on('listDevice', async response => {
            console.warn(JSON.parse(response).data)
        });
    };
    render() {
        return (
            <Text>Device</Text>
        );
    }
}


