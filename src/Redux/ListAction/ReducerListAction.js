import {ADD_LISTACTION} from './ActionListAction';

const myState = {
    ListAction:[]
};
export default function ListAction(state = myState, action){
    switch (action.type){
        case ADD_LISTACTION:
            return {
                ListAction: action.ListAction
            };
        default : return state
    }
}
