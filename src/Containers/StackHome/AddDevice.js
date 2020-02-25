import React, {Component} from 'react';
import {Button, TextInput, View, StyleSheet} from 'react-native';
import io from 'socket.io-client';
import {connect} from 'react-redux';
import {
  AddDeviceCustom
} from '../../Redux/Action/ActionListDevice';
import NavigationService from '../../Function/NavigationService';

class AddDevice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deviceModel: '',
      deviceName: '',
    };
  }
  add = async () => {
    const {navigation} = this.props;
    let roomId = parseInt(navigation.getParam('roomId', 'default value'))

    this.socket = io('http://192.168.99.199:1123');
    this.socket.emit(
      'addDevice',
      JSON.stringify({
        deviceModel: this.state.deviceModel,
        deviceName: this.state.deviceName,
        roomId: parseInt(navigation.getParam('roomId', 'default value')),
      }),
    );
    this.socket.on('addDevice', response => {
      console.warn(JSON.parse(response));
      if(JSON.parse(response).status === 'success'){
        let newDevice = {
          id:JSON.parse(response).data.id,
          deviceModel: this.state.deviceModel
          ,deviceName: this.state.deviceName,
          roomId: roomId };
          this.props.AddDeviceCustom(newDevice,roomId);
        NavigationService.navigate('Home')
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.deviceModel}
          onChangeText={deviceModel => this.setState({deviceModel})}
          placeholder={'deviceModel'}
          style={styles.input}
        />
        <TextInput
          value={this.state.deviceName}
          onChangeText={deviceName => this.setState({deviceName})}
          placeholder={'deviceName'}
          style={styles.input}
        />
        <Button title={'Add'} onPress={() => this.add()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 300,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});

const mapDispatchToProps = dispatch => ({
  AddDeviceCustom: (newDevice ,roomId) =>
    dispatch(AddDeviceCustom(newDevice, roomId)),
});
export default connect(
  null,
  mapDispatchToProps,
)(AddDevice);
