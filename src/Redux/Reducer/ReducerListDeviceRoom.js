import {ADD_LISTDEVICEROOM} from '../Action/ActionListDeviceRoom';

const myState = {
    ListDeviceRoom: {},
};
export default function ListDeviceRoom(state = myState, action){
    switch (action.type){
        case ADD_LISTDEVICEROOM:
            let rs = {
                ...state.ListDeviceRoom,
            };
            rs[action.roomId] = action.ListDeviceRoom;
            return {
                ListDeviceRoom: rs,
            };
        default : return state
    }
}
