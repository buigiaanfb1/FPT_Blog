import { Box, Button, Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useStyles } from './styles';
import { Link } from 'react-router-dom';
import { Image } from 'cloudinary-react';

import parse from 'html-react-parser';

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.PostsReducer.posts);
  const [limit, setLimit] = useState(7);

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
                      <img
                        src={`https://res.cloudinary.com/cloudassetbuffet/image/upload/${posts[i].thumbnail}`}
                        quality="auto"
                        width="100%"
                        height="360px"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={5}>
                    <Box className={classes.wrapperContent}>
                      <Typography className={classes.date}>
                        {new Date(posts[i]?.date).toLocaleDateString('en-GB')}
                      </Typography>
                      <Typography className={classes.titleFirstContent}>
                        {posts[i].title}
                      </Typography>
                      <Typography className={classes.description}>
                        {posts[i].summary}
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
      return posts.slice(0, limit).map((post, index) => {
        if (index > 0) {
          return (
            <Grid container item md={4} xs={12} spacing={0}>
              <Link to={`/${post.slug}`} className={classes.link}>
                <Box className={classes.wrapperContentAll}>
                  <Grid container spacing={0}>
                    <Grid item xs={12}>
                      <Box className={classes.imgFirstContent}>
                        <img
                          src={`https://res.cloudinary.com/cloudassetbuffet/image/upload/${post.thumbnail}`}
                          width="100%"
                          height="190px"
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box className={classes.wrapperContentText}>
                        <Typography className={classes.date}>
                          {new Date(post.date).toLocaleDateString('en-GB')}
                        </Typography>
                        <Typography className={classes.titleContent}>
                          {post.title}
                        </Typography>
                        <Typography className={classes.description}>
                          {post.summary.length > 150
                            ? post.summary.slice(0, 127) + '...'
                            : post.summary}
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
            onClick={() => setLimit(limit + 6)}
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
