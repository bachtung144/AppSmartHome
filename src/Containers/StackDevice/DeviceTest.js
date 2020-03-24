import React, {Component} from 'react';
import {
    Text,
    FlatList,
    SafeAreaView,
    View,
    ActivityIndicator,
    Button
} from 'react-native';

import ItemDeviceRoom from '../../Function/Item';
import socket from '../../Socket/SocketIo';
import {deleteDevice} from '../../../src3/Redux/Action';
import {connect} from 'react-redux';
import {AddListAction} from '../../Redux/Action/ActionListAction';

class DeviceTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            DATA: [],
        };
    }

    async componentDidMount() {
       await socket.SocketEmit('listDevice', JSON.stringify({page: 1}))
       await socket.SocketEmit('listDevice', JSON.stringify({page: 2}))
       await socket.SocketOn('listDevice', response =>{
           // this.props.AddListTest(JSON.parse(response).data)
           }
       );
    }

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
                <Button title={'test'} onPress={() => console.warn(this.props.ListTest)}/>
                <FlatList
                    data={this.props.ListTest}
                    renderItem={({item}) => (
                        <ItemDeviceRoom
                            title={item.deviceName}
                            onPress={() => console.warn('hello')}
                        />
                    )}
                    keyExtractor={item => item.id}
                    numColumns={2}
                />
            </SafeAreaView>
        );
    }
}
const mapStateToProps = state => ({
    ListTest : state.ListDeviceTest.ListTest
});
// const mapDispatchToProps = dispatch => ({
//     AddListTest : (ListTest: []) =>   dispatch(AddListTest(ListTest)),
// });
export default connect(
    mapStateToProps,
    null,
)(DeviceTest);

