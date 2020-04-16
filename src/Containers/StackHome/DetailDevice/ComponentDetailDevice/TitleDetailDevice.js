import React from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';

class TitleDetailDevice extends React.Component {
  render() {
    return (
      <Text>
        {this.props.DeviceInfor.length !== 0
          ? this.props.DeviceInfor[0].deviceName
          : null}
      </Text>
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
)(TitleDetailDevice);
