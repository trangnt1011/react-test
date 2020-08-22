import articleRoutes from './articles/article.routes';
import homeRoutes from './home/home.routes';
import Pages from './containers/Pages';
import Home from './home/containers/Home';

const pageRoutes = [
  {
    path: '/*',
    element: Pages,
    children: [
      {
        path: '/',
        element: Home
      },
      ...homeRoutes,
      ...articleRoutes
    ]
  }
];

export default pageRoutes;
