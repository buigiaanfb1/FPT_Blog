import axios from 'axios';

export function getDetailService(slug) {
  return axios({
    url: `/api/posts/${slug}`,
    method: 'GET',
  });
}

export function postCommentService({ newComment, slug }) {
  return axios({
    url: `/api/posts/comments/${slug}`,
    method: 'POST',
    data: newComment,
  });
}
