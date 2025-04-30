import { createRouter, createWebHistory } from 'vue-router';
import { ROUTE_NAMES } from '@/common/constants';
import { getUser } from '@/api/rest/user';
import routes from './routes';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const publicRoutes = [ROUTE_NAMES.AUTH, ROUTE_NAMES.ERROR_404];

router.beforeEach(async (to, from, next) => {
  const isPublicRoute = publicRoutes.includes(to.name);
  const isAuthRoute = to.name === ROUTE_NAMES.AUTH;

  if (isPublicRoute) {
    next();
    return;
  }

  try {
    await getUser();

    if (isAuthRoute) {
      next({ name: ROUTE_NAMES.FEEDS });
      return;
    }

    next();
  } catch (error) {
    if (!isAuthRoute) {
      next({ name: ROUTE_NAMES.AUTH, query: { redirect: to.fullPath } });
    } else {
      next();
    }
  }
});

export default router;
