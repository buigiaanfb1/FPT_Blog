import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
  },
  paper: {
    backgroundColor: 'transparent',
    width: '80%',
    outline: 'none',
  },

  containerButton: {
    background:
      '-webkit-linear-gradient(left top, rgba(216,15,233, 0.5) 0%, rgba(242,36,23, 0.5) 100%)',
    border: 'none',
    width: '60px',
    height: '60px',
    borderRadius: '100%',
    cursor: 'pointer',
    transition: 'all 0.3s',
    '&:hover': {
      background:
        '-webkit-linear-gradient(left top, rgba(216,15,233, 0.7) 0%, rgba(242,36,23, 0.7) 100%)',
    },
  },

  containerButtonExit: {
    position: 'fixed',
    top: '0.5rem',
    left: '0.5rem',
    zIndex: '9999',
    background:
      '-webkit-linear-gradient(left top, rgba(216,15,233, 0.5) 0%, rgba(242,36,23, 0.5) 100%)',
    border: 'none',
    width: '40px',
    height: '40px',
    borderRadius: '100%',
    cursor: 'pointer',
    transition: 'all 0.3s',
    '&:hover': {
      background:
        '-webkit-linear-gradient(left top, rgba(216,15,233, 0.7) 0%, rgba(242,36,23, 0.7) 100%)',
    },
  },

  button: {
    fontSize: '30px',
    color: '#e3e6ec',
  },
}));
