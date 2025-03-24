import { createRouter, createWebHistory } from 'vue-router';
import { getUser } from '@/api/rest/user';
import routes from './routes';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const authRoute = to.name === 'auth';
  if (authRoute) {
    next();
    return;
  }

  try {
    await getUser();

    next();
  } catch (error) {
    console.log(123);
    next({ name: 'auth' });
  }
});

export default router;
