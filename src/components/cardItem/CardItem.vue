<template>
  <div class="card">
    <div class="card-title">{{title}}</div>
    <div class="card-content">{{content}}</div>
    <div class="card-info">
      <CardItemStats :stars="stars" :forks="forks" />
    </div>
  </div>
</template>

<script>
import CardItemStats from '@/components/CardItemStats.vue';

export default {
  name: 'CardItem',
  components: {
    CardItemStats,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },
    stars: {
      type: Number,
      required: true,
    },
    forks: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.card-title {
  margin-bottom: 15px;
  font-weight: 700;
  font-size: 26px;
  color: #292929;
}
.card-content {
  margin-bottom: 37px;
}
.info-list {
  display: flex;
  align-items: center;
}

</style>
