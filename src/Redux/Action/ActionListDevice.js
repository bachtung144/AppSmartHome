export const ADD_LISTDEVICE = 'ADD_LISTDEVICE';
export const EDIT_NAMEDEVICE = 'EDIT_NAMEDEVICE';
export const DELETE_DEVICE = 'DELETE_DEVICE ';
export const ADD_DEVICE = 'ADD_DEVICE';

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
