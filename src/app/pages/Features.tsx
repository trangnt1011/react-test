import React from 'react';

import ArticleRoutes from './articles/ArticleRoutes';
import HomeRoutes from './home/HomeRoutes';

const Features = () => {
  return (
    <div>
      <HomeRoutes />
      <ArticleRoutes />
    </div>
  );
};

export default Features;
