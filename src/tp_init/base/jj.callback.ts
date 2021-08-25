import { deserializeCallBack } from 'ht';
import jj from '@/tp_init/mock/jj.mock';

const callBack: deserializeCallBack = (a, b, c, d) => {
  jj(b, c);
};

export default callBack;
