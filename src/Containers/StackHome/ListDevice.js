import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  Dimensions,
  Button, ScrollView,
} from 'react-native';
import io from 'socket.io-client';
import Item from '../../Function/Item';
import AddDevice from '../../Function/AddDevice';
import NavigationService from '../../Function/NavigationService';
import {AddListDevice} from '../../Redux/Action/ActionListDevice';
import {connect} from 'react-redux';
const screenWidth = Math.round(Dimensions.get('window').width);
import Loading from '../../Components/Loading';

class ListDevice extends Component {
  constructor(props) {
    super(props);
    this.socket = io('http://192.168.99.199:1123');
    this.state = {
    };
    let {navigation} = this.props;
    this.roomID = navigation.state.key;
  }

  componentDidMount = async () => {
    await this.socket.emit('deviceRoom', JSON.stringify({roomId: this.roomID}));
    await this.socket.on('deviceRoom',async  response => {
      var term = JSON.parse(response).data;
      var result = term.map(function(el) {
        var o = Object.assign({}, el);
        o.OptionOnOff = 0;
        return o;
      });
      // console.warn(result);
      this.props.DATA = result;
      await this.props.AddListDevice(result, this.roomID);
    });
  };

  render() {
    if (!this.props.DATA) {
      return (
        <Loading/>
      )
    }

    return (
      <SafeAreaView>
        <ScrollView>
        {this.props.DATA ? (
          <FlatList
            numColumns={Math.floor(screenWidth / 150)}
            data={[...this.props.DATA, 'item']}

            keyExtractor={item => item.id}
            renderItem={({item, index}) =>
              index > this.props.DATA.length - 1 ? (
                <AddDevice onPress={() => NavigationService.navigate('AddDeviceScreen',
                    {roomId: this.roomID})}/>
              ) : (
                <Item
                  title={item.deviceName}
                  onPress={() =>
                    NavigationService.navigate('DetailDeviceScreen', {
                      deviceName: item.deviceName,
                      deviceModel: item.deviceModel,
                      id: item.id,
                      roomId: this.roomID,
                      index:index
                    })
                  }
                />
              )
            }
          />
        ) :
        null}
        <Button title={'test'} onPress={() => console.warn(this.props.DATA)} />
        </ScrollView>
      </SafeAreaView>
    )
  }
}
const mapStateToProps = (state, props) => {
  let {navigation} = props;
  let roomID = navigation.state.key;
  // console.log("this is mapStateToProps device: " , state.ListDevice.ListDevice1[roomID]);
  return {
    DATA: state.ListDevice.ListDevice1 && state.ListDevice.ListDevice1[roomID]
        ? state.ListDevice.ListDevice1[roomID] : false,
  };

};

const mapDispatchToProps = dispatch => ({
  AddListDevice: (ListDevice, roomId) =>
    dispatch(AddListDevice(ListDevice, roomId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListDevice);
