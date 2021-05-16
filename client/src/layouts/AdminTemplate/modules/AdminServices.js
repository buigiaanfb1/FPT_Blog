import axios from 'axios';
export function postLoginServices(data) {
  return axios({
    url: '/api/admin/login',
    method: 'POST',
    data,
  });
}
