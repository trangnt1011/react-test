import React from 'react';
import RouteOutlet from '@shared/components/RouterOutlet';

const Auth = ({ routes }) => {
  console.log(routes);
  return (
    <div>
      This is Auth.
      <RouteOutlet routes={routes} />
    </div>
  );
};

export default Auth;
