import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet } from 'react-native';
import io from 'socket.io-client';

export default class AddDevice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deviceModel: '',
            deviceName: '',
        };
    }
    add = async () =>{
        this.socket = io('http://192.168.99.199:1123');
        this.socket.emit('addDevice',
            (JSON.stringify({deviceModel:this.state.deviceModel,deviceName:this.state.deviceName})))
        this.socket.on('addDevice',response => {console.warn(JSON.parse(response))})
    };

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    value={this.state.deviceModel}
                    onChangeText={(deviceModel) => this.setState({ deviceModel })}
                    placeholder={'deviceModel'}
                    style={styles.input}
                />
                <TextInput
                    value={this.state.deviceName}
                    onChangeText={(deviceName) => this.setState({ deviceName })}
                    placeholder={'deviceName'}
                    style={styles.input}
                />
                <Button
                    title={'Add'} onPress={() => this.add()}
                />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    input: {
        width: 300,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
    },
});
