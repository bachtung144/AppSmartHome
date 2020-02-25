import { combineReducers } from 'redux'
import ListDevice from './Reducer/ReducerListDevice';
import User from './Reducer/ReducerUserInfor';

export const rootReducer =  combineReducers({
    User,
    ListDevice
})
