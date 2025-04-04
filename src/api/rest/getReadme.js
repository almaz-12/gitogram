import { makeRequest } from '@/api/request';

export const getReadme = ({ owner, repo }) => {
  const contentHeader = 'application/vnd.github.v3.html+json';

  return makeRequest({
    url: `/repos/${owner}/${repo}/readme`,
    headers: {
      accept: contentHeader,
    },
  });
};
