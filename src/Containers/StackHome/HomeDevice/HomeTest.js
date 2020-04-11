import React, {Component} from 'react';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import 'react-native-gesture-handler';
import socket from '../../../Socket/SocketIo';
import {connect} from 'react-redux';
import Loading from '../../../Components/Loading';
import ListDeviceTest from './ListDeviceTest';
import {AddListAllDevice} from '../../../Redux/ListAllDevice/ActionListAllDevice';
import io from 'socket.io-client';
import {View} from 'react-native';
import HeaderHome from '../../../Components/HeaderHome';
import {AddListAction} from '../../../Redux/ListAction/ActionListAction';

class HomeTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listRoom: [],
      appTest: null,
    };
    this.socket = io('https://thuctapgratiot.herokuapp.com/');
  }

  getData = async response => {
    // console.log(JSON.parse(response));
    let obj = {};
    await this.setState({listRoom: JSON.parse(response).data});
    let term = JSON.parse(response).data;
    // console.log(term)
    for (let i = 0; i < term.length; i++) {
      obj[term[i].id] = {
        screen: ListDeviceTest,
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
  };

  render() {
    // console.warn(this.props.ListAllDevice)
    if (this.state.appTest === null) {
      return <Loading />;
    }
    let AppTest = this.state.appTest;
    return (
        <>
        <HeaderHome/>
          <AppTest />
        </>
    );

  }
}
const mapStateToProps = (state, props) => {
  return {
    ListAllDevice: state.ListAllDevice.ListAllDevice,
  };
};

const mapDispatchToProps = dispatch => ({
  AddListAllDevice: (ListAllDevice: []) =>
    dispatch(AddListAllDevice(ListAllDevice)),
  AddListAction : (ListAction: []) =>   dispatch(AddListAction(ListAction)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeTest);
