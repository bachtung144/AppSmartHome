import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import {StyleSetClockScreen} from '../../StyleStackAlarm/StyleStackAlarm';
import Feather from 'react-native-vector-icons/Feather';

const HeaderSetClock = React.memo(function HeaderSetClock({onPressBack,onPressSave}) {
    return(
        <View style={StyleSetClockScreen.header}>
            <View>
                <TouchableOpacity onPress={onPressBack} style={{width: 50}}>
                    <Feather name={'arrow-left'} size={30} />
                </TouchableOpacity>
            </View>
            <Text style={StyleSetClockScreen.textHeader}>Báo thức</Text>
            <TouchableOpacity onPress={onPressSave}>
                <Text style={StyleSetClockScreen.textSave}>Lưu</Text>
            </TouchableOpacity>
        </View>
    )
});

export default HeaderSetClock
