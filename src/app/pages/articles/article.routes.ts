import ArticleDetail from './containers/ArticleDetail';
import ArticleList from './containers/ArticleList';
import Articles from './containers/Articles';

const articleRoutes = [
  {
    path: 'articles',
    element: Articles,
    children: [
      {
        path: '',
        element: ArticleList
      },
      {
        path: ':id',
        element: ArticleDetail
      }
    ]
  }
];

export default articleRoutes;
