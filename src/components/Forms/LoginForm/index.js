import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { useInput } from '../../../hooks/useInput';
import { authStart } from '../../../store/auth/actions';
import InputWithIcon from '../../../core/InputWithIcon';
import PasswordInput from '../../../core/PasswordInput';
import { Button } from '@material-ui/core';

function LoginForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, handleEmail, resetEmail] = useInput('');
  const [password, handlePassword, resetPassword] = useInput('');

  const handleSubmit = e => {
    e.preventDefault();
    resetEmail();
    resetPassword();
    dispatch(authStart(email, password));
  };
  return (
    <div>
      <h2>Login</h2>
      <button onClick={() => history.goBack()}>Back</button>
      <form onSubmit={handleSubmit}>
        <InputWithIcon value={email} handleChange={handleEmail} />
        <PasswordInput value={password} handleChange={handlePassword} />
        <div>
          <Button variant='contained' color='primary' type='submit'>
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
