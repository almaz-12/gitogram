<template>
  <div :class="{ active: isActive }" class="progress">
    <div ref="indicator" class="indicator"></div>
  </div>
</template>

<script>
export default {
  name: 'AppProgress',
  emits: ['onFinish'],
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    emitOnFinish() {
      if (this.isActive) {
        console.log('end-----emitOnFinish');
        this.$emit('onFinish');
      }
    },
  },
  mounted() {
    this.$refs.indicator.addEventListener('transitionend', () => {
      this.emitOnFinish();
    });
  },
  beforeUnmount() {
    this.$refs.indicator.removeEventListener('transitionend', this.emitOnFinish);
  },
};
</script>

<style lang="scss">
.progress {
  height: 5px;
  background: rgba(49, 174, 84, 0.3);
  border-radius: 1px;
  position: relative;
  overflow: hidden;

  &.active {
    .indicator {
      width: 100%;
    }
  }
}

.indicator {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 0;
  background: #31AE54;
  transition: 7s;
}
</style>
