import React from 'react';
import 'react-native-gesture-handler';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {rootReducer} from './src/Redux/Combine';
import {createStackNavigator} from 'react-navigation-stack';
import Screen1 from './src3/Screen1';
import Screen2 from './src3/Screen2';
import ListTest from './src3/Redux/Ruducer';
import {createAppContainer} from "react-navigation";
const store = createStore(ListTest);

const StackNavigator = createStackNavigator(
    {
        Screen1:{screen:Screen1},
        Screen2:{screen:Screen2},
    }
);
const AppContainer = createAppContainer(StackNavigator);
export default class App3 extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        );
    }
}
