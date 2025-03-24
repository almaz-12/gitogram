import { makeRequest } from '@/api/request';

export const getStarred = () => makeRequest({
  url: `/user/starred`,
  method: 'get',
});

export const setStarred = ({ owner, repo }) => makeRequest({
  url: `/user/starred/${owner}/${repo}`,
  method: 'put',
});

export const unStarred = ({ owner, repo }) => makeRequest({
  url: `/user/starred/${owner}/${repo}`,
  method: 'delete',
});
