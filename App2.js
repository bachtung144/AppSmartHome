import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ListSettingClock from './src2/StackSetClock/ListSettingClock';
import SetClock from './src2/StackSetClock/SetClock';
import ListSetAction from './src2/StackSetClock/ListSetAction';
import ActionOnOff from './src2/StackSetClock/ComponentAction/ActionOnOff';
import ActionChangeColor from './src2/StackSetClock/ComponentAction/ActionChangeColor';

const stackClock = createStackNavigator({
  ListSettingClockScreen: {screen: ListSettingClock},
  SetClockScreen: {screen: SetClock},
  ListSetActionScreen: {screen: ListSetAction},
  ActionOnOffScreen:{screen:ActionOnOff},
  ActionChangeColorScreen:{screen:ActionChangeColor}
});
const AppContainer = createAppContainer(stackClock);
export default class App2 extends React.Component {
  render() {
    return <AppContainer />;
  }
}
