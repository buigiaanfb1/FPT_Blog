import { Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';

const FptShare = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography className={classes.title}>FPT University</Typography>
      <Typography className={classes.slogan}>
        Share mọi thứ để passed
      </Typography>
    </div>
  );
};

export default FptShare;
