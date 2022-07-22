<template>
  <div class="home__container">
    <AgainBtn @click="again_game"/>
    <Game
        :is_end="is_end"
        :choice_num_arr="choice_num_arr"
        :win_num="win_num"
        @choice_num="choice_num"
    />
    <SendBtn
        :is_end="is_end"
        :is_send_disabled="is_send_disabled"
        @send_main="send_main_handler"
    />
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted, Ref, ref} from 'vue';
import Game from "@/components/Game.vue";
import SendBtn from "@/components/SendBtn.vue";
import AgainBtn from "@/components/AgainBtn.vue";

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
        alert('ВЫбери цифру')
      } else if (choice_num_arr.value.includes(win_num.value)) {
        alert('win')
      } else {
        alert('lose')
      }
      is_end.value = true
    };

    const is_send_disabled = computed(() => {
      return choice_num_arr.value.length === 0
    })

    const again_game = () => {
      let random = Date.now().toString()
      win_num.value = +random.slice(random.length - 2)
      choice_num_arr.value = []
      is_end.value = false
    };

    onMounted(() => {
      let random = Date.now().toString()
      win_num.value = +random.slice(random.length - 2)
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
</style>