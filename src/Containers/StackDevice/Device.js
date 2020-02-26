import React, {Component} from 'react';
import {
  Text,
  FlatList,
  SafeAreaView,
  View,
  ActivityIndicator,
} from 'react-native';
import io from 'socket.io-client';
import Item from '../../Function/Item';
import socket from '../../Socket/SocketIo';

export default class Device extends Component {
  constructor(props) {
    super(props);
    this.page = 1;
    this.state = {
      DATA: [],
      page: 1,
      isLoading: false,
    };
  }
  getResponse = async response => {
    // if(this.state.page ===3) return ;
    await this.setState({
      DATA: this.state.DATA.concat(JSON.parse(response).data),
      isLoading: false,
    });
    if (JSON.parse(response).data.length < 10) {
      return;
    }
  };

  getData = async () => {
    await socket.SocketEmit(
      'listDevice',
      JSON.stringify({page: this.state.page}),
    );
    await socket.SocketOn('listDevice', this.getResponse);
  };
  componentDidMount() {
    this.setState({isLoading: true}, this.getData);
  }

  handleLoadMore = async () => {
    await this.setState(
      {page: this.state.page + 1, isLoading: true},
      this.getData,
    );
  };

  renderFooter = () => {
    return this.state.isLoading ? (
      <View>
        <ActivityIndicator size={'large'} />
      </View>
    ) : null;
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
        <FlatList
          data={this.state.DATA}
          renderItem={({item}) => (
            <Item
              title={item.deviceName}
              onPress={() => console.warn('hello')}
            />
          )}
          keyExtractor={item => item.id}
          numColumns={2}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={0}
          ListFooterComponent={this.renderFooter}
        />
      </SafeAreaView>
    );
  }
}
