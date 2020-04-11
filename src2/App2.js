import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ListDeviceRoom from './ScreenDevice/ListDeviceRoom';
import DetailDevice from './ScreenDevice/DetailDevice';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {rootReducer} from './Redux/Combine';
import NavigationService from '../src/Function/NavigationService';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ListAllDevice from './ScreenDevice/ListAllDevice';
import MenuDetail from './ScreenDevice/MenuDetailDevice';
const store = createStore(rootReducer);
const RootStack = createStackNavigator(
    {
        ListDeviceRoomScreen: {screen:ListDeviceRoom},
        DetailDeviceScreen: {screen:DetailDevice},
        MenuDetailScreen:{screen:MenuDetail}
    },
    {
        initialRouteName: 'ListDeviceRoomScreen',
    }
);
const TabNavigator = createBottomTabNavigator({
    Home:{screen:RootStack},
    AllDevice:{screen:ListAllDevice}
});
const AppContainer = createAppContainer(TabNavigator);

export default class App2 extends React.Component {
    render() {
        return (
            <Provider store={store}>
            <AppContainer ref={navigatorRef => {
                NavigationService.setTopLevelNavigator(navigatorRef);
            }}/>
            </Provider>
        )
    }
}

