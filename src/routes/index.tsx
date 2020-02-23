import * as React from 'react';
import { Route, Redirect, Switch } from 'react-router';
import CV from '../pages/CV';
import Login from '../pages/Login';
import NavBar from '../components/NavBar';
import NoMatch from '../pages/NoMatch';

const user = localStorage.getItem('user');

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        user
            ? <Component {...props} />
            : <Redirect to='/login' />
    )} />
);

const routes = (
  <div>
    <NavBar />
    <Switch>
      <PrivateRoute exact={true} path='/' component={CV} />
      <Route path="/login" component={Login} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);

export default routes;
