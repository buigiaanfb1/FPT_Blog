import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useStyles } from './styles';
import { Box, Button, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Image } from 'cloudinary-react';

const ModalGallery = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [button, setButton] = React.useState('Thêm ảnh');
  const images = useSelector((state) => state.AdminReducer.images);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRenderImages = () => {
    if (images.length > 0) {
      return images.map((image, index) => {
        return (
          <>
            <Image
              onClick={() => {
                props.handleImage(image.public_id);
                handleClose();
                setButton(`${image.public_id}`);
              }}
              className={classes.image}
              key={index}
              publicId={image.public_id}
              fetch-format="auto"
              quality="auto"
              width="150px"
              height="150px"
            />
          </>
        );
      });
    } else {
      <Typography>Thư viện trống! Upload ngay</Typography>;
    }
  };
  return (
    <div>
      <Box>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          {button}
        </Button>
      </Box>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Typography className={classes.titleGallery}>
              Thư viện ảnh
            </Typography>
            {handleRenderImages()}
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalGallery;
