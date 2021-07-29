// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createApp } from 'vue';
import Store from './config/install';
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: typeof Store;
  }
}
