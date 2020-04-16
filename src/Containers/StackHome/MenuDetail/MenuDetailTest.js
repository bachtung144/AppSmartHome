import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Button,
} from 'react-native';
import React, {Component} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {styleMenuDetail} from './StyleMenuDetail/StyleMenuDetail';
import {
  DeleteDeviceListAll,
  EditNameDevice,
} from '../../../Redux/ListAllDevice/ActionListAllDevice';
import {connect} from 'react-redux';
import ButtonDelete from './ComponentMenuDetail/ButtonDelete';
import Voice from './ComponentMenuDetail/Voice';
import InforSetting from './ComponentMenuDetail/InforSetting';
import NavigationService from '../../../Function/NavigationService';
import {DeleteDeviceListRoom} from '../../../Redux/ListDeviceRoom/ActionListDeviceRoom';
import {emit} from '../../../Socket/_Socket';
import {SetFalseDelete, SetFalseEdit} from '../../../Redux/Status/ActionStatus';

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

  async UNSAFE_componentWillReceiveProps(props) {
    if (props.statusEdit) {
      props.EditNameDevice(this.state.deviceNameUser, this.id);
      props.SetFalseEdit();
    }
    if (props.statusDelete) {
      props.DeleteDeviceListRoom(this.id, this.props.DeviceInfor[0].roomId);
      props.DeleteDeviceListAll(this.id);
      props.SetFalseDelete();
      NavigationService.navigate('Home');
    }
  }

  edit = async () => {
    await emit(
      'editDevice',
      JSON.stringify({
        id: this.id,
        deviceModel: this.props.DeviceInfor[0].deviceModel,
        deviceName: this.state.deviceNameUser,
        roomId: this.props.DeviceInfor[0].roomId,
      }),
    );
  };

  delete = async () => {
    await emit('delDevice', JSON.stringify({id: this.id}));
  };

  render() {
    let nameRoom =
      this.props.DeviceInfor.length !== 0
        ? this.props.ListRoom.filter(
            ele => ele.id === this.props.DeviceInfor[0].roomId,
          )[0]
        : {roomName: 'hello'};
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
                  placeholder={
                    this.props.DeviceInfor.length !== 0
                      ? this.props.DeviceInfor[0].deviceName
                      : null
                  }
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
              <Text style={styleMenuDetail.CXL}>
                {this.props.DeviceInfor.length !== 0 ? nameRoom.roomName : null}
              </Text>
            </View>
          </View>
          <Voice />
          <InforSetting />
          <ButtonDelete onPress={() => this.delete()} />
          {/*<Button title={'test'} onPress={() => console.warn(nameRoom.roomName)} />*/}
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
    ListRoom: state.ListRoom.ListRoom,
    statusEdit: state.Status.statusEdit,
    statusDelete: state.Status.statusDelete,
  };
};

const mapDispatchToProps = dispatch => ({
  EditNameDevice: (newDeviceName, id) =>
    dispatch(EditNameDevice(newDeviceName, id)),
  DeleteDeviceListAll: id => dispatch(DeleteDeviceListAll(id)),
  DeleteDeviceListRoom: (id, roomId) =>
    dispatch(DeleteDeviceListRoom(id, roomId)),
  SetFalseEdit: () => dispatch(SetFalseEdit()),
  SetFalseDelete: () => dispatch(SetFalseDelete()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuDetailTest);
