import axios from 'axios';

const instance = axios.create({
  baseURL: '/api/',
  timeout: 5000,
  headers: {
    'X-Custom-Header': 'foobar',
    clientType: 'app',
    'Content-Type': 'application/json;charset=UTF-8',
  },
});

const getToken = (): string => {
  return `Bearer ${sessionStorage.getItem('token')}`;
};

instance.interceptors.request.use(
  (conf) => {
    const corpId = sessionStorage.getItem('corpId');
    conf.headers.Authorization = getToken();
    if (corpId) {
      conf.headers.corpId = corpId;
    }
    return conf;
  },
  (err) => {
    return Promise.reject(err);
  },
);

instance.interceptors.response.use(
  (res) => {
    const resData = res.data;
    const status = resData.code === 'M0000';
    if (status) {
      return Promise.resolve(resData);
    }
    return Promise.resolve(resData);
  },
  (err) => {
    return Promise.reject(err);
  },
);

export { instance };

export default axios;
