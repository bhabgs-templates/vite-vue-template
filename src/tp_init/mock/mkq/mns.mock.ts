import { DataModel } from 'ht';
import { GetTcMcArr, getTcMcArr } from '@/tp_init/mock/util';

export default (dm: DataModel) => {
  const tagMaps = dm.getTagMap();
  let tcMcArr: Array<GetTcMcArr> = [];
  for (const i in tagMaps) {
    const arrtObj = tagMaps[i].getAttrObject();
    const arr = getTcMcArr(arrtObj, i);
    tcMcArr = tcMcArr.concat(arr);
  }
};
