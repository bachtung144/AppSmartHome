import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ButtonCustom from '../../Components/Button';
import {AsyncStorage} from 'react-native';


export default class UserInfor extends React.Component{


    render(){
        return(
            <View style={{flex:1}}>
                <View style={{backgroundColor:'blue',
                               flex:1,flexDirection:'column',alignItems:'center',justifyContent:'flex-end'}}>

                        <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'red'}}>
                        <View style={{   width: 100,
                            height: 100,
                            borderRadius: 100/2
                            ,backgroundColor:'gray'
                            ,justifyContent:'center'
                            ,alignItems:'center'
                            ,
                            }}>
                            <Icon name="user" size={95}></Icon>
                        </View>
                        <Text>Hello</Text>
                        </View>
                </View>

                <View style ={{backgroundColor:'pink', flex:1}}>
                    <TouchableOpacity style={{height:50
                        ,flexDirection:'row'
                        ,justifyContent:'space-between'
                        ,backgroundColor:'white'}}>
                        <Text style={{marginTop:15}}>Thay đổi mật khẩu </Text>
                        <Icon name="angle-right" size={20} style={{
                            width:15,marginTop:15
                        }}/>
                    </TouchableOpacity>
                    <View style={{height:50}}>
                        <TouchableOpacity style={{height:50
                            ,flexDirection:'row'
                            ,justifyContent:'space-between'
                            ,backgroundColor:'gray'}}>
                            <Text style={{marginTop:15}}>Phản hồi </Text>
                            <Icon name="angle-right" size={20} style={{
                                width:15,marginTop:15
                            }}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{height:50}}>
                        <View style={{height:50}}>
                            <View style={{height:50
                                ,flexDirection:'row'
                                ,justifyContent:'space-between'
                                ,backgroundColor:'white'}}>
                                <Text style={{marginTop:15}}>Phiên bản ứng dụng </Text>
                                <Text size={20} style={{width:80,marginTop:15}}>1.0.0(v121)</Text>
                            </View>
                        </View>
                    </View>
                    <ButtonCustom name={'Đăng xuất'}/>
                </View>

            </View>
        )


    }
}
