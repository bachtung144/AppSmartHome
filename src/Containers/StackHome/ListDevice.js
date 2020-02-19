import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
    Button
} from 'react-native';
import io from 'socket.io-client';
import Item from '../../Function/Item';
import AddDevice from '../../Function/AddDevice';
import {styleFlatList} from '../../Components/Styles';
import hp_wall from '../../Picture/hp_wall.png';
import Icon from 'react-native-vector-icons/AntDesign';
import {Global,Global1} from '../../Function/Global';
import NavigationService from '../../Function/NavigationService';

const screenWidth = Math.round(Dimensions.get('window').width);
export default class ListDevice extends Component {
  constructor(props) {
    super(props);
    this.socket = io('http://192.168.99.199:1123');
    this.state = {
      DATA: [],
    };
  }

  componentDidMount = async () => {
    let {navigation} = this.props;
    let roomId = navigation.state.key;
    await this.socket.emit('deviceRoom', JSON.stringify({roomId: roomId}));
    this.socket.on('deviceRoom', async response => {
      await this.setState({DATA: JSON.parse(response).data});
      // console.warn(JSON.parse(response).data)
    });
  };
  render() {
    // const {navigate} = this.props.navigation
    if (this.state.DATA === null) {
      return (
        <View>
          <Text>Loading</Text>
        </View>
      );
    }
    return (
      <SafeAreaView>
        {this.state.DATA != null ? (
          <FlatList
            numColumns={Math.floor(screenWidth / 150)}
            data={[...this.state.DATA, 'item']}
            keyExtractor={item => item.id}
            renderItem={({item, index}) =>
              index > this.state.DATA.length - 1 ? (
                <AddDevice />
              ) : (
                <Item title={item.deviceName}
                      onPress={() => NavigationService.navigate('DetailDeviceScreen',
                          {deviceName:item.deviceName})} />
              )
            }
          />
            // {deviceName:item.deviceName}
        ) : null}
        <Button title={'test'} onPress={() => console.log(this.state.DATA)}/>
      </SafeAreaView>
    );
  }
}

