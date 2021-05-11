import axios from 'axios';

export function getDetailService(slug) {
  console.log(slug);
  return axios({
    url: `/api/posts/${slug}`,
    method: 'GET',
  });
}
