import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as selectors from '../../../store/selectors';

function ProtectedRoute({ children, userId, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        userId ? (
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
  userId: selectors.userIdSelector(state)
});

export default connect(mapStateToProps)(ProtectedRoute);
