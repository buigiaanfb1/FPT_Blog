import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    width: '1120px',
    margin: '5rem auto 2rem auto',
  },
  root: {
    flexGrow: 1,
  },

  wrapperFirstContent: {
    cursor: 'pointer',
  },

  imgFirstContent: {
    '& img': {
      borderRadius: '8px',
    },
  },

  wrapperContent: {
    padding: '10px 20px 40px 0px',
  },

  wrapperContentAll: {
    padding: '30px 10px 10px 0px',
    cursor: 'pointer',
  },

  date: {
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '14px',
    color: '#000',
    opacity: '0.5',
    margin: '8px 0',
  },

  titleFirstContent: {
    fontWeight: '500',
    fontSize: '40px',
    lineHeight: '40px',
    letterSpacing: '0px',
    color: '#121212',
    marginBottom: '16px',
  },

  description: {
    fontSize: '16px',
    lineHeight: '26px',
    color: '#323947',
    fontWeight: '500',
    letterSpacing: '0.4px',
  },

  wrapperContent: {
    padding: '10px 20px 40px 0px',
  },

  wrapperContentText: {
    padding: '0px',
  },

  titleContent: {
    fontWeight: '500',
    fontSize: '28px',
    lineHeight: '34px',
    letterSpacing: '0px',
    color: '#121212',
    marginBottom: '16px',
  },

  btnContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  xemThemBtn: {
    marginTop: '1rem',
    padding: '0.5rem 1.2rem',
    boxShadow: 'none',
    borderRadius: '8px',
    background: 'linear-gradient(to left bottom, #ff2492, #FF6433)',
  },

  link: {
    textDecoration: 'none',
  },
}));
