<template>
  <div class="user-avatar">
    <AppAvatar :url="url" :alt="alt" :size="size"/>
  </div>
  <div class="user-name">{{userName}}</div>
</template>

<script>
import AppAvatar from '@/components/AppAvatar.vue';

export default {
  name: 'UserItem',
  components: {
    AppAvatar,
  },
  props: {
    url: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    size: {
      type: String,
    },
    userName: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.user-avatar {
  margin-bottom: 10px;
  padding: 4px;
  border: 2px solid #A6328D;
  border-radius: 50%;
}
.user-name {
  font-size: 12px;
  text-align: center;
}
</style>
