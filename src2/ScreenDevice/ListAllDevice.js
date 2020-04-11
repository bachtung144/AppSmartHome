import React from 'react';
import {View,Text,FlatList,StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import ItemListDeviceRoom from './ItemListDeviceRoom';

class ItemListAllDevice extends React.Component{
    render(){
        return(
            <View style={styles.item}>
                <Text>
                    {this.props.deviceName}
                </Text>
            </View>
        )
    }
}
class ListAllDevice extends React.Component{
    render(){
        return(
            <View>
                <FlatList
                    data={this.props.ListAllDevice}
                    renderItem={({ item }) => <ItemListAllDevice deviceName={item.deviceName} />}
                    keyExtractor={item => item.id}
                />
            </View>
        )
    }
}

const mapStateToProps = state => ({
    ListAllDevice: state.ListAllDevice.ListAllDevice,
});

export default connect(
    mapStateToProps,
    null,
)(ListAllDevice);

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


