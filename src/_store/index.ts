import { reactive } from 'vue';
import Store, { StoreDef } from './store';

export const useStore = () => {};

export const createStore = (opt: StoreDef<Record<string, unknown>>): void => {
  const store = new Store<typeof opt.state>({
    state: reactive(opt.state || {}),
  });
};
