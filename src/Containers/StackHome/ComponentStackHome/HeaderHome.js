import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {styleHeaderHome} from './StyleComponentStackHome/StyleHeaderHome'
export default class HeaderHome extends Component {
  render() {
    return (
      <View style={styleHeaderHome.contaner}>
        <View style={styleHeaderHome.containerSub1}>
          <TouchableOpacity style={styleHeaderHome.containerHouse}>
            <Text style={styleHeaderHome.textHouse}>Nhà riêng</Text>
            <Icon name={'chevron-down'} style={styleHeaderHome.iconHouse} />
          </TouchableOpacity>
          <TouchableOpacity style={styleHeaderHome.containerButton}>
            <Feather name={'plus'} style={styleHeaderHome.iconButton} />
          </TouchableOpacity>
        </View>
        <View style={styleHeaderHome.containerSub2}>
          <Feather name={'cloud-drizzle'} style={styleHeaderHome.iconWeather} />
          <View>
            <Text>Thời tiết tại Dương Nội</Text>
            <Text style={styleHeaderHome.textWeather}>Sương mù 19C 93%</Text>
          </View>
          <View style={styleHeaderHome.containerPeople}>
            <Icon name={'user-o'} size={35} />
          </View>
          <View style={styleHeaderHome.containerAir}>
            <Text>Không khí</Text>
            <Text style={styleHeaderHome.textAir}>172 - Kém</Text>
          </View>
        </View>
      </View>
    );
  }
}
