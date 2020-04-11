import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {Component} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {styleMenuDetail} from './StyleMenuDetail/StyleMenuDetail';
import {
   DeleteDeviceListAll,
  EditNameDevice,
} from '../../../Redux/ListAllDevice/ActionListAllDevice';
import {connect} from 'react-redux';
import socket from '../../../Socket/SocketIo';
import ButtonDelete from './ComponentMenuDetail/ButtonDelete';
import Voice from './ComponentMenuDetail/Voice';
import InforSetting from './ComponentMenuDetail/InforSetting';
import NavigationService from '../../../Function/NavigationService';
import {DeleteDeviceListRoom} from '../../../Redux/ListDeviceRoom/ActionListDeviceRoom';

class MenuDetailTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      deviceNameUser: '',
    };
    let {navigation} = this.props;
    this.id = navigation.getParam('id', 'default value');
  }
  getResponseEdit = async response => {
    console.warn(JSON.parse(response));
    if (JSON.parse(response).status === 'success') {
      this.props.EditNameDevice(this.state.deviceNameUser, this.id);
    }
  };

  edit = async () => {
    await socket.SocketEmit(
      'editDevice',
      JSON.stringify({
        id: this.id,
        deviceModel: this.props.DeviceInfor[0].deviceModel,
        deviceName: this.state.deviceNameUser,
        roomId: this.props.DeviceInfor[0].roomId,
      }),
    );
    await socket.SocketOn('editDevice', this.getResponseEdit);
  };

  getResponseDelete = async response => {
    console.warn(response);
    if (JSON.parse(response).status === 'success') {
      await this.props.DeleteDeviceListRoom(this.id,this.props.DeviceInfor[0].roomId);
      await this.props.DeleteDeviceListAll(this.id);
      await NavigationService.navigate('Home');
    }
  };

  delete = async () => {
    await socket.SocketEmit('delDevice', JSON.stringify({id: this.id}));
    await socket.SocketOn('delDevice', this.getResponseDelete);
  };

  render() {
    return (
      <ScrollView>
        <View style={{flex: 1}}>
          <View style={{height: 200}}>
            <View style={styleMenuDetail.ContainerTTCB}>
              <Text style={styleMenuDetail.textTTCB}>Thông tin cơ bản</Text>
            </View>
            <View style={styleMenuDetail.containerTTB}>
              <View style={styleMenuDetail.containerSubTTB}>
                <Text style={styleMenuDetail.TTB}>Tên thiết bị</Text>
                <TextInput
                  // placeholder={this.props.DeviceInfor[0].deviceName}
                  editable={this.state.modal}
                  value={this.state.deviceNameUser}
                  onChangeText={async deviceNameUser =>
                    await this.setState({deviceNameUser})
                  }
                  style={{marginLeft: 10, width: 180}}
                  onEndEditing={() => this.edit()}
                />
              </View>
              <TouchableOpacity onPress={() => this.setState({modal: true})}>
                <Feather name={'edit'} style={styleMenuDetail.iconEdit} />
              </TouchableOpacity>
            </View>
            <View style={styleMenuDetail.containerTTA}>
              <Text style={styleMenuDetail.TTA}> Tên tiếng anh</Text>
            </View>
            <View style={styleMenuDetail.containerTTB}>
              <Text style={styleMenuDetail.VTTB}>Vị trí thiết bị</Text>
              <Text style={styleMenuDetail.CXL}>Cần xử lý</Text>
            </View>
          </View>
          <Voice />
          <InforSetting />
          <ButtonDelete onPress={() => this.delete()} />
          {/*<Button title={'test'} onPress={() => console.warn(this.props.DATA)} />*/}
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state, props) => {
  let {navigation} = props;
  let id = navigation.getParam('id', 'default value');
  return {
    ListAllDevice: state.ListAllDevice.ListAllDevice,
    DeviceInfor: state.ListAllDevice.ListAllDevice.filter(ele => ele.id === id),
  };
};
const mapDispatchToProps = dispatch => ({
  EditNameDevice: (newDeviceName, id) => dispatch(EditNameDevice(newDeviceName,id)),
  DeleteDeviceListAll: id => dispatch(DeleteDeviceListAll(id)),
  DeleteDeviceListRoom : (id, roomId) => dispatch(DeleteDeviceListRoom(id,roomId)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuDetailTest);
