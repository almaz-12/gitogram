<template>
  <div>
    <AppHeader>
      <template #top>
        <TopNavigation />
      </template>
      <template #bottom>
        <UsersList :users="users"/>
      </template>
    </AppHeader>
    <FeedList />
  </div>
</template>
<script>
import AppHeader from '@/components/AppHeader.vue';
import TopNavigation from '@/components/TopNavigation.vue';
import { UsersList } from '@/components/usersList';
import { FeedList } from '@/components/feedList';
import users from '@/components/usersList/data.json';

export default {
  name: 'PageFeeds',
  components: {
    AppHeader,
    TopNavigation,
    FeedList,
    UsersList,
  },
  data() {
    return {
      users,
    };
  },
};
</script>
<style lang="scss" scoped>
.feed-item+.feed-item {
  margin-top: 24px;
}
</style>
