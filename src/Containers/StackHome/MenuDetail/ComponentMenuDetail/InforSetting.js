import React from 'react';
import {Text, View} from 'react-native';
import {styleMenuDetail} from '../StyleMenuDetail/StyleMenuDetail';

export default class InforSetting extends React.PureComponent {
  render() {
    return (
      <View style={{flex: 2}}>
        <View style={styleMenuDetail.containerTTCDK}>
          <Text style={{marginLeft: 15, fontSize: 20}}>
            Thông tin cài đặt khác
          </Text>
        </View>
        <View style={styleMenuDetail.containerTB}>
          <Text style={{marginLeft: 15, fontSize: 15, color: 'gray'}}>
            Thông báo
          </Text>
        </View>
        <View style={styleMenuDetail.containerShare}>
          <Text style={{marginLeft: 15, fontSize: 20}}>Chia sẻ thiết bị</Text>
        </View>
        <View style={styleMenuDetail.containerCheckPM}>
          <Text style={styleMenuDetail.textCheckPM}>
            Kiểm tra nâng cấp phần mềm
          </Text>
        </View>
        <View style={styleMenuDetail.containerShare}>
          <Text style={{marginLeft: 15, fontSize: 20}}>Thông tin khác</Text>
        </View>
      </View>
    );
  }
}
