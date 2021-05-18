import { Box } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useStyles } from './styles';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import {
  putLikeService,
  putUnlikeService,
} from '../modules/services/DetailServices';

const PostAction = ({ slug, logo, admin = null }) => {
  const classes = useStyles();
  const [isHeart, setIsHeart] = useState(false);
  let putSlug = slug.slice(1);
  console.log(admin);

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
      for (let i = 0; i < heartUserLocal.length; i++) {
        if (heartUserLocal[i].path === slug) {
          heartUserLocal.splice(i, 1);
          setIsHeart(false);
          let newHeartUserLocal = [...heartUserLocal];
          // Axios unlike lên db
          putUnlikeService({ putSlug });
          localStorage.setItem('LIKE', JSON.stringify(newHeartUserLocal));
          return;
        }
      }
    } else {
      if (localStorage.getItem('LIKE')) {
        // Dành cho người cũ vào web parse ra push new like vào mảng
        let heartUserLocal = JSON.parse(localStorage.getItem('LIKE'));
        // Axios like lên db
        putLikeService({ putSlug });
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
        // Axios like lên db
        putLikeService({ putSlug });
        arrLocal.push(save);
        localStorage.setItem('LIKE', JSON.stringify(arrLocal));
        setIsHeart(true);
      }
    }
  };

  return (
    // <div className={classes.container}>
    <Box className={classes.wrapperLike}>
      <Box className={classes.item}>
        <Box className={classes.boxAvatars}>
          <Box className={classes.containerAvatars}>
            <img
              src={admin ? admin.avatar : logo}
              className={classes.imgAuthor}
            />
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
            <a
              target="_blank"
              href={`${
                admin
                  ? admin.facebook
                  : 'https://www.facebook.com/OneTwoThreeABCD/'
              }`}
            >
              <FontAwesomeIcon
                icon={faFacebookF}
                className={`${classes.iconFacebook} ${classes.icon}`}
              />
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
    // </div>
  );
};

export default React.memo(PostAction);
