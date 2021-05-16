import app from './App.css';
import HomeTemplate from './layouts/HomeTemplate';
import { routesHome } from './routes';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './layouts/AdminTemplate/Dashboard';
import { useEffect } from 'react';
import ScrollToTop from './common/ScrollToTop';
import { useDispatch, useSelector } from 'react-redux';
import { GET_ALL_POSTS_REQUESTED_SAGA } from './layouts/HomeTemplate/Home/modules/redux/constants';
import AdminTemplate from './layouts/AdminTemplate';
import { AnimatePresence } from 'framer-motion';
import { Box, makeStyles } from '@material-ui/core';
import TogetherUnite from './components/TogetherUnite';

const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'fixed',
    bottom: '2rem',
    right: '2rem',
    zIndex: '9999999',
  },
}));

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: GET_ALL_POSTS_REQUESTED_SAGA,
    });
  }, []);
  const showLayoutHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((route, index) => {
        return (
          <HomeTemplate
            exact
            path={route.path}
            component={route.component}
            key={index}
          />
        );
      });
    }
  };
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnimatePresence exitBeforeEnter>
        <Box className={classes.modal}>
          <TogetherUnite />
        </Box>
        <Switch>
          <Route
            exact={true}
            path="/admin/dashboard"
            component={AdminTemplate}
          />
          {showLayoutHome(routesHome)}
        </Switch>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
