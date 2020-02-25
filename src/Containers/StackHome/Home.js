import React, {Component} from 'react';
import io from 'socket.io-client';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import 'react-native-gesture-handler';
import ListDevice from './ListDevice';
import {View, Text} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import DetailDevice from './DetailDevice';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listRoom: [],
      appTest: null,
    };
    this.socket = io('http://192.168.99.199:1123');
  }


  componentDidMount = async => {
    let obj = {};
    this.socket.emit('listRoom');
    this.socket.on('listRoom', async response => {
      // console.warn(JSON.parse(response).data)
      await this.setState({listRoom: JSON.parse(response).data});
      let term = JSON.parse(response).data;
      for (let i = 0; i < term.length; i++) {
        obj[term[i].id] = {
          screen: ListDevice,
          navigationOptions: {
            tabBarLabel: term[i].roomName,
          },
        };
        // obj[term[i].id] = ListIdRoom[i]
        // ListIdRoom.push(term[i].id)
      }
      // console.warn(obj)
      // await console.warn(ListIdRoom)
      const TabNavigator = createMaterialTopTabNavigator(obj, {
        swipeEnabled: true,
        tabBarOptions: {
          scrollEnabled: true,
          tabStyle: {width: 130, backgroundColor: 'white', height: 40},
          activeTintColor: 'blue',
          inactiveTintColor: 'black',
        },
      });
      this.setState({appTest: createAppContainer(TabNavigator)});
    });

  };

  render() {
    if (this.state.appTest === null) {
      return (
          <View>
            <Text>Loading</Text>
          </View>
      );
    }
    let AppTest = this.state.appTest;
    return <AppTest />;
  }
}
