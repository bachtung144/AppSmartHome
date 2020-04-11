import {
  ADD_LISTDEVICEROOM,
  ADD_DEVICE_LISTROOM,
  DELETE_DEVICE_LISTROOM,
} from './ActionListDeviceRoom';

const myState = {
  ListDeviceRoom: {},
};
export default function ListDeviceRoom(state = myState, action) {
  switch (action.type) {
    case ADD_LISTDEVICEROOM:
      let rs = {
        ...state.ListDeviceRoom,
      };
      rs[action.roomId] = action.ListDeviceRoom;
      return {
        ListDeviceRoom: rs,
      };
    case ADD_DEVICE_LISTROOM:
      let termAdd = {
        ...state.ListDeviceRoom,
      };
      termAdd[action.roomId] = termAdd[action.roomId].concat(action.newDevice);
      return {
        ListDeviceRoom: {...termAdd},
      };
    case DELETE_DEVICE_LISTROOM:
      let termDelete = {
        ...state.ListDeviceRoom,
      };
      termDelete[action.roomId] = termDelete[action.roomId].filter(
        item => item.id !== action.id,
      );
      return {
        ListDeviceRoom: {...termDelete},
      };
    default:
      return state;
  }
}
