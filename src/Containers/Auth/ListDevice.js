import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import io from 'socket.io-client';
import Item from '../../Function/Item';
import AddDevice from '../../Function/AddDevice';
import {Dimensions} from 'react-native';
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
      // console.warn(JSON.parse(response).data)
      await this.setState({DATA: JSON.parse(response).data});
    });
  };

  render() {
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
                <Item title={item.deviceName} />
              )
            }
          />
        ) : null}
      </SafeAreaView>
    );
  }
}
// <SafeAreaView >
//     <FlatList
//         data={this.formatData(this.state.DATA,numColumn)}
//         renderItem={({ item }) => <Item title={item.deviceName} item={item}/>}
//         keyExtractor={item => item.id}
//         numColumns={Math.round(screenWidth/150)}
//     />
// </SafeAreaView>
