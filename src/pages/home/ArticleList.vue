<template>
  <section class="article-wrapper">
    <div class="article-list">
      <div :key="article.id" class="article-item" v-for="article of articleList">
        <h2 class="title">
          <router-link :to="`/a/${article.id}`">{{ article.title }}</router-link>
        </h2>
        <div class="article-meta">
          <div class="create-at" :title="article.createdAt | dayjs">{{ article.createdAt | timeago }}</div>
          <div class="view-count">{{ article.commentCount | formatNumber }}次浏览</div>
          <div class="comment-count">{{ article.commentCount | formatNumber }}条评论</div>
        </div>
        <p class="description">{{ article.articleShortDesc }}</p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'ArticleList',
  props: {
    articleList: {
      type: Array,
      default () {
        return []
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.article-wrapper {
  width: 66%;
  padding: 015px;
  .article-item {
    a {
      text-decoration: none;
      color: #333;
    }
    &:not(:first-child) {
      margin-top: 30px;
    }
    .title {
      margin: 0;
      font-weight: normal;
      color: #333;
      font-size: 24px;
      word-break: break-all;
      transition: color .2s;
      &:hover {
        color: #3274ff;
      }
    }
    .article-meta {
      display: flex;
      margin-top: 10px;
      font-size: 14px;
      color: #999;
      & > div + div:before {
        content: '-';
        padding: 0 7px;
      }
    }
    .description {
      margin-top: 10px;
      line-height: 1.625;
      color: #333;
      text-align: justify;
      word-break: break-all;
    }
  }
}

@media only screen and (max-width: 768px) {
  .article-wrapper {
    width: 100%;
  }
}
</style>