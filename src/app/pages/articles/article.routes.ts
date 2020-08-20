import ArticleDetail from './containers/ArticleDetail';
import ArticleList from './containers/ArticleList';

const articleRoutes = [
  {
    path: '/articles',
    element: ArticleList,
    exact: true
  },
  {
    path: '/articles/:id',
    element: ArticleDetail
  }
];

export default articleRoutes;
