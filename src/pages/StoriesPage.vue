<template>
  <div class="wrapper-inner">
    <header class="header">
      <div class="x-container">
        <button class="logo-btn"
                @click="$router.push({name: 'feeds'})">
          <AppLogo color="logo_white"></AppLogo>
        </button>
        <button class="close-btn"
                @click="$router.push({name: 'feeds'})">
          <div class="icon icon_close">
            <AppIcon name="Close" />
          </div>
        </button>
      </div>
    </header>
    <div class="content">
      <StoriesSlider :initSlide="getInitSlide"/>
    </div>
  </div>
</template>
<script>
import StoriesSlider from '@/components/StoriesSlider.vue';
import AppIcon from '@/icons/AppIcon.vue';
import AppLogo from '@/components/AppLogo.vue';

export default {
  name: 'StoriesPage',
  components: {
    StoriesSlider,
    AppIcon,
    AppLogo,
  },
  computed: {
    getInitSlide() {
      return Number(this.$route.query.s);
    },
  },
};
</script>

<style lang="scss">
.wrapper-inner {
  width: 100%;
  height: 100%;
  background-color: #000000;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.header {
  margin-top: 50px;

  .x-container {
    display: flex;
    justify-content: space-between;
  }
}

.icon_close {
  width: 23px;
  color: #FFFFFF;
}

.content {
  margin-top: 7%;
  overflow:hidden;
}
</style>
