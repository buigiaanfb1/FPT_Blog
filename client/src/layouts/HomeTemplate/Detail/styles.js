import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  bgColor: {
    width: '100%',
    backgroundColor: '#e3e6ec',
  },

  container: {
    margin: '0 auto',
    maxWidth: '1120px',
  },
  titleContainer: {
    marginTop: '7rem',
  },
  title: {
    fontSize: '100px',
    lineHeight: '100px',
    letterSpacing: '-1px',
    textAlign: 'center',
    fontWeight: '500',
    wordSpacing: '-1px',
  },

  authorContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    margin: '25px 50px 50px 1.5rem',
  },

  boxAvatars: {
    width: '60px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background:
      '-webkit-linear-gradient(left top, rgb(216,15,233) 0%, rgb(242,36,23) 100%)',
    transition: 'all 0.4s ease-in-out',
    borderRadius: '2000px',
  },

  containerAvatars: {
    border: '4px solid #e3e6ec',
    borderRadius: '50%',
    backgroundColor: '#e3e6ec',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  imgAuthor: {
    width: '48px',
    height: '48px',
    height: '100%',
    borderRadius: '2000px',
  },

  boxName: {
    marginLeft: '0.6rem',
  },

  nameAuthor: {
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '15px',
    letterSpacing: '1px',
    background:
      '-webkit-linear-gradient(left top, rgb(216,15,233) 0%, rgb(242,36,23) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },

  date: {
    fontWeight: '500',
    fontSize: '12px',
    lineHeight: '12px',
    letterSpacing: '0.5px',
    color: '#000',
    opacity: '0.5',
    marginTop: '10px',
  },

  contentContainer: {
    maxWidth: '880px',
    margin: '0 auto',
    fontSize: '20px',
    lineHeight: '35px',
    color: '#323947',
  },

  hr: {
    width: '100%',
    margin: '3rem auto 0 auto',
    maxWidth: '880px',
    height: '1px',
    backgroundColor: '#B5B5B5',
  },

  contents: {
    fontSize: 'inherit',
  },
}));
