import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: 'rgba(37,36,39, 0.95)',
    boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
    width: '80%',
    maxHeight: '90%',
    // overflowY: 'auto',
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

  button: {
    fontSize: '34px',
    color: '#e3e6ec',
  },
}));
