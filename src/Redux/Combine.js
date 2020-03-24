import { combineReducers } from 'redux'
import ListDevice from './Reducer/ReducerListDevice';
import User from './Reducer/ReducerUserInfor';
import ListAction from './Reducer/ReducerListAction';
import ListAllDevice from './Reducer/ReducerListAllDevice';
import ListDeviceRoom from './Reducer/ReducerListDeviceRoom';
export const rootReducer =  combineReducers({
    User,
    ListAction,
    ListAllDevice,
    ListDeviceRoom
});
