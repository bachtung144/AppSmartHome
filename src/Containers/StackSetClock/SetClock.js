import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Dimensions,
  FlatList,
  Button,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import ButtonSave from './ComponentSetClock/ButtonSave';
import CheckModel from './FunctionSetClock/CheckModelForNavigate';
import {StyleSetClockScreen} from './StyleSetClock/StyleSetClock';
import {SaveOnOff} from '../../Redux/Action/ActionListDevice';
import {connect} from 'react-redux';
const days = [
  {id: 1, name: 'Thứ hai', value: 2},
  {id: 2, name: 'Thứ ba', value: 3},
  {id: 3, name: 'Thứ tư', value: 4},
  {id: 4, name: 'Thứ năm', value: 5},
  {id: 5, name: 'Thứ sáu', value: 6},
  {id: 6, name: 'Thứ bảy', value: 7},
  {id: 7, name: 'Chủ Nhật', value: 8},
  {id: 8, name: 'Hàng ngày', value: 9},
];
const screenWidth = Math.round(Dimensions.get('window').width);

function ItemDay({day, onPress}) {
  const [isSelected, setSelection] = React.useState(false);
  const onSelect = () => {
    setSelection(!isSelected);
    if (onPress) {
      !isSelected
        ? onPress({...day, status: 'success'})
        : onPress({...day, status: 'fail'});
    }
  };

  return (
    <TouchableOpacity onPress={onSelect} style={[StyleSetClockScreen.containerItem,
        {backgroundColor: isSelected ? '#1291b6' : 'gray'},{borderColor: isSelected ? '#1291b6' : 'gray'}]}>
      <Text style={StyleSetClockScreen.textItemDay}>{day.name}</Text>
    </TouchableOpacity>
  );
}

class SetClock extends Component {
  static navigationOptions = {
    headerRight: () => <ButtonSave />,
  };

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      mode: 'date',
      show: false,
      optionLoop: 1,
      nameClock: '',
      listPickedDay:[]
    };
    const {navigation} = this.props;
    this.deviceModel = navigation.getParam('deviceModel', 'default value');
    this.roomId = navigation.getParam('roomId', 'default value');
    this.deviceName = navigation.getParam('deviceName', 'default value');
    this.index = navigation.getParam('index', 'default value');
    this.id = navigation.getParam('id', 'default value');
  }

  onChangeDate = value => {
    this.setState({
      date: value,
    });
  };

  render() {
    // console.warn(this.props.DATA[this.roomId][this.index].OptionOnOff);
    const {navigate} = this.props.navigation;
    const termNavigate = CheckModel(this.deviceModel);
    return (
      <View>
        <View>
          <TextInput
            placeholder={'Nhập tên hẹn giờ'}
            style={StyleSetClockScreen.nameTextInput}
            value={this.state.nameClock}
            onChangeText={nameClock => this.setState({nameClock: nameClock})}
            onEndEditing={() => console.warn(this.state.nameClock)}
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
              <ItemDay key={item.id} onPress={this.onSelect} day={item} />
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
              })
            }
            style={StyleSetClockScreen.containerTouch}>
            <Text style={StyleSetClockScreen.textAddAction}>Trạng Thái</Text>
            {this.props.DATA[this.roomId][this.index].OptionOnOff === 1 ? (
              <Text>Bật</Text>
            ) : (
              <Text>Tắt</Text>
            )}
          </TouchableOpacity>
        </View>
        {/*<Button title={'test'} onPress={() => console.warn(this.state.date.getHours(),this.state.date.getMinutes())}/>*/}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  DATA: state.ListDevice.ListDevice1,
});

export default connect(
  mapStateToProps,
  null,
)(SetClock);
