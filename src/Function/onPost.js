import {Global} from './Global';
import {_retrieveData} from './_retrieveData';
import { connect } from 'react-redux'
import {AddCallingCode, AddPhone} from '../Redux/Action/ActionUserInfor';
import {Store as store} from 'redux';
import warning from 'react-redux/lib/utils/warning';


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
        //   store.dispatch(AddPhone(json.data.phone))
          // store.dispatch(AddCallingCode(json.data.callingCode))
          // this.props.AddPhone1(json.data.phone)

        resolve(true);
      })
      .catch(error => {
        reject(error);
      });
  });
}
// const mapDispatchToProps = dispatch => ({
//     AddPhone1: phone => dispatch(AddPhone(phone))
// })
// const mapStateToProps = state => ({
//     AddPhone1: state.phoneNumber
// })
//
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(onPost)
