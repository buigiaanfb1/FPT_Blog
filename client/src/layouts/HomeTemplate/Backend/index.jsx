import { Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';

const Backend = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography className={classes.title}>Backend</Typography>
    </div>
  );
};

export default Backend;
