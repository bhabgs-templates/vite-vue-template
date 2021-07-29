<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';

  // vue2
  // export default {
  //   name: 'HelloWorld',
  //   data() {
  //     return {
  //       msg: 'Hello Jest',
  //     };
  //   },
  // };

  // vue3
  export default {
    name: 'HelloWorld',
    setup() {
      const msg = ref('Hello Jest');

      return {
        msg,
      };
    },
  };

  // ts
  // export default defineComponent({
  //   name: 'HelloWorld',
  //   setup() {
  //     const msg = ref('Hello Jest');

  //     return {
  //       msg,
  //     };
  //   },
  // });
</script>
