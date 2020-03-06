export const ADD_LISTDEVICE = 'ADD_LISTDEVICE';
export const EDIT_NAMEDEVICE = 'EDIT_NAMEDEVICE';
export const DELETE_DEVICE = 'DELETE_DEVICE ';
export const ADD_DEVICE = 'ADD_DEVICE';
export const SAVE_ONOFF = 'SAVE_ONOFF';
export const ADD_LISTALARM = 'ADD_LISTALARM';

export function AddListDevice(ListDevice: {}, roomId) {
  return {type: ADD_LISTDEVICE, ListDevice, roomId};
}

export function EditNameDevice(newDeviceName, id, roomId) {
  return {type: EDIT_NAMEDEVICE, newDeviceName, id, roomId};
}

export function DeleteDevice(id, roomId) {
  return {type: DELETE_DEVICE, id, roomId};
}

export function AddDeviceCustom(newDevice:{},roomId) {
  return {type: ADD_DEVICE, newDevice,roomId};
}

export function SaveOnOff(roomId,id,deviceModel,NewOption) {
  return {type: SAVE_ONOFF,roomId,id,deviceModel,NewOption}
}
export function AddListAlarm(roomId,id,newSetClock:{}) {
  return {type: ADD_LISTALARM,roomId,id,newSetClock}
}
