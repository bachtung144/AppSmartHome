import React from 'react';
import {Text, FlatList, SafeAreaView, View} from 'react-native';
import {connect} from 'react-redux';
import ItemAllDevice from './ComponentStackDevice/ItemAllDevice';

class DeviceTest extends React.Component {
  render() {
    if (this.props.ListAllDevice === null) {
      return (
        <View>
          <Text>Loading</Text>
        </View>
      );
    }
    return (
      <SafeAreaView>
        <FlatList
          data={this.props.ListAllDevice}
          renderItem={({item}) => (
            <ItemAllDevice id={item.id} deviceName={item.deviceName} />
          )}
          keyExtractor={item => item.id}
          numColumns={2}
        />
      </SafeAreaView>
    );
  }
}
const mapStateToProps = state => ({
  ListAllDevice: state.ListAllDevice.ListAllDevice,
});

export default connect(
  mapStateToProps,
  null,
)(DeviceTest);
