import { defineComponent, reactive, onMounted, watch } from 'vue';
import { RadioGroup, RadioButton } from 'ant-design-vue';
import { checkUser } from 'vitevuu';
import { useRoute } from 'vue-router';
import init from '@/tp_init/init';
import tpDataBase from '@/tp_init/base';

const aradio = RadioGroup;
const aradioButton = RadioButton;
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
    const radio = reactive({
      list: tpDataBase,
      index: 'a',
    });
    const route = useRoute();

    onMounted(async () => {
      const item = radio.list.find((n) => n.val === route.params.model);
      const { dm, gv, reload } = await init({
        json: item?.json || '',
        dom: document.getElementById('tp'),
        callBack: item?.callBack,
      });

      watch(
        () => radio.index,
        (e) => {
          const nitem = radio.list.find((n) => n.val === e);
          if (nitem) {
            reload(nitem.json, nitem.callBack);
          }
        },
      );
    });

    return () => (
      <div class='tp_box'>
        {/* <aradio value={radio.index}>
          {radio.list.map((item) => (
            <aradioButton
              value={item.val}
              onClick={() => {
                radio.index = item.val;
              }}
            >
              {item.name}
            </aradioButton>
          ))}
        </aradio> */}
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
