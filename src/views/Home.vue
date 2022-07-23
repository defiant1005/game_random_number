<template>
  <div class="home__container">
    <Game
        :is_end="is_end"
        :choice_num_arr="choice_num_arr"
        :win_num="win_num"
        @choice_num="choice_num"
    />
    <div class="home__btn-container">
      <SendBtn
          :is_end="is_end"
          :is_send_disabled="is_send_disabled"
          @send_main="send_main_handler"
      />
      <AgainBtn @click="again_game"/>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted, Ref, ref} from 'vue';
import Game from "@/components/Game.vue";
import SendBtn from "@/components/SendBtn.vue";
import AgainBtn from "@/components/AgainBtn.vue";
import { ElMessage } from 'element-plus'

export default defineComponent({
  name: 'Home',
  setup() {

    const choice_num_arr:Ref<Array<number>> = ref([]);

    const win_num = ref(0);

    const choice_num = (num:number) => {
      if (choice_num_arr.value.includes(num)) {
        choice_num_arr.value = choice_num_arr.value.filter(i => i !== num)
      } else {
        choice_num_arr.value.push(num)
      }
    };

    const is_end = ref(false);

    const send_main_handler = () => {
      if (choice_num_arr.value.length === 0) {
        alert('Выбери цифру')
      } else if (choice_num_arr.value.includes(win_num.value)) {
        ElMessage({
          showClose: true,
          message: 'Победа.',
          type: 'success',
        })
      } else {
        ElMessage({
          showClose: true,
          message: 'Ты проиграл.',
          type: 'error',
        })
      }
      is_end.value = true
    };

    const is_send_disabled = computed(() => {
      return choice_num_arr.value.length === 0
    })

    const again_game = () => {
      let random = Date.now().toString()
      let number_random = +random.slice(random.length - 2)
      if (number_random === 0) {
        win_num.value = 100
      } else {
        win_num.value = number_random
      }
      choice_num_arr.value = []
      is_end.value = false
    };

    onMounted(() => {
      let random = Date.now().toString()
      let number_random = +random.slice(random.length - 2)
      if (number_random === 0) {
        win_num.value = 100
      } else {
        win_num.value = number_random
      }
    })

    return {
      is_end,
      is_send_disabled,
      again_game,
      send_main_handler,
      choice_num,
      win_num,
      choice_num_arr,
    }
  },
  components: {
    Game: Game,
    SendBtn: SendBtn,
    AgainBtn: AgainBtn,
  }
});
</script>
<style>
.home__container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}
.home__btn-container {
  margin-left: 8px;
}
@media (max-width: 816px) {
  .home__container {
    flex-direction: column;
  }
  .home__btn-container {
    margin-top: 20px;
  }
}
</style>