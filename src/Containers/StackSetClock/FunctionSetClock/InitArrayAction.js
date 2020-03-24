// export default function InitArrayAction(deviceModel) {
//   if (deviceModel === 'hp_2') {
//     return [{id: 1, ActionName: 'Bật-Tắt'}, {id: 2, ActionName: 'Đổi màu'}];
//   }
//   if (deviceModel === 'hp_3') {
//     return [{id: 1, ActionName: 'Đổi màu'}, {id: 2, ActionName: 'Nhạc chuông'}];
//   }
//   if (deviceModel === 'hp_4') {
//     return [
//       {id: 1, ActionName: 'Bật-Tắt'},
//       {id: 2, ActionName: 'Đổi màu'},
//       {id: 3, ActionName: 'Nhạc chuông'},
//     ];
//   }
// }

export default function InitArrayAction(arr1,arr2) {
  let newArr = [];
  arr2.forEach(ele2 => {arr1.forEach(ele1 => {
    if(ele1.command === ele2.command){
      newArr.push(ele2)
    }
  })});
  return newArr;
}
