<template>
  <ul class="users-list">
    <li class="user-item" v-for="user in users" :key="user.id">
      <UserItem :url="user.url" :alt="user.username" :size="user.size" :userName="user.username"/>
    </li>
  </ul>
</template>

<script>
import { UserItem } from '../userItem';

export default {
  name: 'UsersList',
  components: {
    UserItem,
  },
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.users-list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.user {
  &-item {
    cursor: pointer;
    margin-right: 31px;

    &:last-child {
      margin-right: 0;
    }
  }
}

</style>
