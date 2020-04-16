import React from 'react';
import {Text, View, Image, Switch} from 'react-native';
import alexa from '../../../../Picture/alexa.jpg';
import gga from '../../../../Picture/gga.png';
import {styleVoice} from './StyleComponenMenuDetail/StyleVoice';

export default class Voice extends React.PureComponent {
  render() {
    return (
      <View style={styleVoice.container}>
        <View style={styleVoice.containerVoice}>
          <Text style={styleVoice.textVoice}>
            Hỗ trợ điều khiển qua giọng nói
          </Text>
          <Switch />
        </View>
        <View style={styleVoice.containerImage}>
          <Image source={alexa} style={styleVoice.sizePic} />
          <Image source={gga} style={styleVoice.sizePic} />
        </View>
      </View>
    );
  }
}
