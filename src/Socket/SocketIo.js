import io from 'socket.io-client';

class Socket {
    constructor(props) {
        // alert("12345");
        // this.socket = io('http://192.168.99.114:1125');
        this.socket = io('http://192.168.99.199:1123');
    }

    async SocketEmit(eventMess, data: {}) {
        this.socket.emit(eventMess, data);
    }

    async SocketOn(eventMess, callback) {
        this.socket.on(eventMess, callback);
    }

    // checkConnect(){
    //   var socket = io.connect();
    //   console.warn('check 1', socket.connected);
    //   socket.on('connect', function() {
    //     console.warn('check 2', socket.connected);
    //   });
    // }
}

const socket = new Socket();
export default socket;
