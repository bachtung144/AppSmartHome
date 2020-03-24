import {ADD_LISTALLDEVICE,EDIT_NAMEDEVICE} from '../Action/ActionListAllDevice';

const myState = {
    ListAllDevice:[],
};
export default function ListAllDevice(state = myState, action){
    switch (action.type){
        case ADD_LISTALLDEVICE:
            return {
                ListAllDevice: [...state.ListAllDevice,...action.ListAllDevice]
            };
        case EDIT_NAMEDEVICE:
            let term = {
                ...state.ListAllDevice,
            };
            term= term.map(device => {
                if (device.id === action.id) {
                    device = {...device, deviceName: action.newDeviceName};
                }
                return device;
            });
        default : return state
    }
}
