import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Dimensions,
  FlatList,
  ScrollView,
    Button
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import ButtonSave from './ComponentSetClock/ButtonSave';
import CheckModel from './FunctionSetClock/CheckModelForNavigate';
import {StyleSetClockScreen} from './StyleSetClock/StyleSetClock';
import {AddListAlarm} from '../../Redux/ListDeviceOld/ActionListDevice';
import {connect} from 'react-redux';
import GoBackButton from '../../Components/GoBackButton';
import {days} from './FunctionSetClock/ArrayDays'


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

class SetClock extends Component {
  constructor(props) {
    super(props);
    const {navigation} = this.props;
    const d = new Date();

    this.state = {
      date:
        navigation.getParam('key', 'default value') === 'default value'
          ? new Date()
          : new Date(
              d.getFullYear(),
              d.getMonth(),
              d.getDate(),
              navigation.getParam('hour', 'default value'),
              navigation.getParam('minute', 'default value'),
            ),
      mode: 'date',
      show: false,
      optionLoop: 1,
      nameClock: '',
      selected: new Map(),
      selectedItem: [],
    };
    this.deviceModel = navigation.getParam('deviceModel', 'default value');
    this.roomId = navigation.getParam('roomId', 'default value');
    this.deviceName = navigation.getParam('deviceName', 'default value');
    this.index = navigation.getParam('index', 'default value');
    this.id = navigation.getParam('id', 'default value');
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
  SaveSetting = async () => {
    const {navigation} = this.props;
    const {navigate} = this.props.navigation;
    let obj = {
      id: Math.floor(Math.random() * 100),
      hour: this.state.date.getHours(),
      minute: this.state.date.getMinutes(),
      nameClock: this.state.nameClock,
      optionOnOff: navigation.getParam('option', 'default value'),
      listDays : this.state.selectedItem
    };
    await this.props.AddListAlarm(this.roomId, this.id, obj);
    await navigate('ListSettingClockScreen');
  };
  onChangeDate = value => {
    this.setState({
      date: value,
    });
  };

  render() {
    console.log(this.state.selectedItem);
    const {navigation} = this.props;
    const {navigate} = this.props.navigation;
    const termNavigate = CheckModel(this.props.DATA[this.roomId][this.index].actions);

    let checkKey = navigation.getParam('key', 'default value');
    let checkName = navigation.getParam('nameClock', 'default value');
    return (

      <ScrollView>
        <View style={StyleSetClockScreen.header}>
          <GoBackButton
            onPress={() =>
              navigate(navigation.getParam('LastRouteName', 'default value'))
            }
          />
          <ButtonSave onPress={this.SaveSetting} />
        </View>
        <View>
          <TextInput
            placeholder={
              checkKey === 'default value' ? 'Nhập tên hẹn giờ' : checkName
            }
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
            onPress={() =>
              navigate(termNavigate, {
                deviceModel: this.deviceModel,
                roomId: this.roomId,
                deviceName: this.deviceName,
                index: this.index,
                id: this.id,
                arrayAction :this.props.DATA[this.roomId][this.index].actions
              })
            }
            style={StyleSetClockScreen.containerTouch}>
            <Text style={StyleSetClockScreen.textAddAction}>Trạng Thái</Text>
            {navigation.getParam('option', 'default value') === 1 ? (
              <Text>Bật</Text>
            ) : (
              <Text>Tắt</Text>
            )}
          </TouchableOpacity>
        </View>
        <Button
            title={'test'}
            onPress={() => console.warn(this.props.DATA)}
        />
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  DATA: state.ListDevice.ListDevice1,
});
const mapDispatchToProps = dispatch => ({
  AddListAlarm: (roomId, id, newSetClock: {}) =>
    dispatch(AddListAlarm(roomId, id, newSetClock)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SetClock);
