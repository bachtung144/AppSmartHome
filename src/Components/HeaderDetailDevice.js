import React, {Component} from 'react';
import {
    Text,
    View,
    SafeAreaView,
    FlatList,
    Image,
    TouchableOpacity,
    Dimensions,
    Button
} from 'react-native';

export default class HeaderDetailDevice extends Component{
    render(){
        const {navigation} = this.props;
        return(
            <View>
                <Text>{this.props.deviceName}</Text>
            </View>
        )
    }
}
