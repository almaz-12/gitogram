<template>
  <div class="header">
    <div class="container">
      <div class="header-top">
        <slot name="top"></slot>
      </div>
      <div class="header-bottom" v-if="$slots.bottom">
        <slot name="bottom"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>

<style lang="scss" scoped>
  .header {
    background: #fafafa;
    border-bottom: 1px solid #c6c6c8;
    padding: 42px 0 32px;

    &-top {
      display: flex;
      justify-content: space-between;
    }

    &-bottom {
      margin-top: 45px;
    }
  }
</style>
