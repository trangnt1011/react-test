import Login from './containers/Login';
import Register from './containers/Register';
import Auth from './Auth';

const authRoutes = [
  {
    path: 'auth',
    element: Auth,
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
