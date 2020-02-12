import React from 'react';
import {Text, View} from 'react-native';

export default class ButtonTest extends React.PureComponent {
  render() {
    return (
      <View style={styles.buttonLogin}>
        <Text style={{color: 'white'}}>{this.props.name}</Text>
      </View>
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
    backgroundColor: 'gray',
  },
};
