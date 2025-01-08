<template>
  <div class="c-placeholder">
    <div class="c-placeholder__img"></div>
    <div class="c-placeholder__p"
         v-for="(item, i) in paragraphs"
         :key="i">
      <div class="line line_1"></div>
      <div class="line line_2"></div>
      <div class="line line_3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppPlaceholder',
  props: {
    paragraphs: {
      type: Number,
      default: 2,
    },
  },
};
</script>

<style scoped lang="scss">
.c-placeholder {
  &__img {
    width: 100%;
    height: 136px;
    background-color: #DEDEDE;
    margin: 0 auto;
    border-radius: 4px;
  }

  &__p {
    margin-top: 22px;

    .line {
      background-color: #DEDEDE;
      height: 14px;
      border-radius: 4px;

      &_1 {
        width: 65%;
      }

      &_2 {
        width: 80%;
        margin-top: 5px;
      }

      &_3 {
        width: 50%;
        margin-top: 5px;
      }
    }
  }
}
</style>
