import React, {Component, useState} from 'react';
import {
    Button,
    FlatList,
    TextInput,
    TouchableOpacity,
    View,
    Text,
    Dimensions,
} from 'react-native';
import {StyleSetClockScreen} from '../StyleStackAlarm/StyleStackAlarm';
import {days} from './ComponentSetClock/ArrayDays';
import DatePicker from 'react-native-date-picker';
import {connect} from 'react-redux';
import RootNavigate from '../ListAction/ComponentAction/RootNavigate';
const screenWidth = Math.round(Dimensions.get('window').width);
import ConvertPower from '../ListAction/ComponentAction/Convert Power';
import HeaderSetClock from './ComponentSetClock/HeaderSetClock';
class Item extends Component {
    render() {
        const {id, name, selected, onSelect} = this.props;
        return (
            <TouchableOpacity
                onPress={() => onSelect(id)}
                style={[
                    StyleSetClockScreen.containerItem,
                    {backgroundColor: selected ? '#1291b6' : 'gray'},
                    {borderColor: selected ? '#1291b6' : 'gray'},
                ]}>
                <Text style={StyleSetClockScreen.textItemDay}>{name}</Text>
            </TouchableOpacity>
        );
    }
}

const SetClock = React.memo(function ActionColor({navigation}) {
    const [date,useDate] = useState(new Date());
    const [mode,useMode] = useState('date');
    const [show,useShow] = useState(false);
    const [optionLoop,useOptionLoop] = useState(1);
    const [nameClock,useNameClock] = useState('');
    const [selected,useSelected] = useState(new Map());
    const [selectedItem,useSelectedItem] = useState([]);
    const [command,useCommand] = useState(null);
    const [value,useValue] = useState(null);
});

export default SetClock;
