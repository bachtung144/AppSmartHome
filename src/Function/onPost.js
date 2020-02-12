import {Global} from './Global';
import {_retrieveData} from './_retrieveData';

export default async function onPost() {
  var data = {};
  data.token = await _retrieveData();
  return new Promise(async (resolve, reject) => {
    fetch(`http://192.168.99.199:1123/userinfo?token=${data.token}`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(json => {
        Global.userinfor.phone = json.data.phone;
        Global.userinfor.callingCode = json.data.callingCode;
        resolve(true);
      })
      .catch(error => {
        reject(error);
      });
  });
}
