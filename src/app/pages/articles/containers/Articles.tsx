import React from 'react';
import RouteOutlet from '@shared/components/RouterOutlet';

const Articles = ({ routes }) => {
  return (
    <div>
      This is Articles.
      <RouteOutlet routes={routes} />
    </div>
  );
};

export default Articles;
