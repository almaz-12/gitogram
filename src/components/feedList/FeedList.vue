<template>
  <div class="container">

    <SlideItem :active="active" content="A beautiful theme extension for ComfyUI that adds festive touches with dynamic backgrounds, snowfall effects, and animated node connections"/>
    <ul class="feed-list" v-if="items.length > 0">
      <li class="feed-item" v-for="item in items" :key="item.id" ><FeedItem v-bind="getFeedData(item)"/></li>
    </ul>
    <p v-if="loading">Загрузка..</p>
  </div>
</template>

<script>
import { FeedItem } from '@/components/feed';
import { getPopularRepo } from '@/api/rest/getPopularRepo';
import SlideItem from '../SlideItem.vue';

export default {
  name: 'FeedList',
  components: {
    FeedItem,
    SlideItem,
  },
  data() {
    return {
      items: [],
      loading: true,
      active: false,
    };
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
  async created() {
    try {
      const { data } = await getPopularRepo();

      this.items = data.items;
    } catch (error) {
      console.log(error);
    } finally {
      this.loading = false;
    }
  },
  mounted() {
    setTimeout(() => {
      this.active = true;
    }, 0);
  },
};
</script>
