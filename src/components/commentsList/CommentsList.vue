<template>
  <ul v-if="comments.length > 0" class="comments-list">
    <li class="comments-item" v-for="comment in comments" :key="comment.id">
      <CommentItem :username="comment.username" :comment="comment.comment"/>
    </li>
  </ul>
  <div v-else class="no-comments">No comments</div>
</template>

<script>
import { CommentItem } from '../commentItem';

export default {
  name: 'CommentsList',
  components: {
    CommentItem,
  },
  data() {
    return {
      comments: [
        {
          id: 1,
          username: 'Almaz',
          comment: 'Default text',
        },
        {
          id: 2,
          username: 'Almaz',
          comment: 'Default text',
        },
        {
          id: 3,
          username: 'Almaz',
          comment: 'Default text',
        },
      ],
    };
  },
};
</script>
