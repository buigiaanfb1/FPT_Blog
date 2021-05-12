import { Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';

const Frontend = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography className={classes.title}>Frontend</Typography>
    </div>
  );
};

export default Frontend;
