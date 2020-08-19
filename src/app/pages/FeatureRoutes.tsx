import React from 'react';
import { useRoutes } from 'react-router-dom';

import Articles from './articles/Articles';
import Features from './Features';
import Home from './home/Home';

export default function FeatureRoutes() {
  const element = useRoutes([
    {
      path: '',
      element: <Features />,
      children: [
        { path: '', element: <Home /> },
        { path: 'home', element: <Home /> },
        { path: 'articles/*', element: <Articles /> }
      ]
    }
  ]);

  return element;
}
