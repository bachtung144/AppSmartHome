export const SET_TRUE_EDIT = 'SET_TRUE_EDIT';
export const SET_FALSE_EDIT = 'SET_FALSE_EDIT';
export const SET_TRUE_DELETE = 'SET_TRUE_DELETE';
export const SET_FALSE_DELETE = 'SET_FALSE_DELETE';
export const SET_TRUE_ADD = 'SET_TRUE_ADD';
export const SET_FALSE_ADD = 'SET_FALSE_ADD';
export function SetTrueEdit() {
  return {type: SET_TRUE_EDIT};
}

export function SetFalseEdit() {
  return {type: SET_FALSE_EDIT};
}

export function SetTrueDelete() {
  return {type: SET_TRUE_DELETE};
}

export function SetFalseDelete() {
  return {type: SET_FALSE_DELETE};
}

export function SetTrueAdd() {
  return {type: SET_TRUE_ADD};
}

export function SetFalseAdd() {
  return {type: SET_FALSE_ADD};
}

