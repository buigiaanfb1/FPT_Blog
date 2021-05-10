import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';
import logo from '../../../assets/logo.png';
import Relevant from '../../../components/Relevant';

const Detail = () => {
  const classes = useStyles();
  return (
    <div className={classes.bgColor}>
      <div className={classes.container}>
        <Box className={classes.titleContainer}>
          <Typography className={classes.title}>
            Thanh niên bị bạn chê tạ và cái kết
          </Typography>
        </Box>
        <Box className={classes.authorContainer}>
          <Box className={classes.boxAvatars}>
            <Box className={classes.containerAvatars}>
              <img src={logo} className={classes.imgAuthor} />
            </Box>
          </Box>
          <Box className={classes.boxName}>
            <Typography className={classes.nameAuthor}>Gia An</Typography>
            <Typography className={classes.date}>May 10, 2021</Typography>
          </Box>
        </Box>
        <Box className={classes.contentContainer}>
          <Typography className={classes.contents}>
            Hiện tại, mình đang làm tại SwatMobility. Team dev cũng nho nhỏ
            (tổng cộng tầm 8-10 người), nhưng anh em làm việc rất vui và chuyên
            nghiệp! Kì này, mình sẽ đánh giá những công nghệ mà mình và team
            đang dùng, điểm mạnh/điểm yếu và những điều mình thích/ghét về chúng
            nhé.
          </Typography>
          <br />
          <Typography className={classes.contents}>
            Còn 1 công nghệ nữa mình không dùng khi đi làm, nhưng rất hay dùng
            khi code các dự án web chơi chơi. Đó là NodeJS. NodeJS là 1 công
            nghệ để viết JS ở phía back-end, dựa theo Chrome V8 Engine.
          </Typography>
          <br />
          <Typography className={classes.contents}>
            Còn 1 công nghệ nữa mình không dùng khi đi làm, nhưng rất hay dùng
            khi code các dự án web chơi chơi. Đó là NodeJS. NodeJS là 1 công
            nghệ để viết JS ở phía back-end, dựa theo Chrome V8 Engine.
          </Typography>
          <br />
          <Typography className={classes.contents}>
            Hiện tại, mình đang làm tại SwatMobility. Team dev cũng nho nhỏ
            (tổng cộng tầm 8-10 người), nhưng anh em làm việc rất vui và chuyên
            nghiệp! Kì này, mình sẽ đánh giá những công nghệ mà mình và team
            đang dùng, điểm mạnh/điểm yếu và những điều mình thích/ghét về chúng
            nhé.
          </Typography>
          <br />
          <Typography className={classes.contents}>
            Còn 1 công nghệ nữa mình không dùng khi đi làm, nhưng rất hay dùng
            khi code các dự án web chơi chơi. Đó là NodeJS. NodeJS là 1 công
            nghệ để viết JS ở phía back-end, dựa theo Chrome V8 Engine.
          </Typography>
          <br />
          <Typography className={classes.contents}>
            Còn 1 công nghệ nữa mình không dùng khi đi làm, nhưng rất hay dùng
            khi code các dự án web chơi chơi. Đó là NodeJS. NodeJS là 1 công
            nghệ để viết JS ở phía back-end, dựa theo Chrome V8 Engine.
          </Typography>
        </Box>
      </div>
      <Relevant />
    </div>
  );
};

export default Detail;
