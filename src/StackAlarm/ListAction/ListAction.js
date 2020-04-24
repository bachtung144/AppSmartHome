import React from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import CheckActionNameForNavigate from './CheckActionNameForNavigate';

class ItemAction extends React.Component {
  render() {
    let onPress = this.props.onPress;
    return (
      <TouchableOpacity style={styles.item} onPress={onPress}>
        <Text style={styles.title}>{this.props.ActionName}</Text>
        <Feather
          name={'chevron-right'}
          size={27}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
      </TouchableOpacity>
    );
  }
}

class ListAction extends React.Component {
  render() {
    const {navigation} = this.props;
    const {navigate} = this.props.navigation;
    let id = navigation.getParam('id', 'default value');
    let LastRouteName = navigation.getParam('LastRouteName', 'default value');
    return (
      <FlatList
        data={this.props.DeviceInfor[0].actions}
        renderItem={({item}) => (
          <ItemAction
            ActionName={item.command}
            onPress={() =>
              navigate(CheckActionNameForNavigate(item.command), {
                LastRouteName: LastRouteName,
                id: id,
                command: item.command,
                RouteNameListAction:navigation.state.routeName
              })
            }
          />
        )}
        keyExtractor={item => item.command}
      />
    );
  }
}

const mapStateToProps = (state, props) => {
  const {navigation} = props;
  let id = navigation.getParam('id', 'default value');
  return {
    DeviceInfor: state.ListAllDevice.ListAllDevice.filter(ele => ele.id === id),
  };
};

export default connect(
  mapStateToProps,
  null,
)(ListAction);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: 'white',
    padding: 5,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: 'gray',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title: {
    fontSize: 22,
  },
});
