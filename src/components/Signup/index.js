import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useInput } from '../../hooks/useInput';
import { signupStart } from '../../store/user/actions';

function Signup() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, handleEmail, resetEmail] = useInput('');
  const [password, handlePassword, resetPassword] = useInput('');

  const handleSubmit = e => {
    e.preventDefault();
    resetEmail();
    resetPassword();
    dispatch(signupStart(email, password));
    // axios
    //   .post('http://localhost:3000/users', {
    //     email,
    //     password,
    //     role: 'employee'
    //   })
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(error => console.log(error));
  };
  return (
    <div>
      <h2>Signup</h2>
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
        <button type='submit'>Signup</button>
      </form>
      <div>
        Email: {email} Password: {password}
      </div>
    </div>
  );
}

export default Signup;
