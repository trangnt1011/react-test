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

export function AuthProtector({ Component }) {
  return checkAuthentication() ?
    <Component /> :
    <Navigate to="/auth/login" />;
}
