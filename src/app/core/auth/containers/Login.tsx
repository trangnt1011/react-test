import React from 'react';
import { useDispatch } from 'react-redux';

import { loginUser } from '../auth.actions';

const Login = () => {
  const dispatch = useDispatch();

  const onLogin = () => {
    dispatch(loginUser('admin', 'admin'));
  };

  return (
    <div>
      <button type="button" onClick={onLogin}>Login</button>
    </div>
  );
};

export default Login;
