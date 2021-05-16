import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  bgColor: {
    // backgroundColor: 'rgba(0,0,0,0.0)',
    padding: '0.5rem 0rem',
    position: 'relative',

    '&:before': {
      content: '""',
      position: 'absolute',
      top: '0',
      left: '0',
      zIndex: '-1',
      height: '2px',
      width: '100%',
      //   background: 'linear-gradient(to left bottom, #ff2492, #FF6433)',
    },
  },
  container: {
    maxWidth: '1120px',
    margin: '0 auto',
    paddingTop: '2rem',
  },

  containerIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& a': {
      textDecoration: 'none',
      color: '#000',
    },
  },

  icon: {
    fontSize: '2.5rem',
    margin: '0 0.7rem',
    cursor: 'pointer',
  },

  facebook: {
    transition: 'all 0.3s',
    '&:hover': {
      color: '#3b5999',
    },
  },

  github: {
    transition: 'all 0.3s',
    '&:hover': {
      color: '#C67FE9',
    },
  },

  linkedIn: {
    transition: 'all 0.3s',
    '&:hover': {
      color: '#0077B5',
    },
  },

  fromGiaAn: {
    marginTop: '1rem',
  },

  textGiaAn: {
    fontWeight: '500',
    textAlign: 'center',

    '& i': {
      color: '#F25022',
    },
  },
});
