import { combineReducers } from 'redux'
import ListDeviceRoom from './ReduxListDeviceRoom/ReducerListDeviceRoom';
import ListAllDevice from './ReduxListAllDevice/ReducerListAllDevice';

export const rootReducer =  combineReducers({
    ListAllDevice,
    ListDeviceRoom
});
