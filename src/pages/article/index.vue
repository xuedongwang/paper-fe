<template>
  <div class="page-view">
    <main class="content">
      <ArticleView :article="article"/>
      <Comment :comments="comments"/>
    </main>
  </div>
</template>
<script>
import Markdown from '@/components/Markdown';
import Comment from './Comment';
import ArticleView from './ArticleView';
export default {
  name: 'Article',
  data () {
    return {
      article: {},
      comments: {}
    };
  },
  mounted () {
    this.fetchArticle();
    this.fetchComents();
  },
  methods: {
    fetchComents () {
      const api = CONFIG.API.COMMENT_LIST;
      $http.get(api)
        .then(res => {
          this.comments = res.data;
        })
    },
    fetchArticle () {
      const api = CONFIG.API.ARTICLE_INFO;
      $http.get(api)
        .then(res => {
          this.article = res.data;
        })
    },
  },
  components: {
    Markdown,
    Comment,
    ArticleView
  }
};
</script>
<style lang="scss" scoped>
.page-view {
  .content {
    max-width: 780px;
    width: 90%;
    margin: 0 auto;
  }
}
.recommendWrapper {
  margin: 20px 0;
}
.recommend {
  display: flex;
  justify-content: space-between;
}
@media only screen and (max-width: 720px) {
  .recommend {
    flex-direction: column;
  }
}
</style>