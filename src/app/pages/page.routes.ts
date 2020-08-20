import articleRoutes from './articles/article.routes';
import homeRoutes from './home/home.routes';
import Page from './Page';

const pageRoutes = [
  {
    path: '',
    element: Page,
    routes: [
      ...articleRoutes,
      ...homeRoutes
    ]
  }
];

export default pageRoutes;
