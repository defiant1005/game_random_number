<template>
  <div class="again__container">
    <button class="again__main-btn" @click="again_game">Заново</button>
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
  margin-right: 20px;
  height: 50px;
  width: 200px;
  background: #ff6481;
  color: black;
  font-size: 20px;
  border-radius: 8px;
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