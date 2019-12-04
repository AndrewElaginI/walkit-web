import React from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import Home from '../Home';
import Login from '../Login';
import Profile from '../Profile';
import Signup from '../Signup';
import ProtectedRoute from './ProtectedRoute';

function Routes({ isLoggedIn }) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <ProtectedRoute isLoggedIn={isLoggedIn}>
          <Route exact path='/profile/:id' component={Profile} />
        </ProtectedRoute>
      </Switch>
    </div>
  );
}

export default withRouter(Routes);
