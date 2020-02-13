import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import screen1 from './screen1';
import {createAppContainer} from "react-navigation";
import screen2 from './screen2';

const TabNavigator = createMaterialTopTabNavigator({
    screen1: {screen: screen1},
    screen2:{screen:screen2},
},
    {swipeEnabled:true});

const AppTest = createAppContainer(TabNavigator);

export default AppTest;
