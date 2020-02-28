import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';

const DATA = [
  {
    id: '1',
    deviceName: 'Công tắc 1',
    deviceModel: 'ct1',
    arrAction:['on-off']
  },
  {
    id: '2',
    deviceName: 'Công tắc 2',
    deviceModel: 'ct2',
    arrAction:['on-off','change-color']
  },
];
class Item extends React.Component {
  render() {
    let onPress = this.props.onPress;
    return (
      <TouchableOpacity onPress={onPress} style={styles.item}>
        <Text>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

export default class ListSettingClock extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({item}) => (
            <Item
              title={item.deviceName}
              onPress={() =>
                navigate('SetClockScreen',
                    {deviceModel: item.deviceModel,listAction:item.arrAction})
              }
            />
          )}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
