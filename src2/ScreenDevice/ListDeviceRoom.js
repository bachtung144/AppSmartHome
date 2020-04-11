import React from 'react';
import 'react-native-gesture-handler';
import {View,Text,Button,FlatList,StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import ItemListDeviceRoom from './ItemListDeviceRoom';

class ListDeviceRoom extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        const {navigate} = this.props.navigation;
        return(
            <View>
                <FlatList
                    data={this.props.ListDeviceRoom}
                    renderItem={({ item }) => <ItemListDeviceRoom id={item.id} />}
                    keyExtractor={item => item.id}
                />
                <Button title={'tesst'} onPress={() => navigate('DetailDeviceScreen')} />
            </View>
        )
    }
}

const mapStateToProps = state => ({
    ListDeviceRoom: state.ListDeviceRoom.ListDeviceRoom,
    ListAllDevice: state.ListAllDevice.ListAllDevice,
});

export default connect(
    mapStateToProps,
    null,
)(ListDeviceRoom);

