export const ADD_ACTION_POWER = 'ADD_ACTION_POWER';
export const EDIT_ACTION_POWER = 'EDIT_ACTION_POWER';
export const ADD_ACTION_COLOR = 'ADD_ACTION_COLOR';
export const EDIT_ACTION_COLOR = 'EDIT_ACTION_COLOR';
export const DELETE_ALL_ARRAY_ACTION = 'DELETE_ALL_ARRAY_ACTION';
export function AddActionPower(newActionDevice: {}) {
  return {type: ADD_ACTION_POWER, newActionDevice};
}

export function EditActionPower(id, command, newValue) {
  return {type: EDIT_ACTION_POWER, id, command, newValue};
}

export function AddActionColor(newActionColor: {}) {
  return {type: ADD_ACTION_COLOR, newActionColor};
}

export function EditActionColor(id, command, newValue) {
  return {type: EDIT_ACTION_COLOR, id, command, newValue};
}

export function DeleteAllArrayAction(id) {
  return {type: DELETE_ALL_ARRAY_ACTION, id};
}
