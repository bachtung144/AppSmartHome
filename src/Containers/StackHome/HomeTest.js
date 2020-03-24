import React, {Component} from 'react';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import 'react-native-gesture-handler';
import socket from '../../Socket/SocketIo';
import {connect} from 'react-redux';
import Loading from '../../Components/Loading';
import ListDeviceTest from './ListDeviceTest';
import {AddListAllDevice} from '../../Redux/Action/ActionListAllDevice';

class HomeTest extends Component {
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

  };

  render() {
    // console.warn(this.props.ListAllDevice)
    if (this.state.appTest === null) {
      return <Loading />;
    }
    let AppTest = this.state.appTest;
    return <AppTest />;
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
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeTest);
