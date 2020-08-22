import articleRoutes from './articles/article.routes';
import homeRoutes from './home/home.routes';
import Pages from './Pages';

const pageRoutes = [
  {
    path: '',
    element: Pages,
    children: [
      ...articleRoutes,
      ...homeRoutes
    ]
  }
];

export default pageRoutes;
