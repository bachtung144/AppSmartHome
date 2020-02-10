import React from 'react';
import {View, Text, Button} from 'react-native';
import {AsyncStorage} from 'react-native';
import {Global} from '../../Function/Global';

export default class Test extends React.Component {
  render() {
    return (
      <Button title={'Submit'} onPress={console.warn(Global.userinfor.phone)} />
    );
  }
}
