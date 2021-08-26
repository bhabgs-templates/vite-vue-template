/* eslint-disable camelcase */
import { DataModel, graph } from 'ht';
import { computedTrue, computedPercentage } from '@/tp_init/mock/util';

export default (dm: DataModel, gv: graph.GraphView) => {
  const st_922 = dm.getDataByTag('st_922');
  const st_340 = dm.getDataByTag('st_340');
  const st_341 = dm.getDataByTag('st_341');
  const jj = dm.getDataByTag('jj');
  const nn = dm.getDataByTag('nn');
  const tc = dm.getDataByTag('tc');
  const tag_1 = dm.getDataByTag('tag_1');
  const tag_2 = dm.getDataByTag('tag_2');
  const tag_3 = dm.getDataByTag('tag_3');
  const tag_4 = dm.getDataByTag('tag_4');
  nn.s({
    interactive: true,
    onClick() {
      tc.setStyle('2d.visible', true);
    },
  });

  tag_1.s({
    interactive: true,
    onClick() {
      const g = tag_1.getStyle('2d.gray');
      const g2 = tag_2.getStyle('2d.gray');

      if (g2) {
        tag_1.setStyle('2d.gray', false);
      } else {
        tag_1.setStyle('2d.gray', true);
      }
    },
  });
  tag_2.s({
    interactive: true,
    onClick() {
      const g = tag_2.getStyle('2d.gray');
      const g2 = tag_1.getStyle('2d.gray');

      if (g2) {
        tag_2.setStyle('2d.gray', false);
      } else {
        tag_2.setStyle('2d.gray', true);
      }
    },
  });
  tag_3.s({
    interactive: true,
    onClick() {
      const g = tag_3.getStyle('2d.gray');
      const g2 = tag_4.getStyle('2d.gray');

      if (g2) {
        tag_3.setStyle('2d.gray', false);
      } else {
        tag_3.setStyle('2d.gray', true);
      }
    },
  });
  tag_4.s({
    interactive: true,
    onClick() {
      const g = tag_4.getStyle('2d.gray');
      const g2 = tag_3.getStyle('2d.gray');

      if (g2) {
        tag_4.setStyle('2d.gray', false);
      } else {
        tag_4.setStyle('2d.gray', true);
      }
    },
  });

  gv.addInteractorListener((e) => {
    if (e.kind === 'clickData' && e.data.getTag() !== 'nn') {
      tc.setStyle('2d.visible', false);
    }
  });

  function jjFun() {
    jj.setStyle('2d.gray', computedTrue());
    st_922.setAttr('v', computedPercentage(0.2, 1, 4));
    st_340.setAttr('v', computedPercentage(0.2, 1, 4));
    st_341.setAttr('v', computedPercentage(0.2, 1, 4));
  }

  function stim() {}
  stim();
};
