import { mount } from '@vue/test-utils';
import eJsx from '../../testFiles/e';

it('test-vue-jsx', () => {
  const Comp = {
    template: `<div><eJsx /></div>`,
  };
  const wrapper = mount(Comp, {
    global: {
      components: {
        eJsx,
      },
    },
  });

  expect(wrapper.findComponent({ name: 'HelloWorld' }).text()).toContain(
    'Hello Jest',
  );
});
