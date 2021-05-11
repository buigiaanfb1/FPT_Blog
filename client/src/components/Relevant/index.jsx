import { Box, Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';
import content1 from './../../assets/content1.jpeg';
import content2 from './../../assets/content2.jpeg';
import content3 from './../../assets/content3.jpeg';

const Relevant = () => {
  const classes = useStyles();
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
            <Grid container spacing={5}>
              <Grid container item xs={4}>
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
                          Làm thế nào để trở thành một con cá siêu cấp provip
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid container item xs={4}>
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
                          Làm thế nào để trở thành một con cá siêu cấp provip
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid container item xs={4}>
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
                          Làm thế nào để trở thành một con cá siêu cấp provip
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Relevant;
