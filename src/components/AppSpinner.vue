<template>
  <div class="spinner" :class="color"></div>
</template>

<script>
export default {
  name: 'AppSpinner',
  props: {
    color: {
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">
  .spinner {
    margin: 5px auto;
    text-indent: -9999em;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: #31AE54;
    background: -moz-linear-gradient(left, #31AE54 10%, rgba(255, 255, 255, 0) 42%);
    background: -webkit-linear-gradient(left, #31AE54 10%, rgba(255, 255, 255, 0) 42%);
    background: -o-linear-gradient(left, #31AE54 10%, rgba(255, 255, 255, 0) 42%);
    background: -ms-linear-gradient(left, #31AE54 10%, rgba(255, 255, 255, 0) 42%);
    background: linear-gradient(to right, #31AE54 10%, rgba(255, 255, 255, 0) 42%);
    position: relative;
    -webkit-animation: load3 1.4s infinite linear;
    animation: load3 1.4s infinite linear;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);

    &:before {
      width: 50%;
      height: 50%;
      background: #31AE54;
      border-radius: 100% 0 0 0;
      position: absolute;
      top: 0;
      left: 0;
      content: '';
    }

    &:after {
      background: #ffffff;
      width: 75%;
      height: 75%;
      border-radius: 50%;
      content: '';
      margin: auto;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }

    &.white {
      background: #FFFFFF;
      background: -moz-linear-gradient(left, #FFFFFF 10%, rgba(255, 255, 255, 0) 42%);
      background: -webkit-linear-gradient(left, #FFFFFF 10%, rgba(255, 255, 255, 0) 42%);
      background: -o-linear-gradient(left, #FFFFFF 10%, rgba(255, 255, 255, 0) 42%);
      background: -ms-linear-gradient(left, #FFFFFF 10%, rgba(255, 255, 255, 0) 42%);
      background: linear-gradient(to right, #FFFFFF 10%, rgba(255, 255, 255, 0) 42%);

      &:before {
        background: #FFFFFF;
      }
    }
  }

  @-webkit-keyframes load3 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load3 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
</style>
