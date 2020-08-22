import React from 'react';
import RouteOutlet from '@shared/components/RouterOutlet';

const Auth = ({ routes }) => {
  return (
    <div className="auth-page">
      <RouteOutlet routes={routes} />
    </div>
  );
};

export default Auth;
