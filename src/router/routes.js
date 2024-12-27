import FeedsPage from '@/pages/FeedsPage.vue';
import UserPage from '@/pages/UserPage.vue';
import NotFoundPage from '@/pages/NotFoundPage.vue';

export default [
  {
    path: '/',
    component: FeedsPage,
    name: 'feeds',
  },
  {
    path: '/user',
    component: UserPage,
    name: 'user',
  },
  {
    path: '/user/:id(\\d+)',
    component: UserPage,
    props: true,
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundPage,
  },
];
