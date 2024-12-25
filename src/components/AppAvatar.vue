<template>
  <div class="avatar-wrap">
    <img class="avatar" :class="`avatar_${size}`" :src="url" :alt="alt">
  </div>
</template>

<script>
export default {
  name: 'AppAvatar',
  props: {
    url: {
      type: String,
      default: 'assets/avatar.png',
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: 'small',
    },
  },
};
</script>

<style lang="scss" scoped>
.avatar {
  &-wrap {
    border-radius: 50%;
    overflow: hidden;
  }
  &_x-small {
    width: 37px;
    height: 37px;
  }
  &_small {
    width: 44px;
    height: 44px;
  }
  &_medium {
    width: 74px;
    height: 72px;
  }
  &_large {
    width: 80px;
    height: 80px;
  }
  &_x-large {
    width: 90px;
    height: 90px;
  }
}
</style>
