import React from 'react';

import RouterOutlet from '@shared/components/RouterOutlet';

const Articles = ({ routes }) => {
  return (
    <div>
      <p>This is Articles pages</p>
      <RouterOutlet routes={routes} />
    </div>
  );
};

export default Articles;
