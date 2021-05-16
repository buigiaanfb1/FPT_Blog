// Chú ý tất cả những comment khi bấm nút đăng sẽ không được
// call api lên database mà là sẽ push vào mảng giả render ra
// (nên sẽ có chữ ! Đang đợi xét duyệt)
// làm vậy để trang đỡ tốn tài nguyên chống lag, smooth cho người dùng
// Sau khi client thoát khỏi trang detail thì mới call api
// trong im lặng

import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useStyles } from './styles';
import avatar from './../../assets/logo.png';
import ErrorIcon from '@material-ui/icons/Error';
import { useDispatch } from 'react-redux';
import { PUSH_CODE_TO_REDUCER } from '../../layouts/HomeTemplate/Detail/modules/redux/constants';
import defaultAvatar from './../../assets/avatar-none.png';

const Comments = ({ comments }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    text: '',
    name: '',
    email: '',
    new: true,
    date: new Date().toISOString(),
  });

  const handleChangeData = (e) => {
    const { name, value } = e.target;
    // data[name] = value;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    comments.push(data);
    //Render lại comments
    handleRenderOtherUsersComment();
    // Push lên name, email, text còn nhiêu bỏ hết :v
    const { name, email, text } = data;
    let newComment = {
      name,
      email,
      text,
    };
    dispatch({
      type: PUSH_CODE_TO_REDUCER,
      payload: newComment,
    });
    // Reset lại state
    setData({
      text: '',
      name: '',
      email: '',
      new: true,
      date: new Date().toISOString(),
    });
  };

  const handleRenderTime = (dateLocale) => {
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    const date = new Date(dateLocale).toLocaleDateString('en-GB');
    const time = new Date(dateLocale).toLocaleTimeString('en-US', options);
    return (
      <Typography className={classes.date}>
        {date} {'-'} {time}
      </Typography>
    );
  };

  const handleRenderOtherUsersComment = () => {
    return comments
      ?.slice(0)
      .reverse()
      .map((comment) => {
        return (
          <Box className={classes.otherUsersComment}>
            <div className={classes.root}>
              <Grid container spacing={0}>
                <Grid item sm={1} xs={2}>
                  <img
                    src={comment.avatar ? comment.avatar : defaultAvatar}
                    className={'avatarUserComment'}
                    width="50px"
                    height="50px"
                  />
                </Grid>
                <Grid item sm={11} xs={10}>
                  <Box className={classes.otherUsersWrapper}>
                    <Box className={classes.pending}>
                      <Typography
                        className={`${classes.username} nameUserComment`}
                      >
                        {comment.name}
                      </Typography>
                      {comment.new == true ? (
                        <Box className={classes.wrapperPending}>
                          <ErrorIcon className={classes.iconNewComment} />
                          <Typography className={classes.newComment}>
                            Đang chờ xét duyệt
                          </Typography>
                        </Box>
                      ) : (
                        ''
                      )}
                    </Box>
                    <Typography className={classes.date}>
                      {handleRenderTime(comment.date)}
                    </Typography>
                  </Box>
                  <Typography className={classes.content}>
                    {comment.text}
                  </Typography>
                </Grid>
              </Grid>
            </div>
          </Box>
        );
      });
  };

  return (
    <div className={classes.container}>
      <Typography className={classes.titleDiscussion}>Comments</Typography>
      <Box className={classes.userComment}>
        <div className={classes.root}>
          <Grid container spacing={0}>
            <Grid item sm={1} xs={2}>
              <Box className={classes.boxMeAvatar}>
                <Box className={classes.containerAvatars}>
                  <img
                    src={defaultAvatar}
                    className={classes.avatarMeUser}
                    width="48px"
                    height="48px"
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item sm={11} xs={10}>
              <Box style={{ padding: '0 0.5rem' }}>
                <form onSubmit={(e) => handleSubmit(e)}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <TextField
                        className={classes}
                        id="outlined-basic"
                        name="text"
                        variant="outlined"
                        required
                        placeholder="Hãy để lại bình luận nào!"
                        value={data.text}
                        onClick={() => {
                          setOpen(true);
                        }}
                        onChange={(e) => {
                          handleChangeData(e);
                        }}
                        fullWidth
                        multiline
                        rows={open ? 4 : 3}
                      />
                    </Grid>
                    {open ? (
                      <>
                        <Grid item sm={6} xs={8}>
                          <TextField
                            id="outlined-basic"
                            name="name"
                            placeholder="Tên của bạn"
                            variant="outlined"
                            value={data.name}
                            size="small"
                            required
                            fullWidth
                            onChange={(e) => {
                              handleChangeData(e);
                            }}
                          />
                        </Grid>
                        <Grid item sm={6} xs={4}>
                          <Box className={classes.buttonContainer}>
                            <Button
                              variant="contained"
                              color="primary"
                              className={classes.button}
                              type="submit"
                            >
                              Đăng!
                            </Button>
                          </Box>
                        </Grid>
                        <Grid item sm={6} xs={8}>
                          <TextField
                            id="outlined-basic"
                            name="email"
                            placeholder="Email của bạn"
                            variant="outlined"
                            value={data.email}
                            size="small"
                            required
                            fullWidth
                            onChange={(e) => {
                              handleChangeData(e);
                            }}
                          />
                        </Grid>
                      </>
                    ) : (
                      ''
                    )}
                  </Grid>
                </form>
              </Box>{' '}
            </Grid>
          </Grid>
        </div>
      </Box>
      {handleRenderOtherUsersComment()}
    </div>
  );
};

export default Comments;
