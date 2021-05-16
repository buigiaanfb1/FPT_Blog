import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    margin: '0 auto',
    maxHeight: '600px',
    backgroundColor: '#000',
    opacity: '0.9',
    overflowY: 'auto',
    color: '#fff',
    position: 'relative',
  },

  // containerComment: {
  //   maxWidth: '880px',
  //   margin: '0 auto',
  // },

  allContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: '0.5rem 0.5rem',
    '& img': {
      width: '35px',
      height: '35px',
      borderRadius: '50%',
      margin: '0 0.5rem',
      transform: 'translate(0, 30%)',
    },
  },

  allMeContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row-reverse',
    margin: '0.5rem 0.5rem',
    '& img': {
      width: '35px',
      height: '35px',
      borderRadius: '50%',
      margin: '0 0.5rem',
      transform: 'translate(0, 30%)',
    },
  },
  bodyContainer: {
    // backgroundColor: 'plum',
    padding: '0.2rem 0.7rem',
    borderRadius: '10px',
    maxWidth: '400px',
    wordBreak: 'break-word',
    // overflow: 'hidden',
  },

  name: {
    fontSize: '14px',
    marginLeft: '0.7rem',
    lineHeight: '20px',
  },

  nameTextContainer: {
    display: 'flex',
    flexDirection: 'column',
  },

  inputContainer: {
    position: 'sticky',
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    width: '100%',
    bottom: '0',
    backgroundColor: 'rgba(37,36,39, 0.95)',
    padding: '1rem 1rem',
  },

  input: {
    width: '100%',
    borderRadius: '100px',
    padding: '0.5rem',
    boxShadow: 'none',
    outline: 'none',
    border: 'none',
    fontSize: '16px',
  },

  containerIcon: {
    borderRadius: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconSend: {
    fontSize: '24px',
    color: '#fff',
  },

  button: {
    backgroundColor: 'rgba(37,36,39, 0.95)',
    width: '40px',
    height: '40px',
    borderRadius: '100%',
    boxShadow: 'none',
    outline: 'none',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s',
    '&:hover': {
      backgroundColor: 'rgba(255,255,255, 0.5)',
    },
  },

  buttonLogin: {
    backgroundColor: 'plum',
    color: '#fff',
  },

  signOutContainer: {
    position: 'fixed',
    top: '2rem',
    right: '2rem',
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

  buttonSignOut: {
    fontSize: '34px',
    color: '#e3e6ec',
  },
}));
