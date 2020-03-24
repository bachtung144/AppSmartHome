import React, {Component} from 'react';
import {
  SafeAreaView,
  FlatList,
  Dimensions,
  Button,
  ScrollView,
} from 'react-native';
import io from 'socket.io-client';
import Item from '../../Function/Item';
import AddDevice from '../../Function/AddDevice';
import NavigationService from '../../Function/NavigationService';
import {AddListDevice} from '../../Redux/Action/ActionListDevice';
import {connect} from 'react-redux';
const screenWidth = Math.round(Dimensions.get('window').width);
import Loading from '../../Components/Loading';
import ItemDeviceRoom from '../../Function/Item';

import {AddListDeviceRoom} from '../../Redux/Action/ActionListDeviceRoom';

class ListDeviceTest extends Component {
  constructor(props) {
    super(props);
    this.socket = io('http://192.168.99.199:1123');
    this.state = {
      newArr: [],
    };
    // this.newArr = this.InitArrayAction(this.props.DATA,this.props.ListTest);
    let {navigation} = this.props;
    this.roomID = navigation.state.key;
  }

  componentDidMount = async () => {
    this.socket.emit('deviceRoom', JSON.stringify({roomId: this.roomID}));
    this.socket.on('deviceRoom', async response => {
      await this.props.AddListDeviceRoom(
        JSON.parse(response).data,
        this.roomID,
      );
    });
  };

  render() {
    if (!this.props.ListDeviceRoom) {
      return (
        <Loading/>
      );
    }

    return (
      <SafeAreaView>
        <ScrollView>
          {this.props.ListDeviceRoom ? (
            <FlatList
              numColumns={Math.floor(screenWidth / 150)}
              data={[...this.props.ListDeviceRoom, 'item']}
              keyExtractor={item => item.id}
              renderItem={({item, index}) =>
                index > this.props.ListDeviceRoom.length - 1 ? (
                  <AddDevice onPress={() => console.warn('hello')} />
                ) : (
                  <ItemDeviceRoom id={item.id} />
                )
              }
            />
          ) : null}
          <Button
            title={'test1'}
            onPress={() => console.warn(this.props.ListAllDevice)}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const mapStateToProps = (state, props) => {
  let {navigation} = props;
  let roomID = navigation.state.key;

  return {
    ListDeviceRoom: state.ListDeviceRoom.ListDeviceRoom[roomID],
    ListAllDevice: state.ListAllDevice.ListAllDevice,
  };
};

const mapDispatchToProps = dispatch => ({
  AddListDeviceRoom: (ListDeviceRoom, roomId) =>
    dispatch(AddListDeviceRoom(ListDeviceRoom, roomId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListDeviceTest);
