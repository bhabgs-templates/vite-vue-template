import { defineComponent, onMounted } from 'vue';
import { checkUser } from 'vitevuu';
import tpInit from '@/tpInit';

export default defineComponent({
  async beforeRouteEnter(to, from, next) {
    const res = await checkUser.check(false);
    if (res.type === 'ok') {
      next();
    } else {
      next({
        path: `/login`,
      });
    }
  },
  setup() {
    onMounted(() => {
      tpInit(document.getElementById('tp'), 2000);
    });
    return () => (
      <div class='tp_box'>
        <div
          id='tp'
          style={{
            position: 'relative',
          }}
        ></div>
      </div>
    );
  },
});
