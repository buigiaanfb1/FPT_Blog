import { Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useStyles } from './styles';
import { motion } from 'framer-motion';
import { pageAnimation } from '../../../common/animation';

const Frontend = () => {
  const classes = useStyles();

  useEffect(() => {
    document.title = 'Bản tin Frontend - ARxV Vietnam';
  }, []);
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className={classes.container}>
        <Typography className={classes.title}>Frontend</Typography>
      </div>
    </motion.div>
  );
};

export default Frontend;
