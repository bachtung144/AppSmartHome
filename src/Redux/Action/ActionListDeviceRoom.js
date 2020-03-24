
export const ADD_LISTDEVICEROOM= 'ADD_LISTDEVICEROOM';

export function AddListDeviceRoom(ListDeviceRoom: {}, roomId) {
    return {type: ADD_LISTDEVICEROOM, ListDeviceRoom, roomId};
}
