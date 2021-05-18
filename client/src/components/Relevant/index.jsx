import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Relevant = () => {
  const classes = useStyles();
  const postRelevant = useSelector((state) => state.PostsReducer.posts);

  const handleRenderPostRelevant = () => {
    if (postRelevant && postRelevant.length > 0) {
      // Lấy số ngẫu nhiên trong khoảng giữa 0 + 2 <= x <= length - 2:
      let randomNumber =
        Math.floor(Math.random() * (postRelevant.length - 3 - 2 + 1)) + 2;
      // Slice ra để render
      let arrPostRandom = [...postRelevant].slice(
        randomNumber,
        randomNumber + 3
      );
      return arrPostRandom.map((post, index) => {
        return (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Link to={`/${post.slug}`} className={classes.link}>
              <Box className={classes.wrapperContentAll}>
                <Grid container spacing={0}>
                  <Grid item xs={12}>
                    <Box className={classes.imgFirstContent}>
                      <img
                        src={`https://res.cloudinary.com/cloudassetbuffet/image/upload/${post.thumbnail}`}
                        width="100%"
                        height="215px"
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
    <div className={classes.bgColor}>
      <div className={classes.container}>
        <Box className={classes.relevantTitleContainer}>
          <Typography className={classes.relevantTitle}>
            Có thể bạn bạn đang tìm
          </Typography>
        </Box>
        <Box>
          <div className={classes.root}>
            <Grid container spacing={0}>
              {handleRenderPostRelevant()}
            </Grid>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default React.memo(Relevant);
