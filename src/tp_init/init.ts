/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataModel, graph, List, deserializeCallBack } from 'ht';

interface TPINIT {
  callBack: deserializeCallBack;
  json: string;
  dom?: unknown | HTMLDivElement;
}

export interface PROMISETP {
  json: any;
  dm: DataModel | null;
  gv: graph.GraphView | null;
  data: List | null;
  reload: (url: string, cb: deserializeCallBack) => void;
}

export default (opt: TPINIT) => {
  const dom = opt.dom as HTMLDivElement;
  const graphView = new ht.graph.GraphView();
  if (dom) {
    graphView.addToDOM(dom);
  }
  return new Promise<PROMISETP>((res, rej) => {
    graphView.deserialize('jsons/index.json', (json, dm, gv, data) => {
      if (json.title) document.title = json.title;
      gv.setMovableFunc(() => false);
      opt.callBack(json, dm, gv, data);
      res({
        json,
        dm,
        gv,
        data,
        reload(url, cb) {
          dm.clear();
          gv.deserialize(url, cb);
        },
      });
    });
  });
};
