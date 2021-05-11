import { Box, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useStyles } from './styles';
import logo from '../../../assets/logo.png';
import Relevant from '../../../components/Relevant';
import { useDispatch, useSelector } from 'react-redux';
import {
  CLEAN_UP_DETAIL_POST,
  GET_DETAIL_REQUESTED_SAGA,
} from './modules/redux/constants';
import { useHistory } from 'react-router-dom';
import parse from 'html-react-parser';
import PageNotFound from '../../../common/PageNotFound';

const Detail = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();
  const post = useSelector((state) => state.PostDetailReducer.postDetail);
  console.log(post);

  useEffect(() => {
    let slug = history.location.pathname;
    dispatch({
      type: GET_DETAIL_REQUESTED_SAGA,
      // Bỏ dấu / ở đằng trước nên slice ra
      payload: slug.slice(1),
    });
    return () => {
      dispatch({
        type: CLEAN_UP_DETAIL_POST,
      });
    };
  }, []);
  {
    if (post !== null) {
      return (
        <div className={classes.bgColor}>
          <div className={classes.container}>
            <Box className={classes.titleContainer}>
              <Typography className={classes.title}>{post?.title}</Typography>
            </Box>
            <Box className={classes.authorContainer}>
              <Box className={classes.boxAvatars}>
                <Box className={classes.containerAvatars}>
                  <img src={logo} className={classes.imgAuthor} />
                </Box>
              </Box>
              <Box className={classes.boxName}>
                <Typography className={classes.nameAuthor}>
                  {post.name}
                </Typography>
                <Typography className={classes.date}>May 10, 2021</Typography>
              </Box>
            </Box>
            <Box className={classes.contentContainer}>
              <Typography className={classes.contents}>
                {post?.text ? parse(post?.text) : null}
              </Typography>
            </Box>
          </div>
          <Relevant />
        </div>
      );
    } else {
      return (
        <>
          <PageNotFound />
          <Relevant />
        </>
      );
    }
  }
};

export default Detail;