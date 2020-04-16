import React from 'react';
import {Text, View} from 'react-native';
import {styleInforSetting} from './StyleComponenMenuDetail/StyleInforSetting';

export default class InforSetting extends React.PureComponent {
  render() {
    return (
      <View style={{flex: 2}}>
        <View style={styleInforSetting.containerTTCDK}>
          <Text style={styleInforSetting.textInfor}>
            Thông tin cài đặt khác
          </Text>
        </View>
        <View style={styleInforSetting.containerTB}>
          <Text style={styleInforSetting.textCheckPM}>Thông báo</Text>
        </View>
        <View style={styleInforSetting.containerShare}>
          <Text style={styleInforSetting.textInfor}>Chia sẻ thiết bị</Text>
        </View>
        <View style={styleInforSetting.containerCheckPM}>
          <Text style={styleInforSetting.textCheckPM}>
            Kiểm tra nâng cấp phần mềm
          </Text>
        </View>
        <View style={styleInforSetting.containerShare}>
          <Text style={styleInforSetting.textInfor}>Thông tin khác</Text>
        </View>
      </View>
    );
  }
}
