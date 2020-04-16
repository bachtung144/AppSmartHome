export const ADD_LISTROOM = 'ADD_LISTROOM';

export function AddListRoom(ListRoom: []) {
  return {type: ADD_LISTROOM, ListRoom};
}
