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
import UsersList from '@/components/UsersList.vue';
import { FeedList } from '@/components/feedList';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'PageFeeds',
  components: {
    AppHeader,
    TopNavigation,
    FeedList,
    UsersList,
  },
  computed: {
    ...mapState({
      users: (state) => state.popularRepo.data,
    }),
  },
  methods: {
    ...mapActions({
      fetchPopularRepo: 'popularRepo/fetchPopularRepo',
    }),
  },
  async mounted() {
    this.$nextTick(async () => {
      await this.fetchPopularRepo();
    });
  },
};
</script>
<style lang="scss" scoped>
.feed-item+.feed-item {
  margin-top: 24px;
}
</style>
