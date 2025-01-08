<template>
  <ul class="users-list">
    <li class="user-item" v-for="user in users" :key="user.id" @click="goToStories(user.id)" @keydown="goToStories(user.id)">
      <UserItem :url="user.url" :alt="user.username" :size="user.size" :userName="user.username"/>
    </li>
  </ul>
</template>

<script>
import UserItem from '../UserItem.vue';

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
  methods: {
    goToStories(key) {
      this.$router.push({ path: '/stories', query: { s: key } });
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
