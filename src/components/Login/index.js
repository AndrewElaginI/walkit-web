import React from 'react';
import { useHistory } from 'react-router-dom';

function Login() {
  const history = useHistory();
  return (
    <div>
      <h2>Login</h2>
      <button onClick={() => history.goBack()}>Back</button>
    </div>
  );
}

export default Login;
