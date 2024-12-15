<template>
  <div class="stats">
    <div class="stats__border stats__left">
      <div class="stats__icon icon mr-4">
        <img src="@/assets/star-icon.svg" alt="">
      </div>
      <span>Star</span>
    </div>
    <div class="stats__border">
      {{ stars }}
    </div>
    <div class="stats__border">
      <div class="stats__icon icon mr-4">
        <img src="@/assets/fork-icon.svg" alt="">
      </div>
      <span>Fork</span>
    </div>
    <div class="stats__border stats__right">
      {{ forks }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Stats',
  props: {
    stars: {
      type: [Number, String],
      default: 0,
      required: true,
    },
    forks: {
      type: Number,
      default: 0,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  .stats {
    display: flex;

    &__border {
      border: 1px solid rgba(27, 31, 35, 0.15);
      display: flex;
      align-items: center;
      padding: 0 10px;
    }

    &__center {
      background: #ffffff;
    }

    &__left {
      border-radius: 6px 0px 0px 6px;
      background: #fafbfc;
    }

    &__right {
      border-radius: 0px 6px 6px 0px;
      background: #fafbfc;
    }

    &__icon {
      width: 14px;
      height: 14px;
      margin-right: 10px;

      img {
        height: 100%;
      }
    }
  }
</style>
