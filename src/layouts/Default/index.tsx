import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import { ConfigProvider } from 'ant-design-vue';

export default defineComponent({
  render() {
    return (
      <ConfigProvider locale={zhCN}>
        <RouterView />
      </ConfigProvider>
    );
  },
});
