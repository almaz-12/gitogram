<template>
  <div class="feed">
    <div class="feed-wrap">
      <Toggler/>
      <div class="comments" v-show="onToggle">
       <CommentsList/>
      </div>
    </div>
  </div>
</template>

<script>
import { Toggler } from '../toggler'
import { CommentsList } from '../commentsList'

export default {
  name: 'FeedItem',
  components: {
    Toggler,
    CommentsList
  }
}
</script>
