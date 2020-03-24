export const ADD_LISTALLDEVICE = 'ADD_LISTALLDEVICE';
export const EDIT_NAMEDEVICE = 'EDIT_NAMEDEVICE';

export function AddListAllDevice(ListAllDevice: []) {
    return {type: ADD_LISTALLDEVICE, ListAllDevice};
}

export function EditNameDevice(newDeviceName, id) {
    return {type: EDIT_NAMEDEVICE, newDeviceName,id};
}


