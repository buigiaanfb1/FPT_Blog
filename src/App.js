import { Fragment } from 'react';
import app from './App.css';
import HomeTemplate from './layouts/HomeTemplate';
import { routesHome } from './routes';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
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
      <Switch>{showLayoutHome(routesHome)}</Switch>
    </BrowserRouter>
  );
}

export default App;
