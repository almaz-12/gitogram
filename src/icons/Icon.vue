<template>
  <component :is="name"/>
</template>
<script>
import * as icons from './components/templates';

export default {
  name: 'Icon',
  components: {
    ...icons,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
svg {
  width: 100%;
  height: 100%;
}
</style>
