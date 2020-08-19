import React from 'react';
import { useRoutes } from 'react-router-dom';

import Features from './pages/Features';

export default function AppRoutes() {
  const element = useRoutes([
    { path: '', element: <Features /> },
    // { path: 'auth', element: <Auth /> }
  ]);

  return element;
}
