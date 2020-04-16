import React, {Component} from 'react';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import 'react-native-gesture-handler';
import {connect} from 'react-redux';
import Loading from '../../../Components/Loading';
import HeaderHome from '../ComponentStackHome/HeaderHome';

import ListDevice from './ListDevice';
class HomeTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listRoom: [],
      appTest: null,
    };
  }

  getData = async () => {
    let obj = {};
    await this.setState({listRoom: this.props.ListRoom});
    let term = this.props.ListRoom;
    for (let i = 0; i < term.length; i++) {
      // console.warn(obj[term[i].id]);
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
    if (this.props.ListRoom !== null) {
      this.getData();
    }
  };

  render() {
    // console.warn('hello1'+ this.props.ListRoom)
    if (this.state.appTest === null) {
      return <Loading />;
    }
    let AppTest = this.state.appTest;
    return (
      <>
        <HeaderHome />
        <AppTest />
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    ListAllDevice: state.ListAllDevice.ListAllDevice,
    ListRoom: state.ListRoom.ListRoom,
  };
};

export default connect(
  mapStateToProps,
  null,
)(HomeTest);
