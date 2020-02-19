import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createSwitchNavigator} from 'react-navigation';
import Splash from './src/Containers/Splash';
import 'react-native-gesture-handler';
import { createStore } from 'redux'
import User from './src/Redux/Reducer/ReducerUserInfor'
import NavigationService from './src/Function/NavigationService';
import {stackRoot} from './src/StackScreen/stackRoot';
import {StackNavigatorAuth} from './src/StackScreen/StackNavigatorAuth';
import { Provider } from 'react-redux'
const store = createStore(User)

const InitialNavigator = createSwitchNavigator({
  SplashScreen: {
    screen: Splash,
  },
  Auth: StackNavigatorAuth,
  UserInforScreen: stackRoot,
});

const AppContainer_splash = createAppContainer(InitialNavigator);
export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
          <AppContainer_splash  ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);}}/>
        </Provider>)
  }
}
