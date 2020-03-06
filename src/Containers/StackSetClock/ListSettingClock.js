import React from 'react';
import {
  Text,
  View,
  Button,
  Dimensions,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import GoBackButton from '../../Components/GoBackButton';
import ButtonAdd from '../../Components/ButtonAdd';
import NavigationService from '../../Function/NavigationService';
import {connect} from 'react-redux';
const screenWidth = Math.round(Dimensions.get('window').width);

function Item({hour, minute}) {
  return (
    <TouchableOpacity
      style={{
        borderBottomColor: 'rbga(0,0,0,0.5)',
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 90,
        alignItems: 'center',
        borderBottomWidth:0.5
      }}>
      <View>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>
          {hour}:{minute}
        </Text>
        <Text>Trang thai chuyen: tat</Text>
        <Text>Di ngu: hang ngay</Text>
      </View>
      <TouchableOpacity
        style={{
          borderColor: 'black',
          borderWidth: 1,
          overflow: 'hidden',
          width: 80,
          height: 40,
          borderRadius: 20,
        }}>
        <View
          style={{
            borderColor: 'black',
            borderWidth: 1,
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: 'white',
            position: 'absolute',
          }}
        />
      </TouchableOpacity>
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
              <Item hour={item.hour} minute={item.minute} />
            )}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
        <Button
          title={'test'}
          onPress={() => console.warn(this.props.DATA[this.roomId][this.index])}
        />
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
)(ListSettingClock);
