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
import UsersList from '@/components/UsersList.vue';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'UserPage',
  components: {
    AppHeader,
    TopNavigation,
    UsersList,
  },
  props: ['id'],
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
