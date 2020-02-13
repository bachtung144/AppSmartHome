
import React, { Component } from 'react'
import { Text, View , Button,TextInput} from 'react-native'
import io from 'socket.io-client'



export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatMessage: "",
      chatMessages: []
    };
    this.socket = io("http://192.168.99.199:1123");
  }
  // componentDidMount() {
  //   this.socket = io("http://192.168.99.199:1123");
  // }

   submitChatMessage() {
     this.socket.emit('listRoom');
     this.socket.on('listRoom',(response) => console.warn(JSON.parse(response).data))
  }

  render() {

    return (
        <View >
          <Button title={'test'} onPress={() => this.submitChatMessage()}/>
        </View>
             );
  }
}
