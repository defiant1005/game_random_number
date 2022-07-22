<template>
  <div class="send__container">
    <el-button :disabled="is_send_disabled || is_end" class="send__main-btn" type="success" @click="send_main">Проверить</el-button>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'SendBtn',
  props: {
    is_send_disabled: {
      required: true
    },
    is_end: {
      required: true
    },
  },
  setup(props, context) {
    const send_main = () => {
      context.emit('send_main')
    }
    return {
      send_main
    }
  }
});
</script>
<style>
.send__main-btn {
  margin-left: 20px !important;
  height: 50px !important;
  width: 200px !important;
  color: black !important;
  font-size: 20px !important;
}

</style>