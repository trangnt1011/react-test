import React from 'react';
import { Outlet } from 'react-router-dom';

const ArticleList = () => {
  return (
    <div>
      This is article-list page
      <Outlet/>
    </div>
  );
};

export default ArticleList;
