<template>
  <button :class="['toggler-btn',{active: isActive}]" @click="onToggle">
    <span class="toggler-text">{{!this.isActive ? 'Show' : 'Hide'}} issues</span>
    <span class="toggler-icon">
      <Icon name="Toggler"/>
    </span>
  </button>
</template>

<script>
import { Icon } from '../../icons'

export default {
  name: 'Toggler',
  components: {
    Icon
  },
  data () {
    return {
      text: '',
      isActive: false
    }
  },
  methods: {
    onToggle () {
      this.isActive = !this.isActive
      this.$emit('onToggle', this.isActive)
    }
  }
}
</script>

<style lang="scss" scoped>
.toggler {
  &-btn {
    display: inline-flex;
    align-items: center;
    padding: 0;
  }
  &-icon {
    width: 10px;
    transform: rotate(180deg);
  }
  &.active {
    .toggler-icon {
      transform: rotate(0deg);
    }
  }

}
</style>
