export const ADD_ID = 'ADD_ID';
export const ADD_ACTIONS = 'ADD_ACTIONS';

export function AddId(id_dv) {
  return {type: ADD_ID, id_dv};
}

export function AddActions(actions) {
  return {type: ADD_ACTIONS, actions};
}
