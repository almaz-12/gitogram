<template>
  <div class="feed">
    <div class="c-feed">
      <div class="feed-header">
        <a :href="owner.html_url" class="feed-user">
          <div class="feed-user-avatar">
            <AppAvatar :url="owner.avatar_url" :alt="owner.login"/>
          </div>
          <div class="feed-user-name">{{owner.login}}</div>
        </a>
      </div>
      <div class="feed-content">
        <CardItem
          :title="language"
          :content="description"
          :stars="stars"
          :forks="forks"
        />
      </div>
      <div class="feed-comments">
        <Toggler @onToggle="onToggle"/>
        <div class="comments" v-show="show">
          <CommentsList/>
        </div>
      </div>

      <div class="feed-date">{{formattedDate}}</div>
    </div>
  </div>
</template>

<script>
import AppAvatar from '@/components/AppAvatar.vue';
import { Toggler } from '../toggler';
import { CommentsList } from '../commentsList';
import { CardItem } from '../cardItem';

export default {
  name: 'FeedItem',
  props: {
    name: {
      type: String,
      default: 'username',
    },
    description: {
      type: String,
      default: 'JavaScript framework for building interactive web applications ⚡',
    },
    forks: {
      type: Number,
      default: 0,
    },
    stars: {
      type: Number,
      default: 0,
    },
    language: {
      type: String,
      default: 'Vue.js',
    },
    date: {
      type: String,
      required: true,
    },
    owner: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      show: false,
    };
  },
  components: {
    Toggler,
    CommentsList,
    AppAvatar,
    CardItem,
  },
  computed: {
    formattedDate() {
      const date = new Date(this.date);
      return date.toLocaleString('ru', { month: 'short', day: 'numeric' });
    },
  },
  methods: {
    onToggle(status) {
      this.show = status;
    },
  },
};
</script>

<style lang="scss" scoped>
.c-feed {
  position: relative;
  max-width: 1100px;
  margin: auto;
  padding-top: 32px;
  padding-left: 15px;
  padding-right: 15px;
}
.feed {
  &-user {
    display: flex;
    align-items: center;
    text-transform: none!important;

    &-avatar {
      margin-right: 14px;
    }

    &-name {
      color: #262626;
      font-weight: 700;
      font-size: 18px;
    }
  }
  &-content {
    margin-top: 16px;
    padding: 24px 20px;
    background: #FFFFFF;
    border: 1px solid #F1F1F1;
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.07);
    border-radius: 10px;
  }
  &-comments {
    margin-top: 18px;
  }
  &-date {
    display: flex;
    margin-top: 10px;
    font-size: 12px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.4);
  }
}
</style>
