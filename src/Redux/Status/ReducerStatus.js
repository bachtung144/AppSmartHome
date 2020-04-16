import {
  SET_TRUE_EDIT,
  SET_FALSE_EDIT,
  SET_TRUE_DELETE,
  SET_FALSE_DELETE,
  SET_TRUE_ADD,
  SET_FALSE_ADD
} from './ActionStatus';

const myState = {
  statusEdit: false,
  statusDelete: false,
  statusAdd:false,
};
export default function Status(state = myState, action) {
  switch (action.type) {
    case SET_TRUE_EDIT:
      // console.warn('status : true');
      return {
        ...state,
        statusEdit: true,
      };
    case SET_FALSE_EDIT:
      return {
        ...state,
        statusEdit: false,
      };
    case SET_TRUE_DELETE:
      return {
        ...state,
        statusDelete: true,
      };
    case SET_FALSE_DELETE:
      return {
        ...state,
        statusDelete: false,
      };
    case SET_TRUE_ADD:
      return {
        ...state,
        statusAdd: true,
      };
    case SET_FALSE_ADD:
      return {
        ...state,
        statusAdd: false,
      };

    default:
      return state;
  }
}
