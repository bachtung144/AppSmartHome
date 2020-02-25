import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Switch,
} from 'react-native';
import React, {Component} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {styleMenuDetail} from '../../Components/Styles';
import io from 'socket.io-client';
import {
  DeleteDevice,
  EditNameDevice,
} from '../../Redux/Action/ActionListDevice';
import {connect} from 'react-redux';
import ButtonCustom from '../../Components/Button';
import alexa from '../../Picture/alexa.jpg';
import gga from '../../Picture/gga.png';
import NavigationService from '../../Function/NavigationService';

class MenuDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      deviceNameUser: '',
    };
  }

  edit = async () => {
    this.socket = io('http://192.168.99.199:1123');
    const {navigation} = this.props;
    let id = navigation.getParam('id1', 'default value');
    let deviceModel = navigation.getParam('deviceModel1', 'default value');
    let deviceName = this.state.deviceNameUser;
    let roomId = parseInt(navigation.getParam('roomId1', 'default value'));
    this.props.EditNameDevice(deviceName, id, roomId);
    await this.socket.emit(
      'editDevice',
      JSON.stringify({
        id: id,
        deviceModel: deviceModel,
        deviceName: deviceName,
        roomId: roomId,
      }),
    );
    this.socket.on('editDevice', async response => {
      console.warn(JSON.parse(response));
    });
  };

  delete = async () => {
    const {navigation} = this.props;
    let roomId = parseInt(navigation.getParam('roomId1', 'default value'));
    let id = navigation.getParam('id1', 'default value');
    this.socket = io('http://192.168.99.199:1123');
    await this.socket.emit('delDevice', JSON.stringify({id: id}));
    this.socket.on('delDevice', async response => {
      console.warn(response);
      if(JSON.parse(response).status === 'success'){
        NavigationService.navigate('Home')
        this.props.DeleteDevice(id, roomId);
      }
    });
  };

  render() {
    const {navigation} = this.props;
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
                  placeholder={navigation.getParam(
                    'deviceName1',
                    'default value',
                  )}
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
          <View style={{flex: 2, borderBottomWidth: 0.5}}>
            <View style={styleMenuDetail.containerVoice}>
              <Text style={{marginLeft: 15, width: 200, marginTop: 15}}>
                Hỗ trợ điều khiển qua giọng nói
              </Text>
              <Switch />
            </View>
            <View
              style={{
                flex: (2 / 5) * 4,
                justifyContent: 'center',
                flexDirection: 'row',
                backgroundColor: 'white',
              }}>
              <Image
                source={alexa}
                style={{resizeMode: 'contain', height: 150, width: 150}}
              />
              <Image
                source={gga}
                style={{resizeMode: 'contain', height: 150, width: 150}}
              />
            </View>
          </View>
          <View style={{flex: 2}}>
            <View style={styleMenuDetail.containerTTCDK}>
              <Text style={{marginLeft: 15, fontSize: 20}}>
                Thông tin cài đặt khác
              </Text>
            </View>
            <View style={styleMenuDetail.containerTB}>
              <Text style={{marginLeft: 15, fontSize: 15, color: 'gray'}}>
                Thông báo
              </Text>
            </View>
            <View style={styleMenuDetail.containerShare}>
              <Text style={{marginLeft: 15, fontSize: 20}}>
                Chia sẻ thiết bị
              </Text>
            </View>
            <View style={styleMenuDetail.containerCheckPM}>
              <Text style={styleMenuDetail.textCheckPM}>
                Kiểm tra nâng cấp phần mềm
              </Text>
            </View>
            <View style={styleMenuDetail.containerShare}>
              <Text style={{marginLeft: 15, fontSize: 20}}>Thông tin khác</Text>
            </View>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <ButtonCustom
              name={'Xóa'}
              onPress={() => this.delete()}
              style={styleMenuDetail.buttonDelete}
            />
          </View>
          {/*<Button title={'test'} onPress={() => console.warn(this.props.DATA)} />*/}
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  DATA: state.ListDevice.ListDevice1,
});

const mapDispatchToProps = dispatch => ({
  EditNameDevice: (newDeviceName, id, roomId) =>
    dispatch(EditNameDevice(newDeviceName, id, roomId)),
  DeleteDevice: (id, roomId) => dispatch(DeleteDevice(id, roomId)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuDetail);
