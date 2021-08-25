import { defineComponent, reactive, onMounted, watch } from 'vue';
import { RadioGroup, RadioButton } from 'ant-design-vue';
import init from '@/tp_init/init';
import tpDataBase from '@/tp_init/base';

const aradio = RadioGroup;
const aradioButton = RadioButton;
export default defineComponent({
  setup() {
    const radio = reactive({
      list: tpDataBase,
      index: 'a',
    });

    onMounted(async () => {
      const { dm, gv, reload } = await init({
        json: radio.list[0].json,
        dom: document.getElementById('tp'),
        callBack: radio.list[0].callBack,
      });

      watch(
        () => radio.index,
        (e) => {
          const item = radio.list.find((n) => n.val === e);

          if (item) {
            reload(item.json, item.callBack);
          }
        },
      );
    });

    return () => (
      <div class='tp_box'>
        <aradio value={radio.index}>
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
        </aradio>
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
