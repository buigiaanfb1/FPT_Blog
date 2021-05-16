import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  wrapperLike: {
    position: '-webkit-sticky',
    position: 'sticky',
    top: '0',
    left: '3%',
    paddingTop: '50px',
    paddingBottom: '100px',
    margin: 'initial',
    width: '20px',
  },

  iconContainerHeart: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '0.4rem',
    transition: 'all 0.2s',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgba(220,24,24,0.1)',
    },
  },

  iconContainerFacebook: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '0.4rem',
    transition: 'all 0.2s',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgba(0, 119, 181, 0.1)',
    },
  },

  iconHeart: {
    fontSize: '30px',
    lineHeight: '50px',
    color: '#363D44',
  },

  iconFacebook: {
    fontSize: '22px',
    lineHeight: '50px',
    color: '#363D44',
  },

  imgAuthor: {
    width: '48px',
    height: '48px',
    height: '100%',
    borderRadius: '2000px',
  },
}));
