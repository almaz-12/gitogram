<template>
  <div>
    <Header>
      <template #top>
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
      <template #bottom>
        <UsersList :users="users"/>
      </template>
    </Header>
    <ul class="feed-list">
      <li class="feed-item" v-for="n in 2" :key="n"><FeedItem :date="date"/></li>
    </ul>
  </div>
</template>
<script>
import { Header } from '../../components/header';
import { Logo } from '../../components/logo';
import { Avatar } from '../../components/avatar';
import { UsersList } from '../../components/usersList';
import { FeedItem } from '../../components/feed';
import { Icon } from '../../icons';
import users from '../../components/usersList/data.json';

export default {
  name: 'Feeds',
  components: {
    Header,
    Icon,
    FeedItem,
    Logo,
    Avatar,
    UsersList,
  },
  data() {
    return {
      authUser: {
        url: '/assets/avatar.png',
        alt: 'user',
        size: 'small',
      },
      users,
      date: '15 may',
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
.feed-item+.feed-item {
  margin-top: 24px;
}
</style>
