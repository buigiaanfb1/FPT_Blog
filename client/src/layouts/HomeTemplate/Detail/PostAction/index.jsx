import { Box } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useStyles } from './styles';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

const PostAction = ({ slug, logo }) => {
  const classes = useStyles();
  const [isHeart, setIsHeart] = useState(false);

  useEffect(() => {
    handleCheckHeart();
  }, []);

  const handleCheckHeart = () => {
    if (localStorage.getItem('LIKE')) {
      const heartUserLocal = JSON.parse(localStorage.getItem('LIKE'));
      for (let i = 0; i < heartUserLocal.length; i++) {
        if (
          heartUserLocal[i].path === slug &&
          heartUserLocal[i].like === 'true'
        ) {
          setIsHeart(true);
          return;
        }
      }
    }
  };

  const handleClickHeart = () => {
    if (isHeart === true) {
      let heartUserLocal = JSON.parse(localStorage.getItem('LIKE'));
      console.log(heartUserLocal);
      for (let i = 0; i < heartUserLocal.length; i++) {
        if (heartUserLocal[i].path === slug) {
          heartUserLocal.splice(i, 1);
          setIsHeart(false);
          let newHeartUserLocal = [...heartUserLocal];
          localStorage.setItem('LIKE', JSON.stringify(newHeartUserLocal));
          return;
        }
      }
    } else {
      if (localStorage.getItem('LIKE')) {
        // Dành cho người cũ vào web parse ra push new like vào mảng
        let heartUserLocal = JSON.parse(localStorage.getItem('LIKE'));
        console.log(heartUserLocal);
        let save = {
          path: slug,
          like: 'true',
        };
        heartUserLocal.push(save);
        localStorage.setItem('LIKE', JSON.stringify(heartUserLocal));
        setIsHeart(true);
      } else {
        // Dành cho người mới vào web và like lần đầu thì tạo mảng mới
        let arrLocal = [];
        let save = {
          path: slug,
          like: 'true',
        };
        arrLocal.push(save);
        localStorage.setItem('LIKE', JSON.stringify(arrLocal));
        setIsHeart(true);
      }
    }
  };

  return (
    <div className={classes.container}>
      <Box className={classes.wrapperLike}>
        <Box className={classes.item}>
          <Box className={classes.boxAvatars}>
            <Box className={classes.containerAvatars}>
              <img src={logo} className={classes.imgAuthor} />
            </Box>
          </Box>
          <Box style={{ marginTop: '1.5rem' }}>
            <Box
              onClick={() => handleClickHeart()}
              className={
                isHeart
                  ? `already-heart-container`
                  : `${classes.iconContainerHeart} container-heart`
              }
            >
              <FavoriteBorderIcon className={classes.iconHeart} />
            </Box>
            <Box
              className={`${classes.iconContainerFacebook} container-facebook`}
            >
              <FontAwesomeIcon
                icon={faFacebookF}
                className={`${classes.iconFacebook} ${classes.icon}`}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default PostAction;
