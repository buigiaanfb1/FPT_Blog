import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bgColor: {
    backgroundColor: '#000',
    width: '100%',
    marginTop: '100px',
  },

  container: {
    maxWidth: '1120px',
    margin: '0 auto',
    padding: '4rem 0',
  },

  relevantTitle: {
    color: '#fff',
    fontSize: '40px',
    lineHeight: '40px',
    marginBottom: '40px',
    fontWeight: '500',
  },

  imgFirstContent: {
    '& img': {
      borderRadius: '8px',
    },
  },

  date: {
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '14px',
    color: '#fff',
    opacity: '0.5',
    margin: '8px 0',
  },

  titleContent: {
    fontWeight: '400',
    fontSize: '24px',
    lineHeight: '34px',
    letterSpacing: '0px',
    color: '#ccc',
    marginBottom: '16px',
  },
}));
