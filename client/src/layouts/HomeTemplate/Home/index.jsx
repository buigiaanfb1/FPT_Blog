import { Box, Button, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useStyles } from './styles';
import content1 from '../../../assets/content1.jpeg';
import content2 from '../../../assets/content2.jpeg';
import content3 from '../../../assets/content3.jpeg';
import content4 from '../../../assets/content4.jpeg';
import content5 from '../../../assets/content5.jpeg';
import content6 from '../../../assets/content6.jpeg';
import axios from 'axios';
import { GET_ALL_POSTS_REQUESTED_SAGA } from './modules/redux/constants';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.PostsReducer.posts);
  const [limit, setLimit] = useState(7);
  console.log(limit);

  useEffect(() => {
    handleFetchPosts();
  }, []);

  const handleFetchPosts = () => {
    dispatch({
      type: GET_ALL_POSTS_REQUESTED_SAGA,
    });
  };

  const handleRenderFirstPost = () => {
    if (posts && posts.length > 0) {
      for (let i = 0; i < posts.length; i++) {
        if (i === 0) {
          return (
            <Link to={`/${posts[i].slug}`} className={classes.link}>
              <Box className={classes.wrapperFirstContent}>
                <Grid container spacing={5}>
                  <Grid item xs={7}>
                    <Box className={classes.imgFirstContent}>
                      <img src={parse(posts[i].thumbnail)} width="100%" />
                    </Box>
                  </Grid>
                  <Grid item xs={5}>
                    <Box className={classes.wrapperContent}>
                      <Typography className={classes.date}>
                        April 13, 2021
                      </Typography>
                      <Typography className={classes.titleFirstContent}>
                        {posts[i].title}
                      </Typography>
                      <Typography className={classes.description}>
                        {posts[i].summary + '...'}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Link>
          );
        }
      }
    }
  };

  const handleRenderAllPosts = () => {
    if (posts && posts.length > 0) {
      return posts.map((post, index) => {
        if (index > 0) {
          return (
            <Grid container item xs={4} spacing={0}>
              <Link to={`/${post.slug}`} className={classes.link}>
                <Box className={classes.wrapperContentAll}>
                  <Grid container spacing={0}>
                    <Grid item xs={12}>
                      <Box className={classes.imgFirstContent}>
                        <img
                          src={parse(post.thumbnail)}
                          width="100%"
                          height="190px"
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box className={classes.wrapperContentText}>
                        <Typography className={classes.date}>
                          April 13, 2021
                        </Typography>
                        <Typography className={classes.titleContent}>
                          {post.title}
                        </Typography>
                        <Typography className={classes.description}>
                          {post.summary + '...'}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Link>
            </Grid>
          );
        }
      });
    }
  };

  return (
    <Box className={classes.container}>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid container item xs={12} spacing={0}>
            {handleRenderFirstPost()}
          </Grid>
          {handleRenderAllPosts()}
        </Grid>
      </div>
      <Box className={classes.btnContainer}>
        {limit < posts.length ? (
          <Button
            variant="contained"
            color="secondary"
            className={classes.xemThemBtn}
            onClick={() => setLimit(limit + 7)}
          >
            Xem thêm
          </Button>
        ) : (
          ''
        )}
      </Box>
    </Box>
  );
};

export default Home;
