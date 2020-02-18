import io from 'socket.io-client';
import {Component} from 'react';

export default class ConnectSocket extends Component{
    constructor(props) {
        super(props)
        this.state ={
            listRoom:[]
        }
        this.socket = io('http://192.168.99.199:1123');
    }

    async GetData(){
        return new Promise((resolve,reject) => {
            this.socket.emit('listRoom')
            this.socket.on('listRoom',response =>
                this.setState({listRoom:JSON.parse(response).data}),
            )
            resolve(this.state.listRoom)
        } )
    }
}
