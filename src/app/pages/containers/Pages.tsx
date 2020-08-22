import React from 'react';
import RouteOutlet from '@shared/components/RouterOutlet';

const Pages = ({ routes }) => {
  return (
    <div className="pages-container">
      <RouteOutlet routes={routes} />
    </div>
  );
};

export default Pages;
