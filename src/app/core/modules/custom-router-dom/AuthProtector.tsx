import React from 'react';
import { Route, Navigate } from 'react-router-dom';

function checkAuthentication(): boolean {
  const userId = localStorage.getItem('USER_ID');
  const token = localStorage.getItem('ACCESS_TOKEN');

  if (userId && token) {
    return true;
  } else {
    return false;
  }
}

export function AuthProtector(route) {
  return checkAuthentication() ?
    <route.element /> :
    <Navigate to="/auth/login" />;
}
