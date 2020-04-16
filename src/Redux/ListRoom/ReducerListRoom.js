import {ADD_LISTROOM} from './ActionListRoom';

const myState = {
  ListRoom: [],
};
export default function ListRoom(state = myState, action) {
  switch (action.type) {
    case ADD_LISTROOM:
      return {
        ListRoom: action.ListRoom,
      };
    default:
      return state;
  }
}
