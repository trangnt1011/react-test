import articleRoutes from './articles/article.routes';
import homeRoutes from './home/home.routes';

const pageRoutes = [
  {
    path: 'articles',
    children: [
      ...articleRoutes,
    ]
  },
  ...homeRoutes
];

export default pageRoutes;
