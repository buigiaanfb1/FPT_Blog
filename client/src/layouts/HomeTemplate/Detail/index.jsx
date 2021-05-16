import { Box, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useStyles } from './styles';
import logo from '../../../assets/logo.png';
import Relevant from '../../../components/Relevant';
import { useDispatch, useSelector } from 'react-redux';
import {
  CLEAN_UP_DETAIL_POST,
  GET_DETAIL_REQUESTED_SAGA,
  POST_NEW_COMMENT_REQUESTED_SAGA,
} from './modules/redux/constants';
import { useHistory } from 'react-router-dom';
import parse from 'html-react-parser';
import PageNotFound from '../../../common/PageNotFound';
import Prism from 'prismjs';
import Comments from '../../../components/Comments';
import Grid from '@material-ui/core/Grid';
import PostAction from './PostAction';
import { motion } from 'framer-motion';
import { pageAnimation } from '../../../common/animation';
import { useMediaQuery } from 'react-responsive';

const Detail = () => {
  const history = useHistory();
  const isMobile = useMediaQuery({ query: '(max-width: 1100px)' });
  const dispatch = useDispatch();
  const classes = useStyles();
  let slug = history.location.pathname;
  const post = useSelector((state) => state.PostDetailReducer.postDetail);
  const errors = useSelector((state) => state.PostDetailReducer.errors);
  const newComment = useSelector(
    (state) => state.PostDetailReducer.newComments
  );

  useEffect(() => {
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

  useEffect(() => {
    Prism.highlightAll();
    if (post !== null) {
      document.title = post.title;
    }
  }, [post]);

  useEffect(() => {
    if (newComment !== null) {
      let slugFake = history.location.pathname;
      let slug = slugFake.slice(1);
      dispatch({
        type: POST_NEW_COMMENT_REQUESTED_SAGA,
        payload: { newComment, slug },
      });
    }
  }, [newComment]);

  const handleRenderDate = (dateLocale) => {
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    const date = new Date(dateLocale).toLocaleDateString('en-GB');
    const time = new Date(dateLocale).toLocaleTimeString('en-US', options);
    return (
      <Typography className={classes.date}>
        Published {date} {'-'} {time}
      </Typography>
    );
  };

  if (errors) {
    return <PageNotFound />;
  }
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className={classes.bgColor}>
        <div className={classes.container}>
          <div className={classes.root}>
            <Grid container spacing={0}>
              {!isMobile ? (
                <Grid item xs={1}>
                  <PostAction slug={slug} logo={logo} />
                </Grid>
              ) : (
                ''
              )}
              <Grid item xs={!isMobile ? 10 : 12}>
                <Box className={classes.titleContainer}>
                  <Typography
                    className={classes.title}
                    style={{
                      fontSize: `${!isMobile ? '80px' : '40px'}`,
                      lineHeight: `${!isMobile ? '80px' : '40px'}`,
                    }}
                  >
                    {post?.title}
                  </Typography>
                </Box>
                <Box className={classes.authorContainer}>
                  <Box className={classes.boxName}>
                    <Typography className={classes.date}>
                      {handleRenderDate(post?.date)}
                    </Typography>
                  </Box>
                </Box>
                <Box className={classes.contentContainer}>
                  <Typography className={classes.contents}>
                    {post?.text ? parse(post?.text) : null}
                  </Typography>
                </Box>
                <div className={classes.hr}></div>
              </Grid>
              {!isMobile ? <Grid item xs={1}></Grid> : ''}
            </Grid>
          </div>
        </div>
        <Comments comments={post?.comments} />
        <Relevant />
      </div>
    </motion.div>
  );
};

export default Detail;
