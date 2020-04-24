import io from 'socket.io-client';
import {AddListRoom} from '../Redux/ListRoom/ActionListRoom';
import {store} from '../Redux/Store';
import {AddListDeviceRoom} from '../Redux/ListDeviceRoom/ActionListDeviceRoom';
import {AddListAllDevice} from '../Redux/ListAllDevice/ActionListAllDevice';
import NavigationService from '../Function/NavigationService';
import {
  SetTrueAdd,
  SetTrueDelete,
  SetTrueEdit,
} from '../Redux/Status/ActionStatus';
import {AddActions, AddId} from '../Redux/NewDevice/ActionNewDevice';
import {AddListAction} from '../Redux/ListAction/ActionListAction';
//https://thuctapgratiot.herokuapp.com/
//http://192.168.86.40:1123/
const domain_socket = 'https://thuctapgratiot.herokuapp.com/'; // define domain socketio
let _socket = false;

async function connectSocket() {
  return new Promise(async (resolve, reject) => {
    if (_socket) {
      resolve(true);
      return true;
    }
    _socket = io(domain_socket, {reconnection: false});
    _socket.on('connect', () => {
      console.log('connected');
      onEvent();
      resolve(true);
    });
    _socket.on('connect_error', () => {
      console.log('connect error');
      if (_socket) {
        _socket.off();
        _socket = false;
      }
      reject(false);
    });
  });
}

function disconnect() {
  if (!_socket) {
    return false;
  }
  _socket.off();
  _socket.disconnect();
  _socket = false;
  return true;
}

function emit(eventMess, data: {}) {
  if (!_socket) {
    return false;
  }
  _socket.emit(eventMess, data);
  return true;
}

function onEvent() {
  if (!_socket) {
    return false;
  }

  _socket.on('disconnect', () => {
    console.log('disconnect');
    _socket = false;
  });

  _socket.on('listRoom', response => {
    JSON.parse(response).data.forEach(item =>
      emit('deviceRoom', JSON.stringify({roomId: item.id})),
    );
    store.dispatch(AddListRoom(JSON.parse(response).data));
    NavigationService.navigate('UserInforScreen');
  });

  _socket.on('deviceRoom', response => {
    let term = JSON.parse(response);
    store.dispatch(AddListDeviceRoom(term.data, term.roomId));
  });

  _socket.on('listDevice', response => {
    store.dispatch(AddListAllDevice(JSON.parse(response).data));
  });

  _socket.on('editDevice', response => {
    if (JSON.parse(response).message === 'success') {
      store.dispatch(SetTrueEdit());
    }
  });

  _socket.on('delDevice', response => {
    if (JSON.parse(response).status === 'success') {
      store.dispatch(SetTrueDelete());
    }
  });

  _socket.on('addDevice', response => {
    if (JSON.parse(response).status === 'success') {
      store.dispatch(AddId(JSON.parse(response).data.id));
      store.dispatch(AddActions(JSON.parse(response).data.actions));
      store.dispatch(SetTrueAdd());
    }
  });

  _socket.on('listAction', response => {
     store.dispatch(AddListAction(JSON.parse(response).data))
  });

  return true;
}

export {connectSocket, disconnect, emit};
