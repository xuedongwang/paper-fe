<template>
  <div class="page-view">
    <main class="content">
      <ArticleView :article="article"/>
    </main>
  </div>
</template>
<script>
import Markdown from '@/components/Markdown';
import ArticleView from './ArticleView';
export default {
  name: 'Article',
  data () {
    return {
      article: {}
    };
  },
  mounted () {
    this.fetchArticle();
  },
  methods: {
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
    ArticleView
  }
};
</script>
<style lang="scss" scoped>
.page-view {
  padding-bottom: 20px;
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