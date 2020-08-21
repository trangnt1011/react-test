import authRoutes from '@app/core/auth/auth.routes';
import pageRoutes from './pages/page.routes';

const appRoutes = [
  ...authRoutes,
  ...pageRoutes
];

export default appRoutes;
