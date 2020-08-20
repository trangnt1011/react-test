import ArticleDetail from './containers/ArticleDetail';
import ArticleList from './containers/ArticleList';

const articleRoutes = [
  {
    path: '/articles',
    children: [
      {
        path: '/',
        element: ArticleList,
        exact: true
      },
      {
        path: '/:id',
        element: ArticleDetail
      }
    ]
  }
];

export default articleRoutes;
