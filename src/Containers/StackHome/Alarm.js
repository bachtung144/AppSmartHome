import {View, Text,Button} from 'react-native';
import React, {Component} from 'react';
import {AddListDevice} from '../../Redux/Action/ActionListDevice';
import {connect} from 'react-redux';

 class Alarm extends Component {
    render(){
        return(
            <View>
                <Text>Hẹn giờ</Text>
                <Button title={'test'} onPress={() => console.warn(this.props.DATA)}/>
            </View>
        )
    }
}
const mapStateToProps = state => ({
    DATA: state.ListDevice1,
});

export default connect(
    mapStateToProps,
    null
)(Alarm);

