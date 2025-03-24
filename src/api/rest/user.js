import { makeRequest } from '@/api/request';

export const getUser = () => makeRequest({
  url: '/user',
});
