import React, {Component} from 'react';
import io from 'socket.io-client';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import 'react-native-gesture-handler';
import ListDevice from './ListDevice';
import {View, Text} from 'react-native';
import socket from '../../../Socket/SocketIo';
import {DeleteListAlarm} from '../../../Redux/ListDeviceOld/ActionListDevice';
import {connect} from 'react-redux';
import Loading from '../../../Components/Loading';

 class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listRoom: [],
      appTest: null,
    };
  }

  getData = async response => {
    let obj = {};
    await this.setState({listRoom: JSON.parse(response).data});
    let term = JSON.parse(response).data;
    console.log(term)
    for (let i = 0; i < term.length; i++) {
      obj[term[i].id] = {
        screen: ListDevice,
        navigationOptions: {
          tabBarLabel: term[i].roomName,
        },
      };
    }
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
  };

  componentDidMount = async () => {
    await socket.SocketEmit('listRoom');
    await socket.SocketOn('listRoom', this.getData);
    await socket.SocketEmit('listAction');
    await socket.SocketOn('listAction', response => {
          this.props.AddListAction(JSON.parse(response).data)
        }
    )
    // socket.checkConnect()
  };

  render() {
    if (this.state.appTest === null) {
      return (
          <Loading/>
      );
    }
    let AppTest = this.state.appTest;
    return <AppTest />;
  }
}
const mapStateToProps = state => ({
  ListAction : state.ListAction.ListAction
});
const mapDispatchToProps = dispatch => ({
  AddListAction : (ListAction: []) =>   dispatch(AddListAction(ListAction)),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);
