export const ADD_LISTDEVICE = 'ADD_LISTDEVICE'
export const EDIT_NAMEDEVICE = 'EDIT_NAMEDEVICE'

export function AddListDevice(ListDevice:{},roomId) {
    return {type:ADD_LISTDEVICE,ListDevice,roomId}
}

export function EditNameDevice(newDeviceName,id,roomId) {
    return {type:EDIT_NAMEDEVICE,newDeviceName,id,roomId}
}

