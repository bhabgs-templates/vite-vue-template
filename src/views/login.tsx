import { Component, defineComponent } from 'vue';
import logo from '@/assets/img/logo.png';
import loginBox, { EventBySubmitParams } from '@/components/loginBox';

const components: Component = {
  components: { loginBox },
};

export default defineComponent({
  components,
  setup() {
    const name = '';
    const password = '';
    return () => (
      <div class='login'>
        <div class='title'>
          <img src={logo} alt='' />
          <span>智信PC客户端</span>
        </div>
        <div class='content_login'>
          <loginBox
            v-models={[
              [name, 'username'],
              [password, 'password'],
            ]}
            autoMsg
          />
        </div>
        <p class='copyright-information'>
          Copyright © 2021 天津中新智冠信息技术有限公司
          <a href='http://www.beian.miit.gov.cn/' target='_blank'>
            津ICP备16005187号-1
          </a>
        </p>
      </div>
    );
  },
});
