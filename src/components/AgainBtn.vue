<template>
  <div class="again__container">
    <el-button class="again__main-btn" @click="again_game" type="danger">Заново</el-button>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'AgainBtn',
  setup(props, context) {
    const again_game = () => {
      context.emit('again_game')
    }
    return {
      again_game
    }
  }
});
</script>
<style>
.again__main-btn {
  margin-top: 20px !important;
  height: 50px !important;
  width: 200px !important;
  color: black !important;
  font-size: 20px !important;
}
.again__main-btn:hover {
  background: #ff395f;
}
.again__main-btn:active {
  background: #e0002c;
}
@media (max-width: 400px) {
  .again__main-btn {
    margin: 0 0 20px 0;
  }
}
</style>