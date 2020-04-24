import {
  ADD_ACTION_POWER,
  EDIT_ACTION_POWER,
  ADD_ACTION_COLOR,
  EDIT_ACTION_COLOR,
  DELETE_ALL_ARRAY_ACTION,
} from './ActionListActionDevice';

const myState = {
  ListPower: [],
  ListColor: [],
};
export default function ListActionDevice(state = myState, action) {
  switch (action.type) {
    case ADD_ACTION_POWER:
      return {
        ...state,
        ListPower: [...state.ListPower, action.newActionDevice],
      };
    case EDIT_ACTION_POWER:
      let termEdit = [...state.ListPower];
      termEdit = termEdit.map(item => {
        if (item.id === action.id && item.command === action.command) {
          item = {...item, value: action.newValue};
        }
        return item;
      });

      return {
        ...state,
        ListPower: [...termEdit],
      };
    case ADD_ACTION_COLOR:
      return {
        ...state,
        ListColor: [...state.ListColor, action.newActionColor],
      };
    case EDIT_ACTION_COLOR:
      let termEditColor = [...state.ListColor];
      termEditColor = termEditColor.map(item => {
        if (item.id === action.id && item.command === action.command) {
          item = {...item, value: action.newValue};
        }
        return item;
      });

      return {
        ...state,
        ListColor: [...termEditColor],
      };
    case DELETE_ALL_ARRAY_ACTION:
      let termDeleteColor = [...state.ListColor];
      let termDelete = [...state.ListPower];
      termDelete = termDelete.filter(item => item.id !== action.id);
      termDeleteColor = termDeleteColor.filter(item => item.id !== action.id);
      return {
        ...state,
        ListPower: [...termDelete],
        ListColor: [...termDeleteColor],
      };
    default:
      return state;
  }
}
