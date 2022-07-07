<template>
  <div class="feed">
    <div class="toggler-wrap">
      <Toggler></Toggler>
    </div>
  </div>
</template>

<script>
import { Toggler } from '../toggler'
export default {
  name: 'FeedItem',
  components: {
    Toggler
  }
}
</script>
