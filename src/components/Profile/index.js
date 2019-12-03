import React from 'react';
import { withRouter } from 'react-router-dom';

function Profile({ match }) {
  return <div>PROFILE {match.params.id}</div>;
}

export default withRouter(Profile);
