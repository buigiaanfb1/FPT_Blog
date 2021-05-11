import { Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.bgColor}>
      <div className={classes.container}>
        <div className={classes.containerIcon}>
          <a
            href="https://www.facebook.com/OneTwoThreeABCD/"
            target="_blank"
            rel="noreferrer"
          >
            <i
              className={`fab fa-facebook ${classes.facebook} ${classes.icon}`}
            ></i>
          </a>
          <a
            href="https://github.com/buigiaanfb1"
            target="_blank"
            rel="noreferrer"
          >
            <i
              className={`fab fa-github ${classes.github} ${classes.icon}`}
            ></i>
          </a>
          <a
            href="https://www.linkedin.com/in/tk-gia-65a280164/"
            target="_blank"
            rel="noreferrer"
          >
            <i
              className={`fab fa-linkedin ${classes.linkedIn} ${classes.icon}`}
            ></i>
          </a>
        </div>
        <div className={classes.fromGiaAn}>
          <Typography className={classes.textGiaAn}>
            Made with <i className="fa fa-heart"></i> by Gia An
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Footer;
