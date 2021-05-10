import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';
import logo from './../../assets/logo.png';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid container spacing={0}>
        <Grid container item xs={2} spacing={0}>
          <Link to="/">
            <img src={logo} width="50px" />
          </Link>
        </Grid>
        <Grid container item xs={10} spacing={0}>
          <Box className={classes.navContainer}>
            <Typography className={classes.navItemText}>FPT Share</Typography>
            <Typography className={classes.navItemText}>UI/UX</Typography>
            <Typography className={classes.navItemText}>Frontend</Typography>
            <Typography className={classes.navItemText}>Backend</Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
