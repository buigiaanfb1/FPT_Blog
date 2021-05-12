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
            <NavLink
              to="/fpt"
              activeClassName={classes.activeNavItem}
              className={classes.navItemText}
            >
              FPT Share
            </NavLink>
            <NavLink
              to="/frontend"
              activeClassName={classes.activeNavItem}
              className={classes.navItemText}
            >
              Frontend
            </NavLink>
            <NavLink
              to="/backend"
              activeClassName={classes.activeNavItem}
              className={classes.navItemText}
            >
              Backend
            </NavLink>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
