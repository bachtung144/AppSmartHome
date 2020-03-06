import React, {Component} from 'react';
import {Text, View, TouchableOpacity,Button} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/AntDesign';
import {StyleActionOnOff} from '../StyleSetClock/StyleSetClock'
import {SaveOnOff} from '../../../Redux/Action/ActionListDevice';
import {connect} from 'react-redux';

 class ActionOnOff extends Component {

  constructor(props) {
    super(props);
    this.state = {
      option: 0,
    };
      const {navigation} = this.props;
      this.deviceModel = navigation.getParam('deviceModel', 'default value');
      this.roomId = navigation.getParam('roomId', 'default value');
      this.deviceName = navigation.getParam('deviceName', 'default value');
      this.index = navigation.getParam('index', 'default value');
      this.id = navigation.getParam('id', 'default value');
  }

   onOptionOn = async () =>{
      const {navigate} = this.props.navigation;
      // SaveOnOff: (roomId,id,deviceModel,Option) => dispatch(SaveOnOff(roomId,id,deviceModel,Option)),
      await this.setState({option: 1});
      await this.props.SaveOnOff(this.roomId,this.id,this.deviceModel,this.state.option);
      navigate('SetClockScreen')
  };

     onOptionOff = async () =>{
         const {navigate} = this.props.navigation;
         // SaveOnOff: (roomId,id,deviceModel,Option) => dispatch(SaveOnOff(roomId,id,deviceModel,Option)),
         await this.setState({option: 0});
         await this.props.SaveOnOff(this.roomId,this.id,this.deviceModel,this.state.option);
         navigate('SetClockScreen')
     };
  render() {
      // console.warn(this.props.DATA);
      let term = this.props.DATA[this.roomId][this.index].OptionOnOff;
    return (
      <View style={StyleActionOnOff.rootContainer}>
        <Text>Trạng thái chuyển</Text>
        <View style={StyleActionOnOff.container}>

          <TouchableOpacity
            style={StyleActionOnOff.touch}
            onPress={this.onOptionOn}
          >
            <Text style={{fontSize: 20}}>Bật</Text>
            {term === 1 ? (
              <Feather name={'check'} style={StyleActionOnOff.check} />
            ) : (
              <Icon name={'close'} style={StyleActionOnOff.close} />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={StyleActionOnOff.touch}
            onPress={this.onOptionOff}>
            <Text>Tắt</Text>
            {term === 0 ? (
              <Feather name={'check'} style={StyleActionOnOff.check}/>
            ) : (
              <Icon name={'close'} style={StyleActionOnOff.close} />
            )}
          </TouchableOpacity>
        </View>
          {/*<Button title={'test'} onPress={() => console.warn(this.props.test[this.roomId][this.index])} />*/}
      </View>
    );
  }
}

const mapStateToProps = state => ({
    DATA:state.ListDevice.ListDevice1
});

const mapDispatchToProps = dispatch => ({
    SaveOnOff: (roomId,id,deviceModel,NewOption) => dispatch(SaveOnOff(roomId,id,deviceModel,NewOption)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ActionOnOff);
