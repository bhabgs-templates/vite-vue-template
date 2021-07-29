import { mount } from '@vue/test-utils';
import cTsx from '../../testFiles/c';

it('test-vue-tsx', () => {
  const Comp = {
    template: `<div><cTsx /></div>`,
  };
  const wrapper = mount(Comp, {
    global: {
      components: {
        cTsx,
      },
    },
  });

  expect(wrapper.findComponent({ name: 'HelloWorld' }).text()).toContain(
    'Hello Jest',
  );
});
