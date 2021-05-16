import { Box, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import { useStyles } from './styles';
import logo from './../../assets/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

  const handleRenderNavMobile = () => {
    return (
      <Grid item xs={10} spacing={0}>
        <Box className={classes.barsForPhone} onClick={() => setOpen(!open)}>
          <FontAwesomeIcon icon={faBars} className={classes.iconBars} />
        </Box>
        <>
          <Box
            className={`${open ? classes.wrapperContainerForPhone : ''}`}
            onClick={() => setOpen(!open)}
          ></Box>
          <Box
            className={`${classes.containerForPhone} ${
              open ? classes.activeNavForMobile : ''
            }`}
          >
            <Box className={classes.wrapperLinkNavMobile}>
              <Box className={classes.containerLink}>
                <NavLink
                  to="/fpt"
                  activeClassName={classes.activeLink}
                  className={classes.link}
                >
                  FPTU SHARE
                </NavLink>
              </Box>
              <Box className={classes.containerLink}>
                <NavLink
                  to="/frontend"
                  activeClassName={classes.activeLink}
                  className={classes.link}
                >
                  Frontend
                </NavLink>
              </Box>
              <Box className={classes.containerLink}>
                <NavLink
                  to="/backend"
                  activeClassName={classes.activeLink}
                  className={classes.link}
                >
                  Backend
                </NavLink>
              </Box>
            </Box>
          </Box>
        </>
      </Grid>
    );
  };
  return (
    <div className={classes.container}>
      <Grid container spacing={0}>
        <Grid item xs={2} spacing={0}>
          <Link to="/">
            <img src={logo} width="50px" />
          </Link>
        </Grid>
        {!isMobile ? (
          <Grid item xs={10} spacing={0}>
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
        ) : (
          handleRenderNavMobile()
        )}
      </Grid>
    </div>
  );
};

export default Header;
