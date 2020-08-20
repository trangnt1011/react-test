import React from 'react';

import { Footer, Header } from '@shared/components/layout/index';
import RouterOutlet from '@shared/components/RouterOutlet';

const Page = ({ routes }) => {
  return (
    <div className="page-wrapper">
      <Header />
      <RouterOutlet routes={routes} />
      <Footer />
    </div>
  );
}

export default Page;
