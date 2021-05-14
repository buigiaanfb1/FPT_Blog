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
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import PostAction from './PostAction';
const Detail = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();
  const [isHeart, setIsHeart] = useState(false);
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
  }, [post]);

  useEffect(() => {
    handleCheckHeart();
  }, []);

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

  const handleCheckHeart = () => {
    if (localStorage.getItem('LIKE')) {
      const { path, like } = JSON.parse(localStorage.getItem('LIKE'));
      console.log(path, like);
      if (path === slug && like == true) {
        setIsHeart(true);
        return (
          <Box className={`${classes.iconContainerHeart} container-heart`}>
            <FavoriteBorderIcon className={classes.iconHeart} />
          </Box>
        );
      }
    }
  };

  const handleClickHeart = () => {
    if (isHeart === true) {
      localStorage.removeItem('LIKE');
      setIsHeart(false);
    } else {
      let save = {
        path: slug,
        like: true,
      };
      localStorage.setItem('LIKE', JSON.stringify(save));
      setIsHeart(true);
    }
  };

  if (errors) {
    return <PageNotFound />;
  }
  return (
    <div className={classes.bgColor}>
      <div className={classes.container}>
        <div className={classes.root}>
          <Grid container spacing={0}>
            <Grid item xs={1}>
              <PostAction slug={slug} logo={logo} />
            </Grid>
            <Grid item xs={10}>
              <Box className={classes.titleContainer}>
                <Typography className={classes.title}>{post?.title}</Typography>
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
            <Grid item xs={1}></Grid>
          </Grid>
        </div>
      </div>
      <Comments comments={post?.comments} />
      <Relevant />
    </div>
  );
};

export default Detail;
