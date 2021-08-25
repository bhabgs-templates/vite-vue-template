import { deserializeCallBack } from 'ht';
import mns from '@/tp_init/mock/mns.mock';

const callBack: deserializeCallBack = (a, b, c, d) => {
  mns(b);
};

export default callBack;
