<template>
  <button
    :class="[
      'button', `${theme}`, `${size}`,
      {'hover-text': withHoverText}
    ]"
    :data-hover-text="hoverText"
    :disabled="disabled"
  >
    <div class="button__loader" v-if="loading">
      <AppSpinner :color="spinner_white" />
    </div>
    <span class="btn-text" v-if="!loading">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import AppSpinner from './AppSpinner.vue';

export default {
  name: 'AppButton',
  components: {
    AppSpinner,
  },
  props: {
    size: {
      type: String,
      default: 'size_s',
    },
    theme: {
      type: String,
      default: 'theme_white',
    },
    hoverText: {
      type: String,
      default: 'default hoverText',
    },
    loading: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
    },
  },
  computed: {
    withHoverText() {
      return this.hoverText?.length;
    },
  },
};
</script>

<style lang="scss">
.button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 270px;
  height: 44px;
  border-radius: 5px;

  .btn-text {
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    color: #FFFFFF;
  }

  &.size_s {
    width: auto;
    padding: 6px 28px;
    font-size: 12px;
  }

  &.size_m {
    padding: 10px 50px;
    font-weight: bold;
    font-size: 16px;
    background: #f0f0f0;
  }

  &.theme_grey {
    background: #9E9E9E;

    &:hover {
      background: #31AE54;
      color: #fff;
    }
  }

  &.theme_green {
    background: #31AE54;
    color: #fff;

    &:hover {
      background: #9E9E9E;
    }
  }

  &.hover-text {
    &:hover {
      .btn-text {
        font-size: 0;
      }

      &:after {
        font-weight: bold;
        font-size: 16px;
        line-height: 22px;
        color: #FFFFFF;
      }
    }

    &:after {
      content: attr(data-hover-text);
      font-size: 0;
    }
  }
}
</style>
