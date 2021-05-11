import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: '700',
    fontFamily: "'Montserrat', sans-serif",
    display: 'block',
    textAlign: 'center',
    padding: '3rem 0',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    background: 'linear-gradient(to right, #9142F6, #0075F6)',
    filter: 'brightness(220%)',
  },
}));
