import ArticleDetail from './containers/ArticleDetail';
import ArticleList from './containers/ArticleList';

const articleRoutes = [
  {
    path: 'articles',
    element: ArticleList,
    children: [
      {
        path: ':id',
        element: ArticleDetail
      }
    ]
  }
];

export default articleRoutes;
