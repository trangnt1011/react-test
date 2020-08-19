import React from 'react';

import { Footer, Header } from '@shared/components/layout';
import ArticleRoutes from './articles/ArticleRoutes';
import HomeRoutes from './home/HomeRoutes';

const Features = () => {
  return (
    <div>
      <Header />
      <HomeRoutes />
      <ArticleRoutes />
      <Footer />
    </div>
  );
};

export default Features;
