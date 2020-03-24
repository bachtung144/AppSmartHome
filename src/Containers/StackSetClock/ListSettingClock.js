import React from 'react';
import {View, Button, Dimensions, SafeAreaView} from 'react-native';
import GoBackButton from '../../Components/GoBackButton';
import ButtonAdd from '../../Components/ButtonAdd';
import NavigationService from '../../Function/NavigationService';
import {connect} from 'react-redux';
import {DeleteListAlarm} from '../../Redux/Action/ActionListDevice';
import {SwipeListView} from 'react-native-swipe-list-view';
import {Item} from './ComponentSetClock/ItemListSetting';
import {RenderHiddenItem} from './ComponentSetClock/HidenItemSetting';

const screenWidth = Math.round(Dimensions.get('window').width);

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
    const {navigate} = this.props.navigation;
    return (
      <View>
        <SafeAreaView>
          <SwipeListView
            data={term}
            renderItem={({item,index}) => (
              <Item
                hour={item.hour}
                minute={item.minute}
                actionOnOff={item.optionOnOff}
                nameClock={item.nameClock}
                onPress={() => navigate('SetClockScreen',
                    {LastRouteName: this.props.navigation.state.routeName,
                      key:this.props.navigation.state.key,index:index,
                      hour:item.hour,minute:item.minute,actionOnOff:item.actionOnOff,
                      nameClock:item.nameClock})}
                DATA={item.listDays}
              />
            )}
            keyExtractor={item => item.id}
            renderHiddenItem={({item}) => (
              <RenderHiddenItem
                onPress={() =>
                  this.props.DeleteListAlarm(this.roomId, this.id, item.id)
                }
              />
            )}
            rightOpenValue={-75}
          />
        </SafeAreaView>
        <Button
          title={'test'}
          onPress={() => console.warn(this.props.ListAction)}
        />
      </View>
    );
  }
}
const mapStateToProps = state => ({
  DATA: state.ListDevice.ListDevice1,
  ListAction : state.ListAction.ListAction
});
const mapDispatchToProps = dispatch => ({
  DeleteListAlarm: (roomId, id, idItem) =>
    dispatch(DeleteListAlarm(roomId, id, idItem)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListSettingClock);
