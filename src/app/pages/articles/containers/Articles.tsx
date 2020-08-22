import React from 'react';
import RouteOutlet from '@shared/components/RouterOutlet';

const Articles = ({ routes }) => {
  return (
    <div className="articles-page">
      <RouteOutlet routes={routes} />
    </div>
  );
};

export default Articles;
