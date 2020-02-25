import {View, Text, Button, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import NavigationService from '../../Function/NavigationService';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Alarm from './Alarm';
import AddAlarm from './AddAlarm';
import {createAppContainer} from 'react-navigation';
import {styleDetailDevice} from '../../Components/Styles'
import {EditNameDevice} from '../../Redux/Action/ActionListDevice';
import {connect} from 'react-redux';
import Title from '../../Components/Title'

 export default class DetailDevice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appTest: null,
    };
  }
  static navigationOptions = ({navigation}) => {
      // console.log(this.props.DATA)
    return {
      title: <Title roomId={navigation.getParam('roomId','default value')}
                    deviceName = {navigation.getParam('deviceName', 'default value')}
                        index = {navigation.getParam('index','default value')}/>,
      headerRight: () => (
        <View style={{ flexDirection: 'row'}}>
          <TouchableOpacity>
            <Feather name={'phone-call'} size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('MenuDetailScreen',
                {deviceName1:navigation.getParam('deviceName', 'default value'),
                  deviceModel1:navigation.getParam('deviceModel','default value'),
                  id1:navigation.getParam('id','default value'),
                  roomId1:navigation.getParam('roomId','default value'),
                })}>
            <Feather name={'menu'} size={30} />
          </TouchableOpacity>
        </View>
      ),
    };
  };

  render() {
      console.warn(this.props.DATA)
    const {navigation} = this.props;
    const {navigate} = this.props.navigation;
    return (
      <View style={styleDetailDevice.container}>

        <View
          style={styleDetailDevice.subContainer1}>
          <TouchableOpacity
            style={styleDetailDevice.buttonOff}>
            <Icon name={'power-off'} size={60} />
          </TouchableOpacity>
        </View>

        <View
          style={styleDetailDevice.subContainer2}>
          <TouchableOpacity
            style={styleDetailDevice.clock}>
            <Icon name={'clock-o'} size={15} />
            <Text>Hẹn giờ</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styleDetailDevice.clock}>
            <Icon name={'history'} size={15} />
            <Text>Lịch sử</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text>{navigation.getParam('deviceName', 'default value')}</Text>
          <Text>{navigation.getParam('deviceModel', 'default value')}</Text>
          <Text>{navigation.getParam('id', 'default value')}</Text>
          <Text>{navigation.getParam('roomId', 'default value')}</Text>
        </View>
          <Button title={'test'} onPress={() => console.warn(this.props.DATA)} />
      </View>
    );
  }
}
//
// const mapStateToProps = state => ({
//     DATA: state.ListDevice.ListDevice1,
// });
//
//
// export default connect(
//     mapStateToProps,
//     null
// )(DetailDevice);
