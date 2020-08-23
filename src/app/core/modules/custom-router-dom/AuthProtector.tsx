import React from 'react';

export const AuthProtector = (route) => {
  const token = null;
  return token ? <route.element /> : <div>AuthProtector component works!</div>;
};
