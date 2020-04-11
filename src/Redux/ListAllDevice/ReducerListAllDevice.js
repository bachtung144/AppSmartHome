import {
  ADD_LISTALLDEVICE,
  EDIT_NAMEDEVICE,
  DELETE_DEVICE_LISTALL,
  ADD_DEVICE_LISTALL
} from './ActionListAllDevice';

const myState = {
  ListAllDevice: [],
};
export default function ListAllDevice(state = myState, action) {
  switch (action.type) {
    case ADD_LISTALLDEVICE:
      return {
        ListAllDevice: [...state.ListAllDevice, ...action.ListAllDevice],
      };
    case EDIT_NAMEDEVICE:
      let term = [...state.ListAllDevice];
      term = term.map(device => {
        if (device.id === action.id) {
          device = {...device, deviceName: action.newDeviceName};
        }
        return device;
      });
      return {
        ListAllDevice: [...term],
      };
    case DELETE_DEVICE_LISTALL:
      let termDelete = [...state.ListAllDevice];

      termDelete = termDelete.filter(item => item.id !== action.id);
      console.warn(termDelete);
      return {
        ListAllDevice: [...termDelete],
      };
    case ADD_DEVICE_LISTALL:
      let termAdd = [...state.ListAllDevice];
      termAdd = termAdd.concat(action.newDevice);
      return {
        ListAllDevice: [...termAdd],
      };
    default:
      return state;
  }
}
