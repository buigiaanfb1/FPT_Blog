import axios from 'axios';

export function getDetailService(slug) {
  return axios({
    url: `/api/posts/${slug}`,
    method: 'GET',
  });
}
