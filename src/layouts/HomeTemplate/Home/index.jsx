import { Box, Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';
import content1 from '../../../assets/content1.jpeg';
import content2 from '../../../assets/content2.jpeg';
import content3 from '../../../assets/content3.jpeg';
import content4 from '../../../assets/content4.jpeg';
import content5 from '../../../assets/content5.jpeg';
import content6 from '../../../assets/content6.jpeg';

const Home = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid container item xs={12} spacing={0}>
            <Box className={classes.wrapperFirstContent}>
              <Grid container spacing={5}>
                <Grid item xs={7}>
                  <Box className={classes.imgFirstContent}>
                    <img src={content1} width="100%" />
                  </Box>
                </Grid>
                <Grid item xs={5}>
                  <Box className={classes.wrapperContent}>
                    <Typography className={classes.date}>
                      April 13, 2021
                    </Typography>
                    <Typography className={classes.titleFirstContent}>
                      Làm thế nào để trở thành một con cá
                    </Typography>
                    <Typography className={classes.description}>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Fuga cumque iure, nesciunt rem sequi corrupti harum
                      obcaecati tempore voluptate dicta!
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid container item xs={4} spacing={0}>
            <Box className={classes.wrapperContentAll}>
              <Grid container spacing={0}>
                <Grid item xs={12}>
                  <Box className={classes.imgFirstContent}>
                    <img src={content2} width="100%" />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box className={classes.wrapperContentText}>
                    <Typography className={classes.date}>
                      April 13, 2021
                    </Typography>
                    <Typography className={classes.titleContent}>
                      Làm thế nào để trở thành một con cá
                    </Typography>
                    <Typography className={classes.description}>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Fuga cumque iure, nesciunt rem sequi corrupti harum
                      obcaecati tempore voluptate dicta!
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid container item xs={4} spacing={0}>
            <Box className={classes.wrapperContentAll}>
              <Grid container spacing={0}>
                <Grid item xs={12}>
                  <Box className={classes.imgFirstContent}>
                    <img src={content3} width="100%" />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box className={classes.wrapperContentText}>
                    <Typography className={classes.date}>
                      April 13, 2021
                    </Typography>
                    <Typography className={classes.titleContent}>
                      Làm thế nào để trở thành một con cá
                    </Typography>
                    <Typography className={classes.description}>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Fuga cumque iure, nesciunt rem sequi corrupti harum
                      obcaecati tempore voluptate dicta!
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid container item xs={4} spacing={0}>
            <Box className={classes.wrapperContentAll}>
              <Grid container spacing={0}>
                <Grid item xs={12}>
                  <Box className={classes.imgFirstContent}>
                    <img src={content4} width="100%" />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box className={classes.wrapperContentText}>
                    <Typography className={classes.date}>
                      April 13, 2021
                    </Typography>
                    <Typography className={classes.titleContent}>
                      Làm thế nào để trở thành một con cá
                    </Typography>
                    <Typography className={classes.description}>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Fuga cumque iure, nesciunt rem sequi corrupti harum
                      obcaecati tempore voluptate dicta!
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid container item xs={4} spacing={0}>
            <Box className={classes.wrapperContentAll}>
              <Grid container spacing={0}>
                <Grid item xs={12}>
                  <Box className={classes.imgFirstContent}>
                    <img src={content5} width="100%" />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box className={classes.wrapperContentText}>
                    <Typography className={classes.date}>
                      April 13, 2021
                    </Typography>
                    <Typography className={classes.titleContent}>
                      Làm thế nào để trở thành một con cá
                    </Typography>
                    <Typography className={classes.description}>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Fuga cumque iure, nesciunt rem sequi corrupti harum
                      obcaecati tempore voluptate dicta!
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid container item xs={4} spacing={0}>
            <Box className={classes.wrapperContentAll}>
              <Grid container spacing={0}>
                <Grid item xs={12}>
                  <Box className={classes.imgFirstContent}>
                    <img src={content6} width="100%" />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box className={classes.wrapperContentText}>
                    <Typography className={classes.date}>
                      April 13, 2021
                    </Typography>
                    <Typography className={classes.titleContent}>
                      Làm thế nào để trở thành một con cá
                    </Typography>
                    <Typography className={classes.description}>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Fuga cumque iure, nesciunt rem sequi corrupti harum
                      obcaecati tempore voluptate dicta!
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid container item xs={4} spacing={0}>
            <Box className={classes.wrapperContentAll}>
              <Grid container spacing={0}>
                <Grid item xs={12}>
                  <Box className={classes.imgFirstContent}>
                    <img src={content1} width="100%" />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box className={classes.wrapperContentText}>
                    <Typography className={classes.date}>
                      April 13, 2021
                    </Typography>
                    <Typography className={classes.titleContent}>
                      Làm thế nào để trở thành một con cá
                    </Typography>
                    <Typography className={classes.description}>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Fuga cumque iure, nesciunt rem sequi corrupti harum
                      obcaecati tempore voluptate dicta!
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </div>
      <Box className={classes.btnContainer}>
        <Button
          variant="contained"
          color="secondary"
          className={classes.xemThemBtn}
        >
          Xem thêm
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
