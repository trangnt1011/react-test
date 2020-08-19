import React from 'react';
import { Outlet } from 'react-router-dom';

import { Footer, Header } from '@shared/components/layout';

const Features = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Features;
