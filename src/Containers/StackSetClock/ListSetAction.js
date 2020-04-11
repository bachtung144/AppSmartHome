import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
    Button
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import InitArrayAction from './FunctionSetClock/InitArrayAction';
import CheckActionNameForNavigate from './FunctionSetClock/CheckActionNameForNavigate';
import {AddListAlarm} from '../../Redux/ListDeviceOld/ActionListDevice';
import {connect} from 'react-redux';

class Item extends React.Component {
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
            marginTop: 5,
          }}
        />
      </TouchableOpacity>
    );
  }
}
class ListSetAction extends Component {
  constructor(props) {
    super(props);
    const {navigation} = this.props;
    this.deviceModel = navigation.getParam('deviceModel', 'default value');
    this.roomId = navigation.getParam('roomId', 'default value');
    this.deviceName = navigation.getParam('deviceName', 'default value');
    this.index = navigation.getParam('index', 'default value');
    this.id = navigation.getParam('id', 'default value');
    this.arrayAction = navigation.getParam('arrayAction', 'default value');
    this.state ={
        DATA:[]
    }
  }

  componentDidMount(): void {
      this.setState({DATA:InitArrayAction(this.arrayAction,this.props.ListAction)})
  }

  render() {

    const {navigate} = this.props.navigation;
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.DATA}
          renderItem={({item}) => (
            <Item
              ActionName={item.name}
              onPress={() =>
                navigate(CheckActionNameForNavigate(item.command), {
                  deviceModel: this.deviceModel,
                  roomId: this.roomId,
                  deviceName: this.deviceName,
                  index: this.index,
                  id: this.id,
                })
              }
            />
          )}
          keyExtractor={item => item.command}
        />
        <Button title={'test'} onPress={() => console.warn(this.state.DATA)}/>
      </SafeAreaView>
    );
  }
}
const mapStateToProps = state => ({
    ListAction: state.ListAction.ListAction,
});

export default connect(
    mapStateToProps,
    null,
)(ListSetAction);

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
    fontSize: 25,
  },
});
