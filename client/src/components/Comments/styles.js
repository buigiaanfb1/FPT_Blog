import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  container: {
    margin: '0 auto',
    maxWidth: '700px',
    padding: '3rem 0',
  },

  titleDiscussion: {
    fontWeight: '700',
    fontSize: '24px',
  },

  userComment: {
    padding: '2rem 0',
  },

  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  button: {
    padding: '0.5rem 2.5rem',
  },

  otherUsersComment: {
    padding: '2rem 0 0 0',
  },

  otherUsersWrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },

  username: {
    fontWeight: '500',
    fontSize: '16px',
  },

  date: {
    fontSize: '14px',
  },

  content: {
    padding: '0.5rem 0',
  },
}));
