import React from 'react';
import {Text,View,Button,Dimensions } from 'react-native';
import GoBackButton from '../../Components/GoBackButton';
import ButtonAdd from '../../Components/ButtonAdd';
import NavigationService from '../../Function/NavigationService';
const screenWidth = Math.round(Dimensions.get('window').width);

export default class ListSettingClock extends React.Component{
    static navigationOptions = ({navigation}) => {
        let goback = navigation.getParam('LastRouteName', 'default value');
        let roomId = navigation.getParam('roomId', 'default value');
        let deviceName = navigation.getParam('deviceName', 'default value');
        let index = navigation.getParam('index', 'default value');
        let deviceModel = navigation.getParam('deviceModel', 'default value');
        let id = navigation.getParam('id', 'default value');
        return {
            headerTitle:deviceName,
            headerLeft : () => (<GoBackButton onPress={() => NavigationService.navigate(goback)}/>),
            headerRight: () => (<ButtonAdd
                onPress={() => navigation.navigate('SetClockScreen',
                    {roomId:roomId,deviceName:deviceName,
                        deviceModel:deviceModel,
                        index:index,id:id})}/>),
            headerTitleContainerStyle: {
                alignItems: 'center',
                justifyContent: 'center',
                width: screenWidth - 120,
            }
        }
    };

    render(){
        return(
            <View>
                <Text> List setting Clock</Text>
            </View>
        )
    }
}
