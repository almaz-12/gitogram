<template>
  <ul class="users-list">
    <li class="user-item" v-for="(user, index) in users" :key="user.id" @click="goToStories(index)" @keydown="goToStories(index)">
      <UserItem :url="user.owner.avatar_url" :alt="user.owner.login" :size="'large'" :userName="user.owner.login"/>
    </li>
  </ul>
</template>

<script>
import UserItem from '@/components/UserItem.vue';

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
  created() {
    console.log(this.users);
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
