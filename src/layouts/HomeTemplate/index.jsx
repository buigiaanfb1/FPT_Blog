import { Router } from '@material-ui/icons';
import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { useStyles } from './styles';

const LayoutHome = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

const HomeTemplate = ({ exact, path, component }) => {
  const classes = useStyles();
  return (
    <LayoutHome>
      <Router exact={exact} path={path} component={component} />
    </LayoutHome>
  );
};

export default HomeTemplate;
