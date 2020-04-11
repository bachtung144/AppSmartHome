import React from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';

class title extends React.Component {

    render() {
        let roomId = this.props.roomId;
        let index = this.props.index;
        // let deviceName = this.props.deviceName
        return <Text>{this.props.DATA[roomId][index].deviceName}</Text>;
    }
}
const mapStateToProps = state => ({
    DATA: state.ListDevice.ListDevice1,
});
export default connect(
    mapStateToProps,
    null
)(title);
