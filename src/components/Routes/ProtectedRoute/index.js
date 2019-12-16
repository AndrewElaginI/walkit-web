import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as selectors from '../../../store/selectors';

function ProtectedRoute({ children, userRole = 'employee', user, ...rest }) {
  const { id, role } = user;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        id && userRole === role ? (
          children
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
  );
}

const mapStateToProps = state => ({
  user: selectors.userSelector(state)
});

export default connect(mapStateToProps)(ProtectedRoute);
