import {ADD_LISTDEVICE, EDIT_NAMEDEVICE} from '../Action/ActionListDevice';

const myState = {
  ListDevice1: {},
};
// function checkId(item,id) {
//     if(item.id === id) {
//         item.deviceName = action.newDevice.deviceName
//         ; return  item}
//     return item
// }
export default function ListDevice(state = myState, action) {
  switch (action.type) {
    case ADD_LISTDEVICE:
      let rs = {
        ...state.ListDevice1,
      };
      rs[action.roomId] = action.ListDevice;
      return {
        ListDevice1: rs,
      };
    case EDIT_NAMEDEVICE:
      let rs1 = {
        ...state.ListDevice1,
      };

      // let index = rs1[action.roomId].findIndex(function(ele) {
      //   return ele.id === action.id;
      // });
      //
      // rs1[action.roomId][index].deviceName = action.newDeviceName;

       // rs1[action.roomId].map((device) => {if(device.id === action.id) {
       //   device = {...device,}
       //  }})
       rs1[action.roomId] = rs1[action.roomId].map(device => {
        if (device.id === action.id) {
          device = { ...device, deviceName: action.newDeviceName };
        }
        return device;
      });

      return {
        ListDevice1: {...rs1},
      };

    default:
      return state;
  }
}

// let term = state.filter(function checkId(item, id) {
//   if (item.id === id) {
//     item.deviceName = action.newDevice.deviceName;
//     return item;
//   }
//   return item;
// });
// return {
//   term,
// };
