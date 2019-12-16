import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Home from '../Home';
import Login from '../Login';
import AdminPanel from '../AdminPanel';
import Signup from '../Signup';
import ProtectedRoute from './ProtectedRoute';
import ManagerPanel from '../ManagerPanel';

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <ProtectedRoute exact path='/profile/:id' userRole='admin'>
          <AdminPanel />
        </ProtectedRoute>
        <ProtectedRoute exact path='/manager' userRole='manager'>
          <ManagerPanel />
        </ProtectedRoute>
      </Switch>
    </div>
  );
}

export default withRouter(Routes);
