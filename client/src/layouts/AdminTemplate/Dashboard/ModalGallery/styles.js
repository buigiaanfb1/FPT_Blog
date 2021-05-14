import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: '80%',
    height: '70%',
    overflowX: 'auto',
    overflowY: 'auto',
  },

  image: {
    margin: ' 1rem 0.5rem',
  },

  titleGallery: {
    fontWeight: '700',
    fontSize: '24px',
    padding: '1rem 0 0.2rem 0',
    borderBottom: '3px solid #b5b5b5',
  },
}));
