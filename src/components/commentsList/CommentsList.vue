<template>
  <ul class="comments-list">
    <li class="comments-item" v-for="n in 3" :key="n"><CommentItem/></li>
  </ul>
</template>

<script>
import { CommentItem } from '../commentItem'

export default {
  name: 'CommentsList',
  components: {
    CommentItem
  }
}
</script>
