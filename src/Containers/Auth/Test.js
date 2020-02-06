import React from 'react';
import {View,Text,Button} from 'react-native'
import {AsyncStorage} from 'react-native';

export default class Test extends React.Component{

    async onPost() {
        var data ={}
        data.token  = await this._retrieveData()


        fetch(`http://192.168.99.116:1123/userinfo?token=${data.token}`
        ,{
            method :'GET',
            })
            .then((response) => response.json())
            .then((responseJson) => {
                console.warn(responseJson.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }
    _retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('Token');
            if (value !== null) {
                return  value;
            }else return  null;
        } catch (error) {
            console.warn('Error')
            return  null;
        }
    };

    render(){
        return(
            <View>
                <Button title={'submit'} onPress={() => this.onPost()}></Button>
            </View>
        )
    }
}
