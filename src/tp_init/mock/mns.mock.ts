/* eslint-disable camelcase */
import { DataModel } from 'ht';
import { computedPercentage, compunted } from '@/tp_init/mock/util';

export default (dm: DataModel) => {
  const jnj_620 = dm.getDataByTag('jnj_620');
  const jnj_621 = dm.getDataByTag('jnj_621');
  const nsj_601 = dm.getDataByTag('nsj_601');
  const nsj_602 = dm.getDataByTag('nsj_602');
  const flx = dm.getDataByTag('flx');
  const shuitong_352 = dm.getDataByTag('shuitong_352');
  const shuitong_361 = dm.getDataByTag('shuitong_361');
  const sc_359 = dm.getDataByTag('sc_359');
  const sc_600 = dm.getDataByTag('sc_600');
  function jnj() {
    jnj_620.setAttr('pl.v', compunted(35, 50, 2));
    jnj_620.setAttr('jbtyw.v', compunted(50, 70, 2));
    jnj_620.setAttr('cyxyw.v', compunted(40, 60, 2));
    jnj_620.setAttr('gysc.v', compunted(40, 80, 0));

    jnj_621.setAttr('pl.v', compunted(35, 50, 2));
    jnj_621.setAttr('jbtyw.v', compunted(50, 70, 2));
    jnj_621.setAttr('cyxyw.v', compunted(40, 60, 2));
    jnj_621.setAttr('gysc.v', compunted(40, 80, 0));
  }
  function nsj() {
    nsj_601.setAttr('by.v', compunted(0.4, 0.5, 2));
    nsj_601.setAttr('cqcgd.v', compunted(2.0, 2.4, 2));
    nsj_602.setAttr('by.v', compunted(0.4, 0.5, 2));
    nsj_602.setAttr('cqcgd.v', compunted(2.0, 2.4, 2));
  }
  function flxFun() {
    flx.setAttr('card.v', compunted(60, 80, 2));
  }
  function st() {
    shuitong_352.setAttr('v', computedPercentage(0.65, 0.7, 1));
    shuitong_361.setAttr('v', computedPercentage(0.65, 0.7, 1));
  }

  function sc() {
    sc_359.setAttr('sc.v', computedPercentage(0.65, 0.7, 2));
    sc_600.setAttr('sc.v', computedPercentage(0.65, 0.7, 2));
  }

  function stim() {
    const tim = Math.random() * 10000;
    setTimeout(() => {
      jnj();
      nsj();
      flxFun();
      st();
      sc();
      // 递归调用
      stim();
    }, tim);
  }
  stim();
};
