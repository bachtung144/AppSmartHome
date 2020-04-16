import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {ColorPicker} from 'react-native-color-picker';
import ButtonSave from '../ComponentSetClock/ButtonSave';

export default class ActionChangeColor extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerRight: () => <ButtonSave />,
      title: 'Đổi màu',
    };
  };
  constructor(props) {
    super(props);
    const {navigation} = this.props;
    this.deviceModel = navigation.getParam('deviceModel', 'default value');
    this.roomId = navigation.getParam('roomId', 'default value');
    this.deviceName = navigation.getParam('deviceName', 'default value');
    this.index = navigation.getParam('index', 'default value');
    this.id = navigation.getParam('id', 'default value');
    this.state = {
      colorPicked: '',
    };
  }
  render() {
    return (
      <View>
        <ColorPicker
          onColorSelected={color => this.setState({colorPicked: color})}
          style={{height: 400}}
        />
        <View style={{marginTop: 20, marginLeft: 20}}>
          <Text style={{fontSize: 15}}>Màu đã chọn</Text>
          <View
            style={{
              backgroundColor: this.state.colorPicked,
              height: 30,
              width: 150,
              borderWidth: 0.5,
              borderColor: 'gray',
            }}
          />
        </View>
      </View>
    );
  }
}
