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

function App() {
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
      <Switch>
        <Route exact={true} path="/admin/dashboard" component={AdminTemplate} />
        {showLayoutHome(routesHome)}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
