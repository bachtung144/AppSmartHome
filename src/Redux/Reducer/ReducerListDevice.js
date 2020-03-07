import {
  ADD_LISTDEVICE,
  EDIT_NAMEDEVICE,
  DELETE_DEVICE,
  ADD_DEVICE,
  ADD_LISTALARM,
  DELETE_LISTALARM
} from '../Action/ActionListDevice';

const myState = {
  ListDevice1: {},
};

export default function ListDevice(state = myState, action) {
  switch (action.type) {
    case ADD_LISTDEVICE:
      let rs = {
        ...state.ListDevice1,
      };
      rs[action.roomId] = action.ListDevice;
      return {
        ListDevice1: rs,
      };
    case EDIT_NAMEDEVICE:
      let rs1 = {
        ...state.ListDevice1,
      };
      rs1[action.roomId] = rs1[action.roomId].map(device => {
        if (device.id === action.id) {
          device = {...device, deviceName: action.newDeviceName};
        }
        return device;
      });

      return {
        ListDevice1: {...rs1},
      };
    case DELETE_DEVICE:
      let term = {
        ...state.ListDevice1,
      };
      term[action.roomId] = term[action.roomId].filter(
        item => item.id !== action.id,
      );
      return {
        ListDevice1: {...term},
      };
    case ADD_DEVICE:
      let term1 = {
        ...state.ListDevice1,
      };

      term1[action.roomId] = term1[action.roomId].concat(action.newDevice);
      console.warn(term1[action.roomId]);
      return {
        ListDevice1: {...term1},
      };
    case ADD_LISTALARM:
      let termList = {
        ...state.ListDevice1,
      };
      termList[action.roomId] = termList[action.roomId].map(device => {
        if (device.id === action.id) {
          device.ListAlarm = device.ListAlarm.concat(action.newSetClock);
        }
        return device;
      });
      return {
        ListDevice1: {...termList},
      };
    case DELETE_LISTALARM:
      let termDelete ={
        ...state.ListDevice1,
      };
      termDelete[action.roomId] = termDelete[action.roomId].map(device => {
        if (device.id === action.id) {
          device.ListAlarm = device.ListAlarm.filter(
              item => item.id !== action.idItem,
          );
        }
        return device;
      });
      return {
        ListDevice1: {...termDelete},
      };
    default:
      return state;
  }
}
