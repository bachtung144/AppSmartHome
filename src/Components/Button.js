import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export default class ButtonCustom extends React.PureComponent {
  render() {
    let onPress = this.props.onPress;
    return (
      <TouchableOpacity style={styles.buttonLogin} onPress={onPress}>
        <Text style={{color: 'white'}}>{this.props.name}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = {
  buttonLogin: {
    width: '100%',
    borderRadius: 70,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: '#1291b6',
  },
};
