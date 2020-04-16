import React from 'react';
import {View, Button, Dimensions, SafeAreaView, Text} from 'react-native';
import GoBackButton from '../Components/GoBackButton';
import NavigationService from '../Function/NavigationService';
import ButtonAdd from '../Components/ButtonAdd';
import {connect} from 'react-redux';

class ListAlarm extends React.Component {
  static navigationOptions = ({navigation}) => {
    let id = navigation.getParam('id', 'default value');
    return {
      headerTitle: 'List Alarm',
      headerLeft: () => (
        <GoBackButton
          onPress={() => NavigationService.navigate('DetailDeviceScreen')}
        />
      ),
      headerRight: () => (
        <ButtonAdd
          onPress={() => navigation.navigate('SetClockScreen', {id: id})}
        />
      ),
      headerTitleContainerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
      },
    };
  };
  render() {
    const {navigation} = this.props;
    // console.warn(navigation.getParam('id', 'default value'));
    return (
      <Button
        title={'test'}
        onPress={() => console.warn(this.props.ListAction)}
      />
    );
  }
}

const mapStateToProps = state => ({
  ListAction: state.ListAction.ListAction,
});

export default connect(
  mapStateToProps,
  null,
)(ListAlarm);
