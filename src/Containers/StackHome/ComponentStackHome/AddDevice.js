import React, {Component} from 'react';
import {Button, TextInput, View} from 'react-native';
import {connect} from 'react-redux';
import NavigationService from '../../../Function/NavigationService';
import {styleAddDevice} from './StyleComponentStackHome/StyleAddDevice';
import {AddDeviceListAll} from '../../../Redux/ListAllDevice/ActionListAllDevice';
import {AddDeviceListRoom} from '../../../Redux/ListDeviceRoom/ActionListDeviceRoom';
import {emit} from '../../../Socket/_Socket';

class AddDevice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deviceModel: '',
      deviceName: '',
    };
  }

  async UNSAFE_componentWillReceiveProps(props) {
    const {navigation} = this.props;
    let roomId = parseInt(navigation.getParam('roomId', 'default value'));
    if (props.statusAdd) {
      let newDevice = {
        id: props.id_dv,
        deviceModel: this.state.deviceModel,
        deviceName: this.state.deviceName,
        roomId: roomId,
        actions: props.actions,
      };
      await this.props.AddDeviceListAll(newDevice);
      await this.props.AddDeviceListRoom(newDevice, roomId);
      NavigationService.navigate('Home');
    }
  }
  add = async () => {
    const {navigation} = this.props;
    emit(
      'addDevice',
      JSON.stringify({
        deviceModel: this.state.deviceModel,
        deviceName: this.state.deviceName,
        roomId: parseInt(navigation.getParam('roomId', 'default value')),
      }),
    );
  };

  render() {
    return (
      <View style={styleAddDevice.container}>
        <TextInput
          value={this.state.deviceModel}
          onChangeText={deviceModel => this.setState({deviceModel})}
          placeholder={'deviceModel'}
          style={styleAddDevice.input}
        />
        <TextInput
          value={this.state.deviceName}
          onChangeText={deviceName => this.setState({deviceName})}
          placeholder={'deviceName'}
          style={styleAddDevice.input}
        />
        <Button title={'Add'} onPress={() => this.add()} />
      </View>
    );
  }
}
const mapStateToProps = state => ({
  statusAdd: state.Status.statusAdd,
  id_dv: state.NewDevice.id_dv,
  actions: state.NewDevice.actions,
});
const mapDispatchToProps = dispatch => ({
  AddDeviceListAll: (newDevice: {}) => dispatch(AddDeviceListAll(newDevice)),
  AddDeviceListRoom: (newDevice: {}, roomId) =>
    dispatch(AddDeviceListRoom(newDevice, roomId)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddDevice);
