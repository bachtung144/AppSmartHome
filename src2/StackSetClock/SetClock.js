import React, {Component} from 'react';
import {
  View,
  Button,
  Platform,
  TouchableOpacity,
  Text,
  TextInput,
  Dimensions,
  FlatList,
} from 'react-native';
import DatePicker from 'react-native-date-picker';

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
    <TouchableOpacity
      onPress={onSelect}
      style={{
        width: 100,
        height: 30,
        justifyContent: 'center',
        backgroundColor: isSelected ? '#1291b6' : 'gray',
        borderRadius: 20,
        marginLeft: 10,
        marginBottom: 10,
          marginTop:3,
        borderWidth: 1,
        borderColor: isSelected ? '#1291b6' : 'gray',
      }}>
      <Text
        style={{
          padding: 10,
          textAlign: 'center',
          fontSize: 14,
          color: 'white',
        }}>
        {day.name}
      </Text>
    </TouchableOpacity>
  );
}

export default class SetClock extends Component {
  state = {
    date: new Date(),
    mode: 'date',
    show: false,
    option: 1,
  };

  constructor(props) {
    super(props);
    const {navigation} = this.props;
    this.deviceModel = navigation.getParam('deviceModel', 'default value');
    this.listAction = navigation.getParam('listAction', 'default value');
  }

  onChangeDate = value => {
    this.setState({
      date: value,
    });
  };

  checkListAction() {
    if (this.listAction.length === 1) {
      if (this.listAction[0] === 'on-off') {
        return 'ActionOnOffScreen';
      }
      if (this.listAction[0] === 'change-color') {
        return 'ActionChangeColorScreen';
      }
    }
    return 'ListSetActionScreen';
  }

  render() {
    const {navigate} = this.props.navigation;
    const termNavigate = this.checkListAction();
    return (
      <View >
        <View>
          <TextInput
            placeholder={'Nhập tên hẹn giờ'}
            style={{
              padding: 10,
              backgroundColor: 'white',
              height: 50,
              width: '100%',
              borderColor: 'rgba(0,0,0,0.1)',
              borderWidth: 0.2,
              marginTop: 10,
              borderBottomColor: 'rgba(0,0,0,0.5)',
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 5,
            }}>
            <TouchableOpacity
              onPress={() => {
                this.setState({option: 0});
              }}
              style={{
                width: '50%',
                height: 50,
                justifyContent: 'center',
                backgroundColor:
                  this.state.option == 0 ? 'white' : 'rgba(0,0,0,0.4)',
              }}>
              <Text
                style={{
                  padding: 10,
                  textAlign: 'center',
                  fontSize: 14,
                  color: this.state.option == 0 ? 'black' : 'white',
                }}>
                Lặp lại
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState({option: 1});
              }}
              style={{
                width: '50%',
                height: 50,
                justifyContent: 'center',
                backgroundColor:
                  this.state.option == 1 ? 'white' : 'rgba(0,0,0,0.4)',
              }}>
              <Text
                style={{
                  padding: 10,
                  textAlign: 'center',
                  fontSize: 14,
                  color: this.state.option == 1 ? 'black' : 'white',
                }}>
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
            style={{backgroundColor: 'white'}}
          />
          <View style={{width: '100%', alignItems: 'center',backgroundColor:'white'}}>
            <DatePicker
              date={this.state.date}
              onDateChange={this.onChangeDate}
              mode={'time'}
            />
          </View>
        </View>

        {/*khu time*/}

        {/*khu list action*/}
        <View style={{alignItems: 'center', justifyContent: 'center',marginTop:20}}>
          <TouchableOpacity
            onPress={() =>
              navigate(termNavigate, {listAction: this.listAction})
            }
            style={{
              width: '90%',
              backgroundColor: '#1291b6',
              alignItems: 'center',
              height: 50,
              justifyContent: 'center',
              borderRadius: 5,
            }}>
            <Text style={{fontSize: 20, color: 'white'}}>Thêm hành động </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
