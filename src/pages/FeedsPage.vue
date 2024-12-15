<template>
  <div>
    <Header>
      <template #top>
        <VHeader />
      </template>
      <template #bottom>
        <UsersList :users="users"/>
      </template>
    </Header>
    <FeedList />
  </div>
</template>
<script>
import { Header } from '@/components/header';
import { VHeader } from '@/components/vHeader';
import { UsersList } from '@/components/usersList';
import { FeedList } from '@/components/feedList';
import users from '@/components/usersList/data.json';

export default {
  name: 'FeedsPage',
  components: {
    Header,
    VHeader,
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
