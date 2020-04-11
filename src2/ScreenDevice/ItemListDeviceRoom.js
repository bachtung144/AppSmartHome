import React from 'react';
import {Text, View,StyleSheet,Button,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import NavigationService from '../../src/Function/NavigationService';

class ItemListDeviceRoom extends React.Component{
    render(){
        return (
            <TouchableOpacity
                style={styles.item}
                onPress={() => NavigationService.navigate('DetailDeviceScreen')}
            >
                <Text style={styles.title}>{this.props.DeviceInfor[0].deviceName}</Text>
            </TouchableOpacity>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        DeviceInfor: state.ListAllDevice.ListAllDevice.filter(
            ele => ele.id === props.id,
        ),
    };
};

export default connect(
    mapStateToProps,
    null,
)(ItemListDeviceRoom);

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
