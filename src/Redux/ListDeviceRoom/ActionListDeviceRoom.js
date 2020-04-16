export const ADD_LISTDEVICEROOM = 'ADD_LISTDEVICEROOM';
export const ADD_DEVICE_LISTROOM = 'ADD_DEVICE_LISTROOM';
export const DELETE_DEVICE_LISTROOM = 'DELETE_DEVICE_LISTROOM';

export function AddListDeviceRoom(ListDeviceRoom: [], roomId) {
  return {type: ADD_LISTDEVICEROOM, ListDeviceRoom, roomId};
}

export function AddDeviceListRoom(newDevice: {}, roomId) {
  return {type: ADD_DEVICE_LISTROOM, newDevice, roomId};
}

export function DeleteDeviceListRoom(id, roomId) {
  return {type: DELETE_DEVICE_LISTROOM, id, roomId};
}
