<template>
  <AppHeader>
    <template #top>
      <TopNavigation />
    </template>
    <template #bottom>
      <UsersList :users="users"/>
    </template>
  </AppHeader>
  <div class="not-found">
    <h2>404</h2>
    <h3>Страница не найдена</h3>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import TopNavigation from '@/components/TopNavigation.vue';
import { UsersList } from '@/components/usersList';
import users from '@/components/usersList/data.json';

export default {
  name: 'NotFoundPage',
  components: {
    AppHeader,
    TopNavigation,
    UsersList,
  },
  data() {
    return {
      users,
    };
  },
};
</script>

<style>
  .not-found {
    padding: 50px;
    font-size: 40px;
    text-align: center;
  }
</style>
