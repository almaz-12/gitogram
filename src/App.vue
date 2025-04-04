<template>
  <router-view />
  <div>{{ count }} : {{ number }} : {{ doubled }}<br><button @click="inc()">Click</button></div>
</template>

<script>
import {
  ref, reactive, toRef, toRefs, computed, watch, readonly, unref,
} from 'vue';

export default {
  name: 'App',
  setup() {
    const name = ref('Алмаз');
    const counter = reactive({
      count: 0,
      number: 1,
    });

    const { count } = toRefs(counter);

    readonly(counter);

    console.log(name);
    console.log(unref(name));

    const doubled = computed(() => counter.count * 2);

    const inc = () => {
      counter.count += 1;
      counter.number += 5;
    };

    watch(doubled, (currentVal, preValue) => {
      console.log(currentVal, preValue);
    });

    // value

    return {
      name,
      count,
      number: toRef(counter, 'number'),
      inc,
      doubled,
    };
  },
};
</script>

<style lang="scss">
@import url('@/assets/scss/global.scss');
</style>
