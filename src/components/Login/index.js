import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useInput } from '../../hooks/useInput';

function Login() {
  const history = useHistory();
  const [email, handleEmail, resetEmail] = useInput('');
  const [password, handlePassword, resetPassword] = useInput('');

  const handleSubmit = e => {
    e.preventDefault();
    resetEmail();
    resetPassword();
    axios
      .post('http://localhost:3000/auth/login', {
        email,
        password
      })
      .then(response => {
        console.log(response);
        const { token } = response.data.data;
        console.log(token);
        if (token) {
          axios
            .get('http://localhost:3000/profile', {
              headers: { Authorization: `bearer ${token}` }
            })
            .then(response => {
              console.log('User response', response.data);
            })
            .catch(error => console.log(error));
        }
      })
      .catch(error => console.log(error));
  };
  return (
    <div>
      <h2>Login</h2>
      <button onClick={() => history.goBack()}>Back</button>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            placeholder='Email'
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            placeholder='Password'
            value={password}
            onChange={handlePassword}
          />
        </div>
        <button type='submit'>Submit Login</button>
      </form>
      <div>
        Email: {email} Password: {password}
      </div>
    </div>
  );
}

export default Login;
