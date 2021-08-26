import { ProxyOptions } from 'vite';

export default (): Record<string, string | ProxyOptions> => {
  return {
    '/ht_/': {
      target: 'http://192.168.5.211/ht_/',
      ws: false,
      rewrite: (path) => path.replace(/^\/ht_/, ''),
    },
    '/api/': 'http://192.168.5.183',
  };
};
