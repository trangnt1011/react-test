import articleRoutes from './articles/article.routes';
import homeRoutes from './home/home.routes';
import Page from './Page';

const pageRoutes = [
  {
    path: 'home',
    element: Page,
    children: [
      ...homeRoutes,
      ...articleRoutes
    ]
  }
];

export default pageRoutes;
