import Login from './containers/Login';
import Register from './containers/Register';

const authRoutes = [
  {
    path: 'auth',
    element: Login,
    children: [
      {
        path: 'login',
        element: Login
      },
      {
        path: 'register',
        element: Register
      }
    ]
  }
];

export default authRoutes;
