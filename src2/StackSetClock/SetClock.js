import React, {Component} from 'react';
import {View, Button, Platform, TouchableOpacity, Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default class SetClock extends Component {
  state = {
    date: new Date('2020-06-12T14:42:42'),
    mode: 'date',
    show: false,
  };

  constructor(props) {
    super(props);
    const {navigation} = this.props;
    this.deviceModel = navigation.getParam('deviceModel', 'default value');
    this.listAction = navigation.getParam('listAction', 'default value');
  }

  setDate = (event, date) => {
    date = date || this.state.date;

    this.setState({
      show: Platform.OS === 'ios' ? true : false,
      date,
    });
  };

  show = mode => {
    this.setState({
      show: true,
      mode,
    });
  };

  datepicker = () => {
    this.show('date');
  };

  timepicker = () => {
    this.show('time');
  };

  checkListAction (){
    if(this.listAction.length === 1 ) {
      if(this.listAction[0] === 'on-off') return 'ActionOnOffScreen';
      if(this.listAction[0] === 'change-color') return 'ActionChangeColorScreen';
    }
    return 'ListSetActionScreen'
  };
  render() {
    const {navigate} = this.props.navigation;
    const {show, date, mode} = this.state;
    const termNavigate = this.checkListAction();
    return (
      <View>
        <View>
          <View>
            <Button onPress={this.datepicker} title="Show date picker!" />
          </View>
          <View>
            <Button onPress={this.timepicker} title="Show time picker!" />
          </View>
          {show && (
            <DateTimePicker
              value={date}
              mode={mode}
              is24Hour={true}
              display="spinner"
              onChange={this.setDate}
            />
          )}
        </View>
        <View>
          <TouchableOpacity onPress={() =>
              navigate(termNavigate,{listAction:this.listAction})}>
            <Text>Thêm hành động </Text>
          </TouchableOpacity>
        </View>
        <Text>{this.deviceModel}</Text>
      </View>
    );
  }
}
