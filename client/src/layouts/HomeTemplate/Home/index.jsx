import { Box, Button, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useStyles } from './styles';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import { motion } from 'framer-motion';
import { pageAnimation } from '../../../common/animation';
import { useMediaQuery } from 'react-responsive';

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
  const posts = useSelector((state) => state.PostsReducer.posts);
  const [limit, setLimit] = useState(7);

  useEffect(() => {
    document.title = 'Chia sẻ IT Dev Việt Nam';
  }, []);

  const handleRenderFirstPost = () => {
    if (posts && posts.length > 0) {
      for (let i = 0; i < posts.length; i++) {
        if (i === 0) {
          return (
            <Link to={`/${posts[i].slug}`} className={classes.link}>
              <Box className={classes.wrapperFirstContent}>
                <Grid container spacing={0}>
                  <Grid item md={7} xs={12}>
                    <Box className={classes.imgFirstContent}>
                      <img
                        src={`https://res.cloudinary.com/cloudassetbuffet/image/upload/${posts[i].thumbnail}`}
                        quality="auto"
                        width="100%"
                        height="360px"
                      />
                    </Box>
                  </Grid>
                  <Grid item md={5} xs={12}>
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
                      <Box className={classes.reaction}>
                        <Box className={classes.reactionItem}>
                          <FontAwesomeIcon icon={faHeart} />
                          <Typography className={classes.analyzeReaction}>
                            {posts[i].like}
                          </Typography>
                        </Box>
                        <Box className={classes.reactionItem}>
                          <FontAwesomeIcon icon={faComment} />
                          <Typography className={classes.analyzeReaction}>
                            {posts[i].comments.length}
                          </Typography>
                        </Box>
                      </Box>
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
            <Grid item md={4} sm={6} xs={12} spacing={0}>
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
                        {!isMobile ? (
                          <Typography className={classes.description}>
                            {post.summary.length > 150
                              ? post.summary.slice(0, 127) + '...'
                              : post.summary}
                          </Typography>
                        ) : (
                          ''
                        )}
                        <Box className={classes.reactionAllPost}>
                          <Box className={classes.reactionItem}>
                            <FontAwesomeIcon icon={faHeart} />
                            <Typography className={classes.analyzeReaction}>
                              {post.like}
                            </Typography>
                          </Box>
                          <Box className={classes.reactionItem}>
                            <FontAwesomeIcon icon={faComment} />
                            <Typography className={classes.analyzeReaction}>
                              {post.comments.length}
                            </Typography>
                          </Box>
                        </Box>
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

  const handleRenderForPhone = () => {
    if (posts && posts.length > 0) {
      return posts.slice(0, limit).map((post, index) => {
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
                      {!isMobile ? (
                        <Typography className={classes.description}>
                          {post.summary.length > 150
                            ? post.summary.slice(0, 127) + '...'
                            : post.summary}
                        </Typography>
                      ) : (
                        ''
                      )}
                      <Box className={classes.reactionAllPost}>
                        <Box className={classes.reactionItem}>
                          <FontAwesomeIcon icon={faHeart} />
                          <Typography className={classes.analyzeReaction}>
                            {post.like}
                          </Typography>
                        </Box>
                        <Box className={classes.reactionItem}>
                          <FontAwesomeIcon icon={faComment} />
                          <Typography className={classes.analyzeReaction}>
                            {post.comments.length}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Link>
          </Grid>
        );
      });
    }
  };

  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Box className={classes.container}>
        <div className={classes.root}>
          <Grid container spacing={0}>
            {!isMobile ? (
              <>
                {handleRenderFirstPost()}
                {handleRenderAllPosts()}
              </>
            ) : (
              handleRenderForPhone()
            )}
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
    </motion.div>
  );
};

export default Home;
