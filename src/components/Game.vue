<template>
  <div class="game__container">
    <div v-for="num in numbers" :key="num" class="game__num-wrapper" :class="{'cursor_pointer': !is_end}" @click="choice_num(num)" >
      <div class="game__num-container" :class="[{choices_num: isActiveNum(num)}, {'end_lose-num': is_end}, {'end_win-num': isNumWin(num) && is_end}]">{{num}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, Ref, ref, toRefs} from 'vue';

export default defineComponent({
  name: 'Game',
  props: {
    choice_num_arr: {
      required: true
    },
    is_end: {
      required: true
    },
    win_num: {
      required: true
    },
  },
  setup(props, context) {
    const { choice_num_arr } = toRefs(props);
    const choice_num_arr_props:any = choice_num_arr;

    const { win_num } = toRefs(props);
    const win_num_props:any = win_num;

    const numbers:any = ref([]);
    let i = 1;

    const isActiveNum = (num:number) => {
      if (choice_num_arr_props.value.includes(num)) {
        return true
      } else {
        return false
      }
    };

    const isNumWin = (num:number) => {
      return num === win_num_props.value
    }

    const choice_num = (num: number) => {
      context.emit('choice_num', num)
    };
    onMounted(() => {
      while (i < 101) {
        numbers.value.push(i)
        i++;
      }
    })



    return {
      isNumWin,
      numbers,
      isActiveNum,
      choice_num,
      choice_num_arr_props,
    }
  },
});
</script>

<style>
.game__container {
  width: 600px;
  height: 600px;
  display: flex;
  flex-wrap: wrap;
}
.game__num-container {
  width: 60px;
  height: 60px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  cursor: pointer;
  font-size: 18px;
  background: #8ef4ff;
}
.game__num-container:hover {
  background: #4feeff;
}
.game__num-container:active {
  background: #00bcd3;
}
.game__num-wrapper {
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cursor_pointer {
  cursor: pointer;
}
.choices_num {
  background: #f7ff7c !important;
}
.choices_num:hover {
  background: #f4ff3b !important;
}
.choices_num:active {
  background: #b7c201 !important;
}
.end_lose-num {
  //background: #ff0000 !important;
}
.end_win-num {
  background: #63e83f !important;
}
</style>