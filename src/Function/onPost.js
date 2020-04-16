import {_retrieveData} from './_retrieveData';
import {connect} from 'react-redux';
import {AddPhone} from '../Redux/UserInfor/ActionUserInfor';

async function onPost() {
  var data = {};
  data.token = await _retrieveData();
  return new Promise(async (resolve, reject) => {
    fetch(`http://192.168.99.199:1123/userinfo?token=${data.token}`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(json => {
        this.props.AddPhone(json.data.phone);
        resolve(true);
      })
      .catch(error => {
        reject(error);
      });
  });
}
const mapStateToProps = state => ({
  Phone: state.phoneNumber,
});

const mapDispatchToProps = dispatch => ({
  AddPhone: phone => dispatch(AddPhone(phone)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(onPost);
