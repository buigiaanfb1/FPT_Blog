import app from './App.css';
import HomeTemplate from './layouts/HomeTemplate';
import { routesHome } from './routes';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './layouts/AdminTemplate/Dashboard';

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
      <Switch>
        <Route exact={true} path="/admin/dashboard" component={Dashboard} />
        {showLayoutHome(routesHome)}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
