import React from 'react';
import { Navigate } from 'react-router-dom';

function checkAuthentication(): boolean {
  const userId = localStorage.getItem('USER_ID');
  const token = localStorage.getItem('ACCESS_TOKEN');

  if (userId && token) {
    return true;
  } else {
    return false;
  }
}

export function privateRoute(Wrapped) {
  const isAuth = checkAuthentication();
  return (props) => {
    return (
      isAuth ?
      <Wrapped /> :
      <Navigate to="/auth/login" />
    );
  };
}
