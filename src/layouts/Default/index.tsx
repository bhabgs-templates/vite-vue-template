import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Default',
  setup() {
    return () => (
      <>
        <div class='default-layout'>default-layout</div>
      </>
    );
  },
});
