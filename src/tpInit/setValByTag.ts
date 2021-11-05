import { tpu } from 'vitevuu';
import { GetTcMcArr } from 'vitevuu/lib/types/tp/ut';
import { api } from '@/api';

export default (dm: ht.DataModel) => {
  const params = tpu.getValByTcMc(dm);

  api.getList(params).then((list: any) => {
    // 获取tags
    const tagMaps = dm.getTagMap();
    if (!list.data) return;
    let tcMcArr: Array<GetTcMcArr> = [];
    for (const i in tagMaps) {
      const arrtObj = tagMaps[i].getAttrObject();
      const arr = tpu.getTcMcArr(arrtObj, i);
      tcMcArr = tcMcArr.concat(arr);
    }

    list.data.forEach((item: any) => {
      const itemData = tcMcArr.find(
        (el) => el.tc === item.tc && el.mc === item.mc,
      );
      if (itemData) {
        itemData.v = item.v || 0;
        dm.getDataByTag(itemData.tag).setAttr(
          `${itemData.name}.v`,
          `${itemData.v}`,
        );
      }
    });
  });
};
