<template>
  <div class="container">
    <ul class="feed-list" v-if="repos.length > 0">
      <li class="feed-item" v-for="item in repos" :key="item.id" ><FeedItem v-bind="getFeedData(item)"/></li>
    </ul>
    <p v-if="$store.state.loading">Загрузка..</p>
  </div>
</template>

<script>
import { FeedItem } from '@/components/feed';
import { mapState } from 'vuex';

export default {
  name: 'FeedList',
  components: {
    FeedItem,
  },
  methods: {
    getFeedData(item) {
      return {
        name: item.name,
        description: item.description,
        owner: item.owner,
        stars: item.stargazers_count,
        forks: item.forks_count,
        language: item.language,
        date: item.created_at,
      };
    },
  },
  computed: {
    ...mapState({
      repos: (state) => state.popularRepo.data,
    }),
  },
};
</script>
