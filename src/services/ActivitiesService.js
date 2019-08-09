
import axios from '../config/axios';
const qs = require('qs');

export default {

  get: () => {
    return axios.get('activities');
  },

  delete: (activity_id) => {
    return axios.delete('activities', qs.stringify({ 'activity_id': activity_id }));
  },

  create: (activity) => {
    var act = JSON.stringify(activity);
    return axios.post('activities', act).then(response => {
      console.log(response)
    });
  }
}