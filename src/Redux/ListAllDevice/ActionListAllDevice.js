export const ADD_LISTALLDEVICE = 'ADD_LISTALLDEVICE';
export const EDIT_NAMEDEVICE = 'EDIT_NAMEDEVICE';
export const DELETE_DEVICE_LISTALL = 'DELETE_DEVICE_LISTALL';
export const ADD_DEVICE_LISTALL = 'ADD_DEVICE_LISTALL';

export function AddListAllDevice(ListAllDevice: []) {
  return {type: ADD_LISTALLDEVICE, ListAllDevice};
}

export function EditNameDevice(newDeviceName, id) {
  return {type: EDIT_NAMEDEVICE, newDeviceName, id};
}

export function DeleteDeviceListAll(id) {
  return {type: DELETE_DEVICE_LISTALL, id};
}

export function AddDeviceListAll(newDevice:{}) {
  return {type: ADD_DEVICE_LISTALL, newDevice}
}
