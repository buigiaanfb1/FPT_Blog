import axios from 'axios';

export function getAllPostsService() {
  return axios({
    url: `/api/posts`,
    method: 'GET',
  });
}
