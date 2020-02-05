import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import background1 from '../Picture/background1.jpg';

export default class BackGround extends React.Component {
  render() {
    return (
      <ImageBackground source={background1} style={styles.ImageSize}>
        <View style={styles.viewStyles}>
          <View style={styles.BlockStyle}>
            <Text style={styles.Logo}>Logo GratIoT</Text>
          </View>
          <View>
            <Text style={styles.textStyles}>Kết nối mọi vật thật dễ dàng</Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = {
  ImageSize: {
    width: '100%',
    opacity: 0.7,
    height: 200,
    resizeMode: 'contain',
  },
  BlockStyle: {
    backgroundColor: '#DCDCDC',
    borderRadius: 2,
    height: 50,
    width: 150,
    alignItems: 'center',
  },
  Logo: {
    textAlign: 'center',
    color: '#1E90FF',
    paddingTop: 15,
  },
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  textStyles: {
    color: 'black',
    fontSize: 10,
    fontWeight: 'bold',
  },
};
