import React from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import Home from '../Home';
import Login from '../Login';
import Profile from '../Profile';

function Routes({ isLoggedIn, location }) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route
          exact
          path='/profile/:id'
          component={() =>
            isLoggedIn ? (
              <Profile />
            ) : (
              <Redirect
                to={{
                  pathname: '/login',
                  state: { from: location }
                }}
              />
            )
          }
        />
      </Switch>
    </div>
  );
}

export default withRouter(Routes);
