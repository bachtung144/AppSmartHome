import {DELETE,ADD_LIST} from './Action';

const myState = {
    List:[{id:1,name:'dv1'},{id:2,name:'dv2'},{id:3,name:'dv3'},{id:4,name:'dv4'}],
    newArr:[]
};
export default function ListTest(state = myState, action){
    switch (action.type){
        case ADD_LIST:
            return {
                List: action.List
            };
        case DELETE:
            let term = [
                ...state.List,
            ];
            term = term.filter(
                item => item.id !== action.id,
            );
            return {
                List: term,
            };
        default : return state
    }
}
