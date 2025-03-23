import { makeRequest } from '@/api/request';

import { clientId, clientSecret } from '../../../env';

const ghAuthLink = 'https://github.com/login/oauth/authorize';
const scope = 'repo:status read:user';

export const getToken = (code) => makeRequest({
  url: 'https://github.com/login/oauth/access_token',
  method: 'post',
  data: {
    code, clientId, clientSecret,
  },
  withBaseUrl: false,
  headers: {
    'Access-Control-Allow-Origin': true,
  },
});

export const ghAuthPage = () => {
  const params = new URLSearchParams();

  params.append('client_id', clientId);
  params.append('scope', scope);

  window.location.href = `${ghAuthLink}?${params}`;
};
