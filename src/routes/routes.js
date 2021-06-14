import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../services/auth';
import Navbar from '../components/Navbar';
import Home from '../pages/home';
import SignUp from '../pages/signup';
import SignIn from '../pages/signin';
import Services from '../pages/services/services';
import Products from '../pages/products/products';
import App from '../pages/app';


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
      <Route path='/signin' component={SignIn} />
      <Route path='/signup' component={SignUp} />
      <Route path='/services' component={Services} />
      <Route path='/products' component={Products} />
      <PrivateRoute path='/app' component={App} />
      <Route path='*' component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;