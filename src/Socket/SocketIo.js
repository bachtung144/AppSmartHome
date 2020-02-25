import io from 'socket.io-client';
// window.navigator.userAgent = 'react-native';
import { AsyncStorage } from 'react-native';

class Socket {
    Connect (){
        return io('http://192.168.99.199:1123')
    }

    async SocketEmit (eventMess,data:{}){
        let connect = await this.Connect()
        await connect.emit(eventMess,JSON.stringify(data))
    }

    async SockenOn (eventMess){
        let connect = await this.Connect();
        await connect.on(eventMess,(response) => {
            return  JSON.parse(response).data
        });
    }

     fetchListDevice = async (data:{}) =>{
        try{
            return new Promise(
                async (resolve,reject) => {
                    let connect = this.Connect()
                    await connect.emit('listDevice',JSON.stringify(data))
                    await connect.on('listDevice',async (response) => {
                        resolve(JSON.parse(response).data)
                    })
                    reject(null)
                }
            )
        }catch (e) {
            console.warn(e.message())
        }
     }
}

const socket = new Socket();
export default socket


