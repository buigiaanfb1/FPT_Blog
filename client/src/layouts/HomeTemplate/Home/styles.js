import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: '1120px',
    margin: '3rem auto 2rem auto',
  },
  root: {
    flexGrow: 1,
  },

  wrapperFirstContent: {
    cursor: 'pointer',
    padding: '1rem',
  },

  wrapperContent: {
    padding: '1rem',
  },

  imgFirstContent: {
    '& img': {
      borderRadius: '8px',
    },
  },

  wrapperContentAll: {
    padding: '1rem',
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
    color: '#000',
    opacity: '0.7',
    fontWeight: '500',
    letterSpacing: '0.4px',
  },

  titleContent: {
    fontWeight: '500',
    fontSize: '28px',
    lineHeight: '34px',
    letterSpacing: '0px',
    color: '#121212',
    marginBottom: '0.5rem',
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

  reaction: {
    display: 'flex',
    marginTop: '1rem',
  },

  reactionAllPost: {
    display: 'flex',
    marginTop: '0.5rem',
  },

  reactionItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '2rem',
    '& svg': {
      fontSize: '20px',
      color: '#000',
      opacity: '0.4',
    },
  },

  analyzeReaction: {
    fontSize: '14px',
    fontWeight: '',
    color: '#000',
    opacity: '0.4',
    marginLeft: '0.5rem',
  },
}));
