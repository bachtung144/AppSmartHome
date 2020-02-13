import React, {Component} from 'react';
import {Text, View, Button, TextInput, TouchableOpacity} from 'react-native';
import io from 'socket.io-client';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderHome from '../../Components/HeaderHome';
import {createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Device from './Device';
import Layer from './Layer';
import UserInfor from './UserInfor';
import screen1 from './screen1';
import screen2 from './screen2';
import {createAppContainer} from "react-navigation";
import AppTest from './AppContainer';

// const TabNavigator = createMaterialTopTabNavigator({
//     screen1: {screen: screen1},
//     screen2:{screen:screen2},
// });


export default class Home extends Component {
    // static navigationOptions = {
    //     headerTitle: 'Home',
    //     headerStyle: {
    //         backgroundColor: '#f4511e',
    //     },
    //     headerTintColor: '#fff',
    //     headerTitleStyle: {
    //         fontWeight: 'bold',
    //     },
    // };
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

  render() {
    return (

        <AppTest>
          <View>
              {this.state.listRoom.map((item, index)=>{
                  return (<Text key = {index}>{item.roomName}</Text>)
              })}
          </View>
          <Button onPress={() => this.submitChatMessage()} title={'test'}></Button>

        </AppTest>
    );
  }
}
