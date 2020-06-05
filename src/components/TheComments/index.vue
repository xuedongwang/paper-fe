<template>
  <div class="comment-wrapper">
    <AddComment/>
    <CommentList :comments="comments"/>
  </div>
</template>
<script>
import AddComment from './AddComment';
import CommentList from './CommentList';
export default {
  name: '',
  props: {
    comments: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  components: {
    AddComment,
    CommentList
  }
};
</script>
<style lang="scss" scoped>
.page-view {
}
</style>