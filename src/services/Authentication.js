
import axios from '../config/axios';

export default {
  login: async (email, password) => {
    await axios.post('auth?', { email, password }).then(resp => {
      const token = resp.data.data.me.token;
      localStorage.setItem('token', token);

      if (token)
        return { 'Authorization': 'Bearer ' + token };
      else {
        return { 'invalid': false };
      }
    }).catch(err => {
      console.log(err);
    })
  }
}






