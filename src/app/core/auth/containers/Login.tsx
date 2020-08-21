import React from 'react';
import { useDispatch } from 'react-redux';

import { actionLogin } from '../auth.actions';

const Login = () => {
  const dispatch = useDispatch();

  const onLogin = () => {
    const account = { username: 'admin', password: 'admin' };
    dispatch(
      actionLogin(account)
    );
  };

  return (
    <div>
      <button onClick={onLogin}>Login</button>
    </div>
  );
};

export default Login;
