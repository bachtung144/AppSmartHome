import React, {Component} from 'react';
import {
  Button,
  FlatList,
  ScrollView,
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
import CheckActionNameForNavigate from '../ListAction/CheckActionNameForNavigate';
const screenWidth = Math.round(Dimensions.get('window').width);

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

class SetClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      mode: 'date',
      show: false,
      optionLoop: 1,
      nameClock: '',
      selected: new Map(),
      selectedItem: [],
    };
  }
  onSelect(item) {
    let newSelectedItem = this.state.selectedItem;
    if (!this.state.selected.get(item.id)) {
      newSelectedItem.push(item);
    } else {
      newSelectedItem = newSelectedItem.filter(tmpItem => {
        if (tmpItem.id !== item.id) {
          return tmpItem;
        }
      });
    }

    this.setState({selectedItem: newSelectedItem});
    const newSelected = new Map(this.state.selected);
    newSelected.set(item.id, !this.state.selected.get(item.id));
    this.setState({selected: newSelected});
  }

  onChangeDate = value => {
    this.setState({
      date: value,
    });
  };
  checkNavigate(arrAction, command) {
    if (arrAction.length !== 1) {
      return 'ListActionScreen';
    } else {
      return CheckActionNameForNavigate(command);
    }
  }

  render() {
    const {navigation} = this.props;
    const {navigate} = this.props.navigation;
    let id = navigation.getParam('id', 'default value');
    return (
      <ScrollView>
        {/*<View style={StyleSetClockScreen.header}>*/}
        {/*    <GoBackButton*/}
        {/*        onPress={() =>*/}
        {/*            navigate(navigation.getParam('LastRouteName', 'default value'))*/}
        {/*        }*/}
        {/*    />*/}
        {/*    <ButtonSave onPress={this.SaveSetting} />*/}
        {/*</View>*/}
        <View>
          <TextInput
            placeholder={'Nhập tên hẹn giờ'}
            style={StyleSetClockScreen.nameTextInput}
            value={this.state.nameClock}
            onChangeText={nameClock => this.setState({nameClock: nameClock})}
          />
          <View style={StyleSetClockScreen.containerButton}>
            <TouchableOpacity
              onPress={() => {
                this.setState({optionLoop: 0});
              }}
              style={[
                StyleSetClockScreen.touchButtonLoop,
                {
                  backgroundColor:
                    this.state.optionLoop === 0 ? 'white' : '#A9A9A9',
                },
              ]}>
              <Text
                style={[
                  StyleSetClockScreen.textButtonLoop,
                  {color: this.state.optionLoop === 0 ? 'black' : 'white'},
                ]}>
                Lặp lại
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState({optionLoop: 1});
              }}
              style={[
                StyleSetClockScreen.touchButtonLoop,
                {
                  backgroundColor:
                    this.state.optionLoop === 0 ? '#A9A9A9' : 'white',
                },
              ]}>
              <Text
                style={[
                  StyleSetClockScreen.textButtonLoop,
                  {color: this.state.optionLoop === 0 ? 'white' : 'black'},
                ]}>
                Một lần
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/*khu flat list day*/}
        <View>
          <FlatList
            data={days}
            numColumns={Math.floor(screenWidth / 120)}
            renderItem={({item}) => (
              <Item
                id={item.id}
                name={item.name}
                selected={!!this.state.selected.get(item.id)}
                onSelect={() => this.onSelect(item)}
              />
            )}
            style={StyleSetClockScreen.containerFlatList}
          />
          <View style={StyleSetClockScreen.containerDatePicker}>
            <DatePicker
              date={this.state.date}
              onDateChange={this.onChangeDate}
              mode={'time'}
            />
          </View>
        </View>

        {/*khu time*/}

        {/*khu list action*/}
        <View style={StyleSetClockScreen.ContainerButtonAddAction}>
          <TouchableOpacity
            style={StyleSetClockScreen.containerTouch}
            onPress={() =>
              navigate(
                this.checkNavigate(
                  this.props.DeviceInfor[0].actions,
                  this.props.DeviceInfor[0].actions[0].command,
                ),
                {id: id},
              )
            }>
            <Text style={StyleSetClockScreen.textAddAction}>Trạng thái</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state, props) => {
  const {navigation} = props;
  let id = navigation.getParam('id', 'default value');
  return {
    DeviceInfor: state.ListAllDevice.ListAllDevice.filter(ele => ele.id === id),
    ListAction: state.ListAction.ListAction,
  };
};
export default connect(
  mapStateToProps,
  null,
)(SetClock);
