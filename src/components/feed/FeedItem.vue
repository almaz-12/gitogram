<template>
  <div class="feed">
    <div class="c-feed">
      <Toggler @onToggle="onToggle"/>
      <div class="comments" v-show="show">
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
  data () {
    return {
      show: false
    }
  },
  components: {
    Toggler,
    CommentsList
  },
  methods: {
    onToggle (status) {
      this.show = status
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
</style>
