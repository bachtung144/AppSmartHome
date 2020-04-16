import {combineReducers} from 'redux';
import User from './UserInfor/ReducerUserInfor';
import ListAction from './ListAction/ReducerListAction';
import ListAllDevice from './ListAllDevice/ReducerListAllDevice';
import ListDeviceRoom from './ListDeviceRoom/ReducerListDeviceRoom';
import ListRoom from './ListRoom/ReducerListRoom';
import Status from './Status/ReducerStatus';
import NewDevice from './NewDevice/ReducerNewDevice';
export const rootReducer = combineReducers({
  User,
  ListAction,
  ListAllDevice,
  ListDeviceRoom,
  ListRoom,
  Status,
  NewDevice,
});
