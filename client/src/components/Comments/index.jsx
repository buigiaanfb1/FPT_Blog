import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';
import avatar from './../../assets/logo.png';

const Comments = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography className={classes.titleDiscussion}>Bình luận(7)</Typography>
      <Box className={classes.userComment}>
        <div className={classes.root}>
          <Grid container spacing={1}>
            <Grid item xs={1}>
              <img src={avatar} width="50px" height="50px" />
            </Grid>
            <Grid item xs={11}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField
                    className={classes}
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="Hãy để lại bình luận nào!"
                    fullWidth
                    multiline
                    rows={2}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    placeholder="Tên của bạn"
                    variant="outlined"
                    size="small"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <Box className={classes.buttonContainer}>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                    >
                      Đăng bình luận nào!
                    </Button>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    placeholder="Email của bạn"
                    variant="outlined"
                    size="small"
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Box>
      <Box className={classes.otherUsersComment}>
        <div className={classes.root}>
          <Grid container spacing={1}>
            <Grid item xs={1}>
              <img src={avatar} width="50px" height="50px" />
            </Grid>
            <Grid item xs={11}>
              <Box className={classes.otherUsersWrapper}>
                <Typography className={classes.username}>Lewis</Typography>
                <Typography className={classes.date}>
                  9:55 12/05/2021
                </Typography>
              </Box>
              <Typography className={classes.content}>thks bro :))</Typography>
            </Grid>
          </Grid>
        </div>
      </Box>
      <Box className={classes.otherUsersComment}>
        <div className={classes.root}>
          <Grid container spacing={1}>
            <Grid item xs={1}>
              <img src={avatar} width="50px" height="50px" />
            </Grid>
            <Grid item xs={11}>
              <Box className={classes.otherUsersWrapper}>
                <Typography className={classes.username}>Lewis</Typography>
                <Typography className={classes.date}>
                  9:55 12/05/2021
                </Typography>
              </Box>
              <Typography className={classes.content}>thks bro :))</Typography>
            </Grid>
          </Grid>
        </div>
      </Box>
    </div>
  );
};

export default Comments;
