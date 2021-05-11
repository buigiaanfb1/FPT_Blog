import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  container: {
    margin: '2rem 2rem',
  },

  navContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
  },

  navItemText: {
    fontFamily: '"Poppins", sans-serif',
    marginLeft: '2.5rem',
    color: '#251B33',
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '1px',
    opacity: '0.4',
    fontWeight: '500',
    textTransform: 'uppercase',
    cursor: 'pointer',
  },
});
