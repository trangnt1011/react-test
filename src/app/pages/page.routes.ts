import articleRoutes from './articles/article.routes';
import homeRoutes from './home/home.routes';

const pageRoutes = [
  ...articleRoutes,
  ...homeRoutes
];

export default pageRoutes;
