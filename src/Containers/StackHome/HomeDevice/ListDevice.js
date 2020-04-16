import React from 'react';
import {
  SafeAreaView,
  FlatList,
  Dimensions,
  Button,
  ScrollView,
} from 'react-native';
import NavigationService from '../../../Function/NavigationService';
import {connect} from 'react-redux';
const screenWidth = Math.round(Dimensions.get('window').width);
import Loading from '../../../Components/Loading';
import ItemDeviceRoom from '../ComponentStackHome/Item';
import ItemAddDevice from '../ComponentStackHome/ItemAddDevice';

class ListDevice extends React.Component {
  constructor(props) {
    super(props);
    let {navigation} = this.props;
    this.roomID = navigation.state.key;
  }

  render() {
    if (!this.props.ListDeviceRoom) {
      return <Loading />;
    }
    return (
      <SafeAreaView>
        <ScrollView>
          {this.props.ListDeviceRoom ? (
            <FlatList
              numColumns={Math.floor(screenWidth / 150)}
              data={[...this.props.ListDeviceRoom, 'item']}
              keyExtractor={item => item.id}
              renderItem={({item, index}) =>
                index > this.props.ListDeviceRoom.length - 1 ? (
                  <ItemAddDevice
                    onPress={() =>
                      NavigationService.navigate('AddDeviceScreen', {
                        roomId: this.roomID,
                      })
                    }
                  />
                ) : (
                  <ItemDeviceRoom id={item.id} />
                )
              }
            />
          ) : null}
          {/*<Button*/}
          {/*    title={'test1'}*/}
          {/*    onPress={() => console.warn(this.props.ListDeviceRoom)}*/}
          {/*/>*/}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state, props) => {
  let {navigation} = props;
  let roomID = navigation.state.key;
  return {
    ListDeviceRoom: state.ListDeviceRoom.ListDeviceRoom[roomID],
  };
};

export default connect(
  mapStateToProps,
  null,
)(ListDevice);
