import React, {Component} from 'react';
import {Button, TextInput, View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import socket from '../../Socket/SocketIo';
import {AddDeviceCustom} from '../../Redux/Action/ActionListDevice';
import NavigationService from '../../Function/NavigationService';
import {styleAddDevice} from '../../Components/Styles'

class AddDevice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deviceModel: '',
      deviceName: '',
    };
  }

  getResponse = async response => {
    const {navigation} = this.props;
    let roomId = parseInt(navigation.getParam('roomId', 'default value'));
    console.warn(JSON.parse(response));
    if (JSON.parse(response).status === 'success') {
      let newDevice = {
        id: JSON.parse(response).data.id,
        deviceModel: this.state.deviceModel,
        deviceName: this.state.deviceName,
        roomId: roomId,
      };
      this.props.AddDeviceCustom(newDevice, roomId);
      NavigationService.navigate('Home');
    }
  };

  add = async () => {
    const {navigation} = this.props;
    await socket.SocketEmit(
        'addDevice',
        JSON.stringify({
          deviceModel: this.state.deviceModel,
          deviceName: this.state.deviceName,
          roomId: parseInt(navigation.getParam('roomId', 'default value')),
        }),
    );
    await socket.SocketOn('addDevice', this.getResponse);
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

const mapDispatchToProps = dispatch => ({
  AddDeviceCustom: (newDevice, roomId) =>
      dispatch(AddDeviceCustom(newDevice, roomId)),
});
export default connect(
    null,
    mapDispatchToProps,
)(AddDevice);
