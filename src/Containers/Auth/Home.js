
import React, { Component } from 'react'
import { Text, View , Button} from 'react-native'
import io from 'socket.io-client'
window.navigator.userAgent = 'react-native';



export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
    }
    this.sendReqest = this.sendReqest.bind(this);
  }

  componentDidMount() {
    this.socket = io('http://192.168.99.199:1123');
  }

  sendReqest = () => {
    this.socket.on('listDevice', smg=>{
      this.setState({
        result: smg,
      })
      console.log(smg)
    })
  }

  render() {
    return (
        <View>
          <View>{this.state.result}</View>
          <Button title = {'send'} onPress ={this.sendReqest}/>
        </View>
    )
  }
}
