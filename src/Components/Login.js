import React, {Component} from 'react';
import {Button, View, Text,TextInput,TouchableOpacity ,ImageBackground} from 'react-native';
import BackGround from './BackGround';
import CountryPicker, { getAllCountries, getCallingCode } from 'react-native-country-picker-modal';
import Icon from 'react-native-vector-icons/FontAwesome';
import background_input from '../Picture/backround_input.png'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state ={
            callingCode : '',
            password : '',
            secureTextEntry : true,
        }
    }
    secureTextEntry(){
        this.setState({
            secureTextEntry : !this.state.secureTextEntry
        })
    }
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View
            style={{
                flex: 1
            }}
            >
                    <BackGround/>

                <View style={styles.container}>
                    <ImageBackground source={background_input} style={{resizeMode:'contain',
                    height:500,width:500,position:"absolute"}}></ImageBackground>
                    <View style={{  width: "100%" ,flexDirection:"row",
                        justifyContent: "center" , alignItems: "center" ,borderWidth:1,borderColor:"gray" ,
                        borderTopLeftRadius:10 ,borderTopRightRadius :10,height:50,backgroundColor:'white'
                    }}>
                        <Text style={{flex:1 , }}> Quoc Gia</Text>
                        <Text style={{flex:2 , }}> Viet Nam</Text>
                    </View>

                    <View style={{borderColor:'gray',borderLeftWidth:1
                        ,borderRightWidth:1 ,width: "100%",height:50,backgroundColor:'white' }}>
                        <TextInput placeholder={"Số điện thoại"}
                        ></TextInput>
                    </View>

                    <View style={{width: "100%" ,flexDirection:"row",
                    justifyContent: "center" , alignItems: "center" ,borderWidth:1,borderColor:"gray" ,
                        borderBottomLeftRadius:10 ,borderBottomRightRadius :10,height:50,backgroundColor:'white'


                    }}>

                        <TextInput placeholder={"Mật khẩu"} secureTextEntry={true}
                                   value={this.state.password}
                                   onChangeText = {password => this.setState({password})}
                                    style={{flex:1}}>
                        </TextInput>

                        <TouchableOpacity onPress={() => this.secureTextEntry} style={{width:40
                             , height:'100%' , justifyContent:'center' , alignItems: 'center'}} >
                            {this.state.secureTextEntry ?
                                <Icon name="eye-slash" color="black" size={15}/>
                                :
                                <Icon name="eye" color="black" size={15}/>
                            }
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{ width:'100%' ,borderRadius: 70,
                        height:35,alignItems: 'center',justifyContent:'center',marginTop:10,backgroundColor:'#1291b6'}}>
                        <Text style={{color:'white'}}>Dang Nhap</Text>
                    </TouchableOpacity>

                    <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between',
                    marginTop:5}}>
                        <Text style={{paddingVertical:10 , color:'#22a4c5',fontWeight:'bold'}} onPress={() => alert('hello')}>Dang ki tai khoan</Text>
                        <Text style={{paddingVertical:10 ,color:'#22a4c5',fontWeight:'bold'}} onPress={() => alert('hello')}>Quen Mk</Text>
                    </View>

                </View>

            </View>
        );
    }
}

const styles ={
    container: {
        marginHorizontal:30,
        flex:1,
        alignItems: 'center',
        borderRadius:5,
        marginTop:10,
    },
}
