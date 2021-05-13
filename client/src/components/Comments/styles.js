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
    fontSize: '28px',
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
    fontWeight: '700',
    fontSize: '16px',
  },

  date: {
    fontSize: '13px',
    fontWeight: '500',
    opacity: '0.9',
    display: 'block',
  },

  content: {
    padding: '0.5rem 0',
  },

  pending: {
    display: 'flex',
    alignItems: 'center',
  },

  iconNewComment: {
    fontSize: '20px',
    color: '#FC9007',
    margin: '0rem 0.2rem',
  },

  wrapperPending: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '0.5rem',
  },

  newComment: {
    fontWeight: '500',
    fontSize: '14px',
    color: '#FC9007',
  },

  boxMeAvatar: {
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

  avatarMeUser: {
    borderRadius: '50%',
  },
}));
