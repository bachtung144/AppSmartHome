import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';
import BackGround from '../../Components/BackGround';
import CountryPicker from 'react-native-country-picker-modal';
import Icon from 'react-native-vector-icons/FontAwesome';
import background_input from '../../Picture/backround_input.png'
import ButtonCustom from '../../Components/Button'
import { Formik } from 'formik';
import * as Yup from 'yup';

const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state ={
            callingCode : '84',
            nameNation:'Vietnam',
            modal: false,
            phoneNumberCode:'',
            checkBox : false
        }
    }
    noti() {
        this.setState({checkBox: !this.state.checkBox});
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{flex: 1}}>
                <BackGround/>

                <View style={styles.container}>
                    <ImageBackground source={background_input} style={styles.imageBackGround}/>
                    <CountryPicker withEmoji
                                   withCallingCode
                                   visible ={this.state.modal}
                                   onSelect={(country) => this.setState({nameNation : country.name
                                       ,callingCode:country.callingCode})}
                                   onClose ={() => this.setState({modal:false})}
                                   placeholder={''}/>

                    <TouchableOpacity style={styles.nation} onPress={() => this.setState({modal:true})}>
                        <Text style={styles.smallNation}>Quốc gia</Text>
                        <Text style={styles.callCode}>
                            {this.state.nameNation}
                            (+{this.state.callingCode})
                        </Text>
                        <Icon name="angle-right" size={20} style={styles.styleIcon}/>
                    </TouchableOpacity>

                    <Formik
                        initialValues={{phoneNumber: ''}}
                        validationSchema={Yup.object({
                            phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid')
                                .required('Required')
                        })}
                        onSubmit={(values) => navigate('InputMXNScreen',
                            {phone:values.phoneNumber,code_clicked : this.state.callingCode})}>
                        {props => (
                            <View style={{width: '100%'}}>
                                <TextInput
                                    onChangeText={props.handleChange('phoneNumber')}
                                    onBlur={props.handleBlur('phoneNumber')}
                                    value={props.values.phoneNumber}
                                    placeholder="phoneNumber"
                                    style={styles.phonenumber}
                                />
                                {props.touched.phoneNumber && props.errors.phoneNumber ? (
                                    <Text style={styles.error}>{props.errors.phoneNumber}</Text>
                                ) : null}

                                {
                                    this.state.checkBox ?
                                        (<ButtonCustom onPress={props.handleSubmit} name={'Tiếp tục'}>
                                        </ButtonCustom>)
                                        :(<ButtonCustom name={'Tiếp tục'}>
                                        </ButtonCustom>)
                                }
                            </View>
                        )}
                    </Formik>
                    <View style={{flexDirection:'row',justifyContent:'center',width:'100%',marginTop:15}}>

                        <TouchableOpacity onPress={() => this.noti()} style={{marginRight:10,marginTop:2.5}}>
                            {
                                this.state.checkBox ? (<Icon name={'check-square'} color={'#1490b5'} size={15}></Icon>)
                                    : (<Icon name={'check-square'} color={'black'} size={15}></Icon>)
                            }
                        </TouchableOpacity>
                        <Text>
                            Tôi đồng ý điều khoản và chính sách
                        </Text>
                    </View>
                    <View style={styles.blockLink}>
                        <Text style={styles.customLink} onPress={() => navigate('LoginScreen')} >Đăng nhập</Text>
                        <Text style={styles.customLink} onPress={() => navigate('ForgetPassScreen')}>Quên mật khẩu</Text>
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
        backgroundColor:'white'
        ,borderLeftWidth: 1
        ,borderRightWidth: 1
        ,borderBottomWidth: 1
        ,borderColor:'gray'
        ,borderBottomLeftRadius:10
        ,borderBottomRightRadius:10
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
    },
    styleIcon: {
        paddingRight: 5,
        color: 'black'
    },
    buttonLogin:{
        width:'100%'
        ,borderRadius: 70
        ,height:35
        ,alignItems: 'center'
        ,justifyContent:'center'
        ,marginTop:10
        ,backgroundColor:'#1291b6'
    },
    smallNation:{
        flex:1 ,
        paddingLeft:5
    },
    callCode:{
        textAlign:'center',
        paddingRight:5
    }
}
