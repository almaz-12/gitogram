<template>
  <div class="logo">
    <Logo/>
  </div>
  <ul class="buttons">
    <div class="buttons-item buttons-item_home">
      <Icon name="Home"/>
    </div>
    <div class="buttons-item buttons-item_user">
      <Avatar :url="authUser.url" :alt="authUser.alt" :size="authUser.size"/>
    </div>
    <div class="buttons-item buttons-item_logout">
      <Icon name="Logout"/>
    </div>
  </ul>
</template>

<script>
import { Logo } from '@/components/logo';
import { Avatar } from '@/components/avatar';
import { Icon } from '@/icons';

export default {
  name: 'VHeader',
  components: {
    Icon,
    Logo,
    Avatar,
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
