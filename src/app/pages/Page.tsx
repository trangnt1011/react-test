import React from 'react';
import { Outlet } from 'react-router-dom';

import RouteOutlet from '@shared/components/RouterOutlet';

const Page = () => {
  return (
    <div className="pages-container">
      {/* <RouteOutlet routes={routes} /> */}
      Page component works!
      <Outlet />
    </div>
  );
};

export default Page;
