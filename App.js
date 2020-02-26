import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createSwitchNavigator} from 'react-navigation';
import Splash from './src/Containers/Splash';
import 'react-native-gesture-handler';
import {createStore} from 'redux';
import NavigationService from './src/Function/NavigationService';
import {stackRoot} from './src/StackScreen/stackRoot';
import {StackNavigatorAuth} from './src/StackScreen/StackNavigatorAuth';
import {Provider} from 'react-redux';
import {rootReducer} from './src/Redux/Combine';
const store = createStore(rootReducer);
import {Button} from 'react-native';
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
    store.subscribe(() => console.log(store.getState()));
    return (
      <Provider store={store}>
        <AppContainer_splash
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
        {/*<Button title={'test'} onPress={() => console.log(store.getState())}/>*/}
      </Provider>
    );
  }
}
