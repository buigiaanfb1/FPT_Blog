import { Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useStyles } from './styles';
import { motion } from 'framer-motion';
import { pageAnimation } from '../../../common/animation';

const FptShare = () => {
  const classes = useStyles();

  useEffect(() => {
    document.title = 'FPTU Share - ARxV Vietnam';
  }, []);

  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className={classes.container}>
        <Typography className={classes.title}>FPT University</Typography>
        <Typography className={classes.slogan}>
          Share mọi thứ để passed
        </Typography>
      </div>
    </motion.div>
  );
};

export default FptShare;
