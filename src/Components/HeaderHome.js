import React, {Component} from 'react';
import {Text, View, Button, TextInput, TouchableOpacity} from 'react-native';
import io from 'socket.io-client';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

export default class HeaderHome extends Component{
    render(){
        return(
            <View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        // height: '40%',
                    }}>
                    <View
                        style={{
                            alignItems: 'center',
                            flexDirection: 'row',
                            justifyContent: 'space-between',

                        }}>
                        <Text style={{fontSize: 10}}>Nhà riêng</Text>
                        <Icon name={'angle-down'} size={11} style={{marginLeft: 10}} />
                    </View>
                    <TouchableOpacity
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 60,
                            borderRadius: 15,
                            // height: 30,
                            marginTop: 3,
                            marginRight: 3,
                            backgroundColor: '#1291b6',
                        }}>
                        <Icon name={'plus'} color={'white'} size={15} />
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        // height: '60%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                    <Icon name={'cloud'} size={20} style={{marginLeft: 20}} />
                    <View>
                        <Text style={{fontSize:10}}>Thời tiết tại Dương Nội</Text>
                        <Text style={{fontWeight: 'bold',fontSize:10}}>
                            Sương mù 19C 93%
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                        <View style={{borderRadius: 5, backgroundColor: '#ea5b5e'}}>
                            <Icon name={'user-o'} size={35} color={'white'} />
                        </View>
                        <View>
                            <Text style={{fontSize:10}}>Không khí</Text>
                            <Text style={{fontWeight: 'bold',fontSize:15}}>172 - Kém</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

}
