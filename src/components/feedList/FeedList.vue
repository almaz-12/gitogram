<template>
  <ul class="feed-list">
    <li class="feed-item" v-for="n in 2" :key="n"><FeedItem :date="date"/></li>
  </ul>
</template>

<script>
import { FeedItem } from '@/components/feed';

export default {
  name: 'FeedList',
  components: {
    FeedItem,
  },
  data() {
    return {
      date: '15 may',
    };
  },
};
</script>
