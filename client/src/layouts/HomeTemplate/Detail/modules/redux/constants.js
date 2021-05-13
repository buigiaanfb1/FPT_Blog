// Call 1 phát lên reducer luôn
export const PUSH_CODE_TO_REDUCER = 'push_code_to_reducer/PUSH_CODE_TO_REDUCER';

// Component gọi lên Redux-saga
export const GET_DETAIL_REQUESTED_SAGA =
  'get_detail_requested_saga/GET_DETAIL_REQUESTED_SAGA';

export const POST_NEW_COMMENT_REQUESTED_SAGA =
  'post_new_comment_requested_saga/POST_NEW_COMMENT_REQUESTED_SAGA';

// Saga call lên store
export const GET_DETAIL_REQUESTED = 'get_detail_requested/GET_DETAIL_REQUESTED';
export const GET_DETAIL_SUCCEED = 'get_detail_succeed/GET_DETAIL_SUCCEED';
export const GET_DETAIL_FAILED = 'get_detail_failed/GET_DETAIL_FAILED';

// Clear dự liệu reducer khi thoát trang call thẳng lên reducer
export const CLEAN_UP_DETAIL_POST = 'clean_up_detail_post/CLEAN_UP_DETAIL_POST';
export const CLEAN_UP_COMMENTS = 'clean_up_comments/CLEAN_UP_COMMENTS';
