import React from 'react'
import DatePicker from 'react-native-date-picker'
import {Button,View} from 'react-native'

export default class ActionOnOff extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date(),
        }
    }

    onChangeDate = (value) => {
        this.setState({
            date:value
        })
    };

    render() {
        return (
            <View>
                <DatePicker
                    date={this.state.date}
                    onDateChange={this.onChangeDate}
                    mode={'time'}
                />
                <Button title={'test'} onPress={() => console.warn(this.state.date)}/>
            </View>
        )
    }

}
