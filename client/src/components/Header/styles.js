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
    top: '2rem',
    right: '1rem',
    width: '60%',
    height: '230px',
    borderRadius: '6px',
    border: '2px solid #000',
    overflowY: 'hidden',
    transform: 'translateX(110%)',
    transition: 'all 0.5s ease',
    backgroundColor: '#fafafa',
    zIndex: '1200 !important',
  },

  containerBackForPhone: {
    position: 'fixed',
    top: '2.25rem',
    right: '0.8rem',
    width: '60%',
    height: '230px',
    borderRadius: '6px',
    border: '2px solid #000',
    overflowY: 'hidden',
    transform: 'translateX(110%)',
    transition: 'all 0.5s ease',
    backgroundColor: '#000',
    zIndex: '1199 !important',
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
    // borderBottom: '2px solid plum',
  },

  link: {
    color: '#000',
    fontSize: '16px',
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

  logoText: {
    fontWeight: '700',
    fontSize: '24px',
  },
});
