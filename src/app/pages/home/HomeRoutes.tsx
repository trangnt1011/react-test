import React from 'react';
import { useRoutes } from 'react-router-dom';

import Home from './Home';

export default function HomeRoutes() {
  const element = useRoutes([
    { path: 'home', element: <Home /> }
  ]);

  return element;
}
