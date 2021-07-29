import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  setup() {
    return () => (
      <div>
        <h1>Hello Jest</h1>
      </div>
    );
  },
});
