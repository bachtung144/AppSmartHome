import { combineReducers } from 'redux'
import User from './UserInfor/ReducerUserInfor';
import ListAction from './ListAction/ReducerListAction';
import ListAllDevice from './ListAllDevice/ReducerListAllDevice';
import ListDeviceRoom from './ListDeviceRoom/ReducerListDeviceRoom';
export const rootReducer =  combineReducers({
    User,
    ListAction,
    ListAllDevice,
    ListDeviceRoom
});
