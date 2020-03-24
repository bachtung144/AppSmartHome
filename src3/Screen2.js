import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import {AddList, deleteDevice} from './Redux/Action';
import {connect} from 'react-redux';

class Screen2 extends React.Component{
    constructor(props) {
        super(props);
        const {navigation} = this.props;
        this.id = navigation.getParam('id', 'default value');
    }
    async use(){
        const {navigate} = this.props.navigation;
        await this.props.deleteDevice(this.id);
         return await navigate('Screen1')
    }
    render(){
        return(
            <View>
                <Button title={'delete'} onPress={() => this.use()}/>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    List : state.List
});

const mapDispatchToProps = dispatch => ({
    deleteDevice : id =>   dispatch(deleteDevice(id)),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Screen2);
