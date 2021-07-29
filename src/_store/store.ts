import { ReactiveEffect } from 'vue';

/* eslint-disable @typescript-eslint/no-empty-interface */
export interface StoreDef<T = ReactiveEffect> {
  state: T;
  actions?: Record<string, () => void>;
  mutations?: Record<string, () => void>;
  getters?: Record<keyof T, () => T[keyof T]> | Record<string, unknown>;
}

interface Store<T> extends StoreDef<T> {}

class Store<T> {
  constructor(opt: StoreDef<T>) {
    this.state = opt.state;
    const newOpt = {
      actions: opt.actions || {},
      mutations: opt.mutations || {},
      getters: opt.getters || undefined,
    };
    this.init(newOpt);
  }

  public getters = {};

  private init(
    opt: Pick<StoreDef<T>, 'actions' | 'getters' | 'mutations'>,
  ): void {
    console.log(opt);
  }

  public state!: T;
}

export default Store;
