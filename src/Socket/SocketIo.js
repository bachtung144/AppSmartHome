import io from 'socket.io-client';
// window.navigator.userAgent = 'react-native';
import { AsyncStorage } from 'react-native';

export const Connect = () =>{
    io('http://192.168.99.199:1123');
};

export async function SocketEmit(eventMess,data:{}) {
    let connect = await Connect();
    await connect.emit(eventMess,data)
}

export const SocketOn = async (eventMess) => {
    let connect = await Connect();
    await connect.on(eventMess,(response) => {
        return JSON.parse(response).data
    })
};

// export default class Action {
//     static fetchListRoom = (data : {}) => {
//         try {
//             return new Promise(
//                 async (resolve, reject) => {
//                     let connect = await connect();
//                     await connect.emit('listRoom', data);
//                     await connect.on('listRoom', (response) => {
//
//                         if (response) {
//                             return resolve(JSON.parse(response));
//                         } else {
//                             return reject();
//                         }
//                     })
//                 }
//             )
//         } catch (e) {
//             console.log(e.message);
//         }
//     }}
