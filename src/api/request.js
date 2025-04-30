import axios from 'axios';
import { BASE_GH_API_URL } from '@/common/constants';

const token = localStorage.getItem('token');

if (token) {
  axios.defaults.headers.Authorization = `token ${token}`;
}

export const makeRequest = ({
  url, method = 'get', data = {}, withBaseUrl = true, headers = {},
}) => axios({
  url,
  method,
  data,
  baseURL: withBaseUrl ? BASE_GH_API_URL : '',
  headers: {
    ...headers,
  },
});
