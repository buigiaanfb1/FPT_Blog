import { Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';

const PageNotFound = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.title} variant="h2">
        Oops! Trang bạn tìm không tồn tại
      </Typography>
    </div>
  );
};

export default PageNotFound;
