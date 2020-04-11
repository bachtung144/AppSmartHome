import React from 'react';
import {Text, View, Image, Switch} from 'react-native';
import {styleMenuDetail} from '../StyleMenuDetail/StyleMenuDetail';
import alexa from '../../../../Picture/alexa.jpg';
import gga from '../../../../Picture/gga.png';

export default class Voice extends React.PureComponent {
  render() {
    return (
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
    );
  }
}
