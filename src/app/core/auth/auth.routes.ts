import Login from './containers/Login';
import Register from './containers/Register';

const authRoutes = [
  {
    path: 'auth/login',
    element: Login
  },
  {
    path: 'auth/register',
    element: Register
  }
];

export default authRoutes;
