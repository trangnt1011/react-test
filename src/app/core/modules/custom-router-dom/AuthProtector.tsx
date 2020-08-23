import React from 'react';
import { Route } from 'react-router-dom';

import Login from '@core/auth/containers/Login'

function checkAuthentication(): boolean {
  const userId = localStorage.getItem('USER_ID');
  const token = localStorage.getItem('ACCESS_TOKEN');

  if (userId && token) {
    return true;
  } else {
    return false;
  }
}

export const AuthProtector = (route) => {
  return checkAuthentication() ?
    <route.element /> :
    <Route path="auth/login" element={<Login/>} />;
};
