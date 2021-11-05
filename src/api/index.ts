import { instance } from './axios';

const api = {
  async getList(list: Array<{ tc: string; mc: string }>) {
    const res = await instance.post('/data/v2/get/list', list);
    return res;
  },
};
const set = {
  async setSingle(list: Array<{ tc: string; mc: string; v: string }>) {
    const res = await instance.post('data/v2/set', list);
    return res;
  },
  async setList(list: Array<{ tc: string; mc: string; v: string }>) {
    const res = await instance.post('data/v2/set/list', list);
    return res;
  },
};

export { instance, api, set };

export default {
  api,
  instance,
};
