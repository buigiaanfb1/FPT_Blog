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

export function putLikeService({ putSlug }) {
  return axios({
    url: `/api/posts/like/${putSlug}`,
    method: 'PUT',
  });
}

export function putUnlikeService({ putSlug }) {
  return axios({
    url: `/api/posts/unlike/${putSlug}`,
    method: 'PUT',
  });
}
