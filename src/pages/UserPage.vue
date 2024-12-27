<template>
  <AppHeader>
    <template #top>
      <TopNavigation />
    </template>
    <template #bottom>
      <UsersList :users="users"/>
    </template>
  </AppHeader>
  <h2>User Page {{ id }}</h2>
</template>
<script>
import AppHeader from '@/components/AppHeader.vue';
import TopNavigation from '@/components/TopNavigation.vue';
import { UsersList } from '@/components/usersList';
import users from '@/components/usersList/data.json';

export default {
  name: 'UserPage',
  components: {
    AppHeader,
    TopNavigation,
    UsersList,
  },
  props: ['id'],
  data() {
    return {
      users,
    };
  },
};
</script>
