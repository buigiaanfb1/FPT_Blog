import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: '1120px',
    margin: '2rem auto 2rem auto',
  },
  title: {
    fontSize: '60px',
    fontWeight: '700',
    textAlign: 'center',
  },
  slogan: {
    fontSize: '40px',
    fontWeight: '400',
    textAlign: 'center',
  },
}));
