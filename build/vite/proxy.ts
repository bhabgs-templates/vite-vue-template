import { ProxyOptions } from 'vite';

export default (): Record<string, string | ProxyOptions> => {
  return {
    '/tp-licence/': {
      target: 'http://192.168.5.211/tp-licence/',
      ws: false,
      rewrite: (path) => path.replace(/^\/tp-licence/, ''),
    },
    '/api/': 'http://192.168.5.183',
  };
};
