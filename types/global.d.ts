import vitevuu from 'vitevuu';
import Store from '@/config/install';
import { instance } from '@/api';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: typeof Store;
    $vitevuu: typeof vitevuu;
    $axios: typeof instance;
  }
}

declare global {
  type classes = Record<string, Partial<CSSStyleDeclaration>>;
  type BaseObj<T = unknown> = Record<string, T>;
}
