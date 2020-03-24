export const DELETE = 'DELETE';
export const ADD_LIST = 'ADD_LIST'

export function AddList(List: []) {
    return {type: ADD_LIST, List};
}

export function deleteDevice(id) {
    return {type:DELETE,id}
}


