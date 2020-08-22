import articleRoutes from './articles/article.routes';
import homeRoutes from './home/home.routes';
import Page from './containers/Page';
import Home from './home/containers/Home';

const pageRoutes = [
  {
    path: '/*',
    element: Page,
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
