import io from 'socket.io-client';

// export default function emit (value) {
//     const socket = io('http://192.168.99.199:1123');
//     socket.emit('listDevice',value );
// }
export const emit = (value) =>{
    const socket = io('http://192.168.99.199:1123');
    socket.emit('listDevice',value );
}
