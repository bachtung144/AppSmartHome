import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Loading from './Loading';

export default class ButtonCustom extends React.PureComponent {
  render() {
    let onPress = this.props.onPress;
    let style = this.props.style
    return (
      <TouchableOpacity style={style}
                        onPress={onPress}
                        >
        <Text style={{color: 'white'}}>{this.props.name}</Text>
        {this.props.status ? (<Loading/>) : null}
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
