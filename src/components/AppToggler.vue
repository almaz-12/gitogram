<template>
  <button :class="['toggler-btn',{active: isActive}]" @click="onToggle">
    <span class="toggler-text">{{!this.isActive ? 'Show' : 'Hide'}} issues</span>
    <span class="toggler-icon">
      <Icon name="Triangle"/>
    </span>
  </button>
</template>

<script>
import { Icon } from '../icons';

export default {
  name: 'AppToggler',
  emits: ['onToggle'],
  components: {
    Icon,
  },
  data() {
    return {
      text: '',
      isActive: false,
    };
  },
  methods: {
    onToggle() {
      this.isActive = !this.isActive;
      this.$emit('onToggle', this.isActive);
    },
  },
};
</script>

<style lang="scss" scoped>
.toggler {
  &-btn {
    display: flex;
    align-items: center;
    padding: 0;
  }
  &-text {
    margin-right: 5px;
  }
  &-icon {
    display: flex;
    align-items: center;
    width: 10px;
    transform: rotate(180deg);
  }
  &-btn.active {
    .toggler-icon {
      transform: rotate(0deg);
    }
  }

}
</style>
