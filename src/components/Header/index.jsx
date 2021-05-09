import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';
import logo from './../../assets/logo.png';

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid container spacing={0}>
        <Grid container item xs={2} spacing={0}>
          <img src={logo} width="50px" height="50px" />
        </Grid>
        <Grid container item xs={10} spacing={0}>
          <Box className={classes.navContainer}>
            <Typography className={classes.navItemText}>Home</Typography>
            <Typography className={classes.navItemText}>Blog</Typography>
            <Typography className={classes.navItemText}>Bookmarks</Typography>
            <Typography className={classes.navItemText}>Elements</Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
