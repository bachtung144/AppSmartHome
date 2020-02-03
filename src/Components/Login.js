import React, {Component} from 'react';
import {Button, View, Text,TextInput,TouchableOpacity ,ImageBackground} from 'react-native';
import BackGround from './BackGround';
import CountryPicker, {getAllCountries, getCallingCode,} from 'react-native-country-picker-modal';
import Icon from 'react-native-vector-icons/FontAwesome';
import background_input from '../Picture/backround_input.png'
import ButtonCustom from './Button'
export const CUSTOM_THEME = {
    primaryColor: 'red',
    primaryColorVariant: 'blue',
    backgroundColor: 'pink',
    onBackgroundTextColor: 'orange',
    fontSize: 16,
    fontFamily: Platform.select({
        ios: 'System',
        android: 'Roboto',
        web: 'Arial'
    }),
    filterPlaceholderTextColor: 'purple',
    activeOpacity: 0.7,
}
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state ={
            callingCode : '84',
            password : '',
            secureTextEntry : true,
            nameNation:'Vietnam',
            modal: false
        }
    }
    secureTextEntryFunction(){
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
                    <ImageBackground source={background_input} style={styles.imageBackGround}></ImageBackground>
                    <CountryPicker withEmoji withCallingCode
                                   visible ={this.state.modal}
                                   onSelect={(country) => this.setState({nameNation : country.name
                                           ,callingCode:country.callingCode})
                                   }
                                   onClose ={() => this.setState({modal:false})}
                                   placeholder={''}></CountryPicker>
                    <TouchableOpacity style={styles.nation} onPress={() => this.setState({modal:true})}>
                        <Text style={{flex:1 ,paddingLeft:5}}> Quoc Gia</Text>
                        <Text style={{textAlign:'center',paddingRight:5}}>
                            {this.state.nameNation}
                            (+{this.state.callingCode})
                        </Text>
                        <Icon name="angle-right" color={'black'} size={20} style={{paddingRight:5}}/>
                    </TouchableOpacity>


                    <View style={styles.phonenumber}>
                        <TextInput placeholder={"Số điện thoại"}></TextInput>
                    </View>

                    <View style={styles.blockPass}>
                        {this.state.secureTextEntry ?
                            <TextInput placeholder={"Mật khẩu"}
                                       secureTextEntry={true}
                                       value={this.state.password}
                                       onChangeText={password => this.setState({password})}
                                       style={{flex: 1}}/>
                            :
                            <TextInput placeholder={"Mật khẩu"}
                                       value={this.state.password}
                                       onChangeText={password => this.setState({password})}
                                       style={{flex: 1}}/>
                        }

                        <TouchableOpacity
                            onPress={() => this.secureTextEntryFunction()} style={styles.iconEye} >
                            {this.state.secureTextEntry ?
                                <Icon name="eye-slash" color="black" size={15}/>
                                :
                                <Icon name="eye" color="black" size={15}/>
                            }
                        </TouchableOpacity>
                    </View>
                    <ButtonCustom name={'Dang nhap'}/>

                    <View style={styles.blockLink}>
                        <Text style={styles.customLink} onPress={() => alert('hello')}>Dang ki tai khoan</Text>
                        <Text style={styles.customLink} onPress={() => navigate('ForgetPassScreen')}>Quen mat khau</Text>
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
    imageBackGround: {
        resizeMode:'contain',
        height:500,
        width:500,
        position:"absolute"
    },
    nation : {
        width: "100%" ,
        flexDirection:"row",
        justifyContent: "center" ,
        alignItems: "center" ,
        borderWidth:1,
        borderColor:"gray" ,
        borderTopLeftRadius:10 ,
        borderTopRightRadius :10,
        height:50,
        backgroundColor:'white'
    },
    phonenumber:{
        borderColor:'gray'
        ,borderLeftWidth:1
        ,borderRightWidth:1
        ,width: "100%"
        ,height:50
        ,backgroundColor:'white'
    },
    blockPass:{
        width: "100%"
        ,flexDirection:"row"
        ,justifyContent: "center"
        ,alignItems: "center"
        ,borderWidth:1
        ,borderColor:"gray"
        ,borderBottomLeftRadius:10
        ,borderBottomRightRadius :10
        ,height:50
        ,backgroundColor:'white'
    },
    iconEye:{
        width:40
        ,height:'100%'
        ,justifyContent:'center'
        ,alignItems: 'center'
    },
    blockLink:{
        width:'100%'
        ,flexDirection:'row'
        ,justifyContent:'space-between'
        ,marginTop:5
    },
    customLink: {
        paddingVertical:10
        ,color:'#22a4c5'
        ,fontWeight:'bold'
    }
}
