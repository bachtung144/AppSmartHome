import {ADD_PHONE, ADD_CALLINGCODE} from '../Action/ActionUserInfor';

export default function User(state = {}, action) {
  switch (action.type) {
    case ADD_PHONE:
      return {
        ...state,

        phoneNumber: action.phoneNumber,
      };
    case ADD_CALLINGCODE:
      return {
        ...state,

        CallingCode: action.CallingCode,
      };
    default:
      return state;
  }
}
