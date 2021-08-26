import mns from './mkq/mns.callback';
import jj from './mkq/jj.callback';

export default [
  {
    val: 'mns',
    name: '煤泥水',
    json: 'jsons/index.json',
    callBack: mns,
  },
  {
    val: 'jj',
    name: '加介',
    json: 'jsons/jj.json',
    callBack: jj,
  },
  {
    val: 'ydjk',
    name: '移动监控',
    json: 'jsons/ydjk.json',
    callBack: jj,
  },
];
