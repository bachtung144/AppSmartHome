import {View, Text, Image, TouchableOpacity,Button} from 'react-native';
import React from 'react';
import hp_wall from '../../../Picture/hp_wall.png';
import Icon from 'react-native-vector-icons/AntDesign';
import {styleFlatList} from '../../../Components/Styles';
import NavigationService from '../../../Function/NavigationService';

export default class ItemAllDevice extends React.Component {
    render() {
        return (
            <TouchableOpacity style={styleFlatList.container}
                              onPress={() => {NavigationService.navigate
                              ('DetailDeviceScreen',
                                  {id:this.props.id});
                              }}
            >
                <Text style={styleFlatList.title}>
                    {this.props.deviceName}
                </Text>

                <View style={styleFlatList.body}>
                    <Image source={hp_wall} style={styleFlatList.Image} />
                    <TouchableOpacity style={styleFlatList.Icon}>
                        <Icon name={'poweroff'} size={30} />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        );
    }
}


