import { CSSOptions } from 'vite';
import { pathResolve } from '../utils';

export default (): CSSOptions => {
  return {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import "${pathResolve(
            'src/assets/styles/constant/antd.less',
          )}";`,
        },
        javascriptEnabled: true,
      },
    },
  };
};
