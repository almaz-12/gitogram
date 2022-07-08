<template>
  <div class="feed">
    <div class="c-feed">
      <div class="feed-header">
        <div class="feed-user">
          <div class="feed-user-avatar">
            <Avatar :url="user.url" :alt="user.username" :size="user.username"/>
          </div>
          <div class="feed-user-name">{{user.username}}</div>
        </div>
      </div>
      <div class="feed-content">
        Content
      </div>
      <div class="feed-comments">
        <Toggler @onToggle="onToggle"/>
        <div class="comments" v-show="show">
          <CommentsList/>
        </div>
      </div>
      <div class="feed-date">{{date}}</div>
    </div>
  </div>
</template>

<script>
import { Toggler } from '../toggler'
import { CommentsList } from '../commentsList'
import { Avatar } from '../avatar'

export default {
  name: 'FeedItem',
  data () {
    return {
      show: false,
      user: {
        url: 'assets/avatar.png',
        username: 'username',
        size: 'small'
      }
    }
  },
  components: {
    Toggler,
    CommentsList,
    Avatar
  },
  methods: {
    onToggle (status) {
      this.show = status
    }
  },
  props: {
    date: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.c-feed {
  position: relative;
  max-width: 980px;
  margin: auto;
  padding-top: 32px;
}
.feed {
  &-user {
    display: flex;
    align-items: center;

    &-avatar {
      margin-right: 14px;
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
