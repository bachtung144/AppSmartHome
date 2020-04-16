import {ADD_ID, ADD_ACTIONS} from './ActionNewDevice';

const myState = {
  id_dv: null,
  actions: [],
};

export default function NewDevice(state = myState, action) {
  switch (action.type) {
    case ADD_ID:
      return {
        ...state,
        id_dv: action.id_dv,
      };
    case ADD_ACTIONS:
      return {
        ...state,
        actions: action.actions,
      };
    default:
      return state;
  }
}
