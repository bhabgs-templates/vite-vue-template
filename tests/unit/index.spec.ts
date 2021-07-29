import { mount } from '@vue/test-utils';
import bTs from '../../testFiles/b';
import dVue from '../../testFiles/d.vue';

test('test-ts', () => {
  expect(bTs(1, 2)).toBe(3);
});

it('test-vue', () => {
  const Comp = {
    template: `<div><dVue /></div>`,
  };
  const wrapper = mount(Comp, {
    global: {
      components: {
        dVue,
      },
    },
  });

  expect(wrapper.findComponent({ name: 'HelloWorld' }).text()).toContain(
    'Hello Jest',
  );
});
