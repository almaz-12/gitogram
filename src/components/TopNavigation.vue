<template>
  <div class="logo">
    <AppLogo/>
  </div>
  <ul class="buttons">
    <div class="buttons-item buttons-item_home">
      <router-link :to="{ name: 'feeds' }">
        <AppIcon name="Home"/>
      </router-link>
    </div>
    <div class="buttons-item buttons-item_user">
      <router-link :to="{ name: 'user' }">
        <AppAvatar :url="authUser.url" :alt="authUser.alt" :size="authUser.size"/>
      </router-link>
    </div>
    <div class="buttons-item buttons-item_logout">
      <AppIcon name="Logout"/>
    </div>
  </ul>
</template>

<script>
import AppIcon from '@/icons/AppIcon.vue';
import AppLogo from '@/components/AppLogo.vue';
import AppAvatar from '@/components/AppAvatar.vue';

export default {
  name: 'TopNavigation',
  components: {
    AppIcon,
    AppLogo,
    AppAvatar,
  },
  data() {
    return {
      authUser: {
        url: '/assets/avatar.png',
        alt: 'user',
        size: 'small',
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.logo {
  width: 174px;
  height: 35px;
  color: #000;
}
.buttons {
  display: flex;
  align-items: center;

  &-item {
    cursor: pointer;
    color: #000;

    &_home {
      width: 24px;
      height: 25px;
    }

    &_user {
      margin-left: 23px;
    }

    &_logout {
      width: 25px;
      height: 20px;
      margin-left: 23px;
    }
  }
}

</style>
