import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  container: {
    margin: '2rem 2rem',
  },

  navContainer: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
  },

  navItemText: {
    fontFamily: '"Poppins", sans-serif',
    marginLeft: '2.5rem',
    color: '#251B33',
    fontSize: '14px',
    lineHeight: '24px',
    letterSpacing: '1px',
    opacity: '0.4',
    fontWeight: '500',
    textTransform: 'uppercase',
    textDecoration: 'none',
    cursor: 'pointer',
  },

  activeNavItem: {
    textDecoration: 'none',
    color: '#000',
    fontWeight: '700',
    opacity: '1',
  },

  wrapperContainerForPhone: {
    position: 'fixed',
    top: '0',
    right: '0',
    width: '100%',
    height: '100%',
    overflowX: 'auto',
    transition: 'all 0.5s ease',
    backgroundColor: 'rgba(0,0,0,0.25)',
    zIndex: '1199',
  },

  containerForPhone: {
    position: 'fixed',
    top: '0',
    right: '0',
    width: '70%',
    height: '270px',
    borderTopLeftRadius: '35px',
    // borderTopRightRadius: '50px',
    borderBottomLeftRadius: '35px',
    borderBottomRightRadius: '35px',
    overflowY: 'hidden',
    transform: 'translateX(100%)',
    transition: 'all 0.5s ease',
    backgroundColor: 'rgba(37,36,39,0.95)',
    zIndex: '1200 !important',
  },

  activeNavForMobile: {
    transform: 'translateX(0%)',
    opacity: '1',
  },

  barsForPhone: {
    height: '85%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  iconBars: {
    fontSize: '26px',
  },

  wrapperLinkNavMobile: {
    padding: '2rem',
    color: '#FAFAFA',
  },

  link: {
    fontSize: '20px',
  },

  containerLink: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
    borderBottom: '2px solid plum',
  },

  link: {
    color: '#fafafa',
    fontSize: '20px',
    lineHeight: '24px',
    letterSpacing: '1px',
    opacity: '0.8',
    fontWeight: '500',
    textTransform: 'uppercase',
    textDecoration: 'none',
    cursor: 'pointer',
  },

  activeLink: {
    textDecoration: 'none',
    color: 'plum',
    fontWeight: '700',
    opacity: '1',
  },
});
