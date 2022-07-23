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

    const { is_end } = toRefs(props);
    const is_end_props:any = is_end;

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
      if (!is_end_props.value) {
        context.emit('choice_num', num)
      }
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
.end_win-num:hover {
  background: #4bfd1a !important;
}
.end_win-num:active {
  background: #28bd01 !important;
}

@media (max-width: 620px) {
  .game__container {
    width: 500px;
    height: 500px;
  }
  .game__num-container {
    width: 50px;
    height: 50px;
  }
  .game__num-wrapper {
    width: 50px;
    height: 50px;
  }
}
@media (max-width: 520px) {
  .game__container {
    width: 400px;
    height: 400px;
  }
  .game__num-container {
    width: 40px;
    height: 40px;
  }
  .game__num-wrapper {
    width: 40px;
    height: 40px;
  }
}
@media (max-width: 420px) {
  .game__container {
    width: 380px;
    height: 380px;
  }
  .game__num-container {
    width: 38px;
    height: 38px;
  }
  .game__num-wrapper {
    width: 38px;
    height: 38px;
  }
}
@media (max-width: 390px) {
  .game__container {
    width: 300px;
    height: 300px;
  }
  .game__num-container {
    width: 30px;
    height: 30px;
  }
  .game__num-wrapper {
    width: 30px;
    height: 30px;
  }
}
@media (max-width: 310px) {
  .game__container {
    width: 250px;
    height: 250px;
  }
  .game__num-container {
    width: 25px;
    height: 25px;
  }
  .game__num-wrapper {
    width: 25px;
    height: 25px;
  }
}
</style>