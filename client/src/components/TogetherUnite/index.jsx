import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useStyles } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-regular-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Discussion from '../../layouts/HomeTemplate/Discussion';
import { useMediaQuery } from 'react-responsive';

const TogetherUnite = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleOpen}
        className={classes.containerButton}
      >
        <FontAwesomeIcon icon={faComments} className={classes.button} />
      </button>
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
          <div
            className={classes.paper}
            style={{
              height: `${!isMobile ? 60 : 85}vh`,
              width: `${!isMobile ? 80 : 95}vw`,
            }}
          >
            {open && isMobile ? (
              <button
                type="button"
                onClick={handleClose}
                className={classes.containerButtonExit}
              >
                <FontAwesomeIcon icon={faTimes} className={classes.button} />
              </button>
            ) : (
              ''
            )}
            <Discussion />
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default TogetherUnite;
