import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import screen1 from './screen1';
import {createAppContainer} from "react-navigation";
import screen2 from './screen2';
let data = {screen: screen1}
const TabNavigator = createMaterialTopTabNavigator({
        data,
        screen2: {screen:screen2},
    screen3:{screen:screen2},
    screen4:{screen:screen2},
    screen5:{screen:screen2},
    },
    {swipeEnabled:true});

const AppTest = createAppContainer(TabNavigator);

export default AppTest;
