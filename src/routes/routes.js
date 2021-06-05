/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { isAuthenticated } from '../services/auth';
import Home from '../pages/home';
import SignUp from '../pages/signup';
import SignIn from '../pages/signin';
import App from '../pages/app';

// eslint-disable-next-line no-unused-vars
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      /*
      <Route path='/signin' component={SignIn} />
      /*
      <Route path='/signup' component={SignUp} />
      */
      <Route path='/app' component={App} />
      <Route path='*' component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;