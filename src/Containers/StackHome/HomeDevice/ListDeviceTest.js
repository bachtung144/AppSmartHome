import React, {Component} from 'react';
import {
  SafeAreaView,
  FlatList,
  Dimensions,
  Button,
  ScrollView,
} from 'react-native';
import io from 'socket.io-client';
import AddDevice from '../../../Function/AddDevice';
import NavigationService from '../../../Function/NavigationService';
import {connect} from 'react-redux';
const screenWidth = Math.round(Dimensions.get('window').width);
import Loading from '../../../Components/Loading';
import ItemDeviceRoom from '../ComponentStackHome/Item';

import {AddListDeviceRoom} from '../../../Redux/ListDeviceRoom/ActionListDeviceRoom';

class ListDeviceTest extends Component {
  constructor(props) {
    super(props);
    this.socket = io('https://thuctapgratiot.herokuapp.com/');
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
      // console.warn(response);
      await this.props.AddListDeviceRoom(
        JSON.parse(response).data,
        this.roomID,
      );
    });
  };

  render() {
    if (!this.props.ListDeviceRoom) {
      return <Loading />;
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
                  <AddDevice
                    onPress={() =>
                      NavigationService.navigate('AddDeviceScreen', {
                        roomId: this.roomID,
                      })
                    }
                  />
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
