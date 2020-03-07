import React from 'react';
import {
  Text,
  View,
  Button,
  Dimensions,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Switch,
} from 'react-native';
import GoBackButton from '../../Components/GoBackButton';
import ButtonAdd from '../../Components/ButtonAdd';
import NavigationService from '../../Function/NavigationService';
import {connect} from 'react-redux';
import {StyleListSetting} from './StyleSetClock/StyleSetClock';
import {AddListAlarm, DeleteListAlarm} from '../../Redux/Action/ActionListDevice';
const screenWidth = Math.round(Dimensions.get('window').width);

function Item({hour, minute, actionOnOff, nameClock,onPress}) {
  return (
    <TouchableOpacity style={StyleListSetting.touchItem}>
      <View>
        <Text style={StyleListSetting.textHour}>
          {hour}:{minute}
        </Text>

        <View style={{flexDirection: 'row',
          justifyContent: 'space-between',}}>
        <Text style={{fontWeight:'bold'}}>Trạng thái chuyển :</Text>
        {actionOnOff === 0 || actionOnOff === 'default value' ? (<Text> Tắt</Text>) : <Text> Bật</Text>}
        </View>

        <View style={{flexDirection: 'row',
          justifyContent: 'space-between',}}>
          <Text style={{fontWeight:'bold'}}>{nameClock}:</Text>
          <Text>hàng ngày</Text>
        </View>
        <Button title={'xóa'} onPress={onPress}/>
      </View>
      <Switch />
    </TouchableOpacity>
  );
}

class ListSettingClock extends React.Component {
  constructor(props) {
    super(props);
    const {navigation} = this.props;
    this.deviceModel = navigation.getParam('deviceModel', 'default value');
    this.roomId = navigation.getParam('roomId', 'default value');
    this.deviceName = navigation.getParam('deviceName', 'default value');
    this.index = navigation.getParam('index', 'default value');
    this.id = navigation.getParam('id', 'default value');
  }

  static navigationOptions = ({navigation}) => {
    let goback = navigation.getParam('LastRouteName', 'default value');
    let roomId = navigation.getParam('roomId', 'default value');
    let deviceName = navigation.getParam('deviceName', 'default value');
    let index = navigation.getParam('index', 'default value');
    let deviceModel = navigation.getParam('deviceModel', 'default value');
    let id = navigation.getParam('id', 'default value');
    return {
      headerTitle: deviceName,
      headerLeft: () => (
        <GoBackButton onPress={() => NavigationService.navigate(goback)} />
      ),
      headerRight: () => (
        <ButtonAdd
          onPress={() =>
            navigation.navigate('SetClockScreen', {
              roomId: roomId,
              deviceName: deviceName,
              deviceModel: deviceModel,
              index: index,
              id: id,
                LastRouteName: navigation.state.routeName
            })
          }
        />
      ),
      headerTitleContainerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: screenWidth - 120,
      },
    };
  };

  render() {
    // console.warn(this.props.DATA[this.roomId][this.index]);
    let term = this.props.DATA[this.roomId][this.index].ListAlarm;
    return (
      <View>
        <SafeAreaView>
          <FlatList
            data={term}
            renderItem={({item}) => (
              <Item
                hour={item.hour}
                minute={item.minute}
                actionOnOff={item.optionOnOff}
                nameClock={item.nameClock}
                onPress={() => this.props.DeleteListAlarm(this.roomId,this.id,item.id)}
              />
            )}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
        {/*<Button*/}
        {/*  title={'test'}*/}
        {/*  onPress={() => console.warn(this.props.DATA[this.roomId][this.index])}*/}
        {/*/>*/}
      </View>
    );
  }
}
const mapStateToProps = state => ({
  DATA: state.ListDevice.ListDevice1,
});
const mapDispatchToProps = dispatch => ({
  DeleteListAlarm: (roomId,id,idItem) => dispatch(DeleteListAlarm(roomId,id,idItem)),
});
export default connect(
  mapStateToProps,
    mapDispatchToProps,
)(ListSettingClock);
