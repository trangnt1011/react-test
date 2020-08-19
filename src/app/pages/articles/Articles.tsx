import React from 'react';
import { Outlet } from 'react-router-dom';

import ArticleRoutes from './ArticleRoutes';

const Articles = () => {
  return (
    <div>
      This is Articles pages
      <ArticleRoutes />
    </div>
  );
};

export default Articles;
