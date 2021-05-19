import React, { Fragment } from 'react';
import { useStyles } from './styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Button } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import PostEditorEdit from '../PostEditorEdit';

const EditPost = ({ post, index }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <TableRow>
        <TableCell
          align="center"
          component="th"
          scope="row"
          style={{ width: '50px' }}
        >
          {index + 1}
        </TableCell>
        <TableCell align="left">{post.title}</TableCell>
        <TableCell align="center">
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Chỉnh sửa
          </Button>
        </TableCell>
      </TableRow>
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
            <PostEditorEdit post={post} />
          </div>
        </Fade>
      </Modal>
    </Fragment>
  );
};

export default EditPost;
