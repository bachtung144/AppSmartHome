import React from 'react';
import 'react-native-gesture-handler';
import {View,Text,Button} from 'react-native';

export default class DetailDevice extends React.Component{
    render(){
        const {navigate} = this.props.navigation;
        return(
            <View>
                <Button title={'go to menu detail'} onPress={() => navigate('MenuDetailScreen')}/>
            </View>
        )
    }
}
