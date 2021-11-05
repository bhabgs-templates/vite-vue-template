import { tp } from 'vitevuu';
import { useRouter } from 'vue-router';
import setValByTag from './setValByTag';

export default async (dom: unknown, time: number) => {
  let timer: NodeJS.Timer;
  const router = useRouter();
  router.beforeEach(() => {
    clearInterval(timer);
  });
  const { reload, data, dm, gv } = await tp({
    callBack(a, b, c, d) {
      clearInterval(timer);
      if (time > 1000) {
        timer = setInterval(() => {
          setValByTag(b);
        }, time);
      } else {
        setValByTag(b);
      }
    },
    json: './displays/工厂/门克庆/煤泥水.json',
    dom,
  });

  return {
    reloadUrl(url: string, callBack: ht.deserializeCallBack) {
      // 更新图纸
      clearInterval(timer);
      setTimeout(() => {
        reload(url, callBack);
      }, 100);
    },
    data,
    dm,
    gv,
  };
};
