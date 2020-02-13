import React, {Component} from 'react';
// import AppTest from './AppContainer';
import io from 'socket.io-client';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import screen1 from './screen1';
import {createAppContainer} from "react-navigation";
import screen2 from './screen2';
import 'react-native-gesture-handler';
const data={screen:screen2}
const TabNavigator = createMaterialTopTabNavigator({
      data,
      screen2: {screen:screen2},
      screen3:{screen:screen2},
      screen4:{screen:screen2},
      screen5:{screen:screen2},
    },
    {swipeEnabled:true});

const AppTest = createAppContainer(TabNavigator);

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listRoom:[]
    };
    this.socket = io('http://192.168.99.199:1123');
  }

  // componentDidMount() {
  //   this.socket.emit('listRoom');
  //   this.socket.on('listRoom', response =>
  //       this.setState({listRoom:JSON.parse(response).data}),
  //       this.checkSocket()
  //   );
  // }
  // checkSocket(){
  //     for(let i=0;i<this.state.listRoom.length;i++){
  //     this.state.listRoom[i].roomName = {screen:screen1}
  //   }
  // }
//   for(let i=0;i<this.state.listRoom.length;i++){
//   this.state.listRoom[i].roomName = {screen:screen1}
// }
  render() {
    return (
        <AppTest/>
    );
  }
}
