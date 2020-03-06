import React from 'react';
import {
    TouchableOpacity,
    Text,
} from 'react-native';
import {AddListAlarm, SaveOnOff} from '../../../Redux/Action/ActionListDevice';
import {connect} from 'react-redux';

 export default class ButtonSave extends React.PureComponent{
    render(){
        let onPress = this.props.onPress;
        return(
            <TouchableOpacity onPress={onPress}>
                <Text style={{color:'#1291b6',marginRight:10,fontSize:20}}>Lưu</Text>
            </TouchableOpacity>
        )
    }
}

// const mapStateToProps = state => ({
//     DATA:state.ListDevice.ListDevice1
// });
//
// const mapDispatchToProps = dispatch => ({
//     AddListAlarm: (roomId,id,newListAlarm) => dispatch( AddListAlarm(roomId,id,newListAlarm))
// });
//
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(ButtonSave);
