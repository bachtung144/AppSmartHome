import React from 'react';
import {Text,View,Button,Dimensions } from 'react-native';
import GoBackButton from '../../Components/GoBackButton';
import ButtonAdd from '../../Components/ButtonAdd';
import NavigationService from '../../Function/NavigationService';
const screenWidth = Math.round(Dimensions.get('window').width);

export default class ListSettingClock extends React.Component{
    static navigationOptions = ({navigation}) => {
        let goback = navigation.getParam('LastRouteName', 'default value');
        return {
            headerTitle: 'Danh sách hẹn giờ',
            headerLeft : () => (<GoBackButton onPress={() => NavigationService.navigate(goback)}/>),
            headerRight: () => (<ButtonAdd onPress={() => navigation.navigate('SetClockScreen')}/>),
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
