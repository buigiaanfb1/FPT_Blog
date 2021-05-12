import { Route } from 'react-router-dom';
import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { useStyles } from './styles';
import { useHistory } from 'react-router-dom';

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
  const history = useHistory();
  return (
    <LayoutHome>
      <Route
        exact={exact}
        path={path}
        component={component}
        key={history.location.pathname}
      />
    </LayoutHome>
  );
};

export default HomeTemplate;
