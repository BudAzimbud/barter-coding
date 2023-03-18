import axios from 'axios';

export const api = axios.create({
  timeout: 10000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Cache-Control': 'no-store',
  },
  baseURL: 'https://fc79-103-119-62-62.ap.ngrok.io',
});
api.interceptors.request.use(
  request => {
    return request;
  },
  error => {
    Promise.reject(error);
  },
);

api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);
