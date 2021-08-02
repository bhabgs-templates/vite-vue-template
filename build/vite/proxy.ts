import { ProxyOptions } from 'vite';

export default (): Record<string, string | ProxyOptions> => {
  return {
    // '/*/': {
    //   target: ${otherIp},
    //   ws: false,
    //   changeOrigin: true,
    // },
    // '/api/': {
    //   target: ip,
    //   ws: false,
    //   changeOrigin: true,
    // },
  };
};
