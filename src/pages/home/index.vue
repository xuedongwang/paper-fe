<template>
  <div class="page-view">
    <div class="content-wrapper">
      <main class="content">
        <ArticleList :articleList="articles" />
        <CategoryList :categoryList="categories"/>
      </main>
    </div>
    <ThePagination
      :total="total"
      :currentPage="currentPage"
      @onCurrentPageChange="handleCurrentPageChange"
    />
  </div>
</template>
<script>
import ThePagination from '@/components/ThePagination';
import CategoryList from './CategoryList';
import ArticleList from './ArticleList';
export default {
  name: 'Home',
  data () {
    return {
      total: 0,
      currentPage: 1,
      pageSize: 10,
      articles: [],
      categories: []
    };
  },
  mounted () {
    this.fetchArticle();
    this.fetchCategory();
  },
  methods: {
    handleCurrentPageChange (currentPage) {
      this.currentPage = currentPage;
      this.fetchArticle();
    },
    fetchCategory () {
      const api = CONFIG.API.CATEGORY_LIST;
      $http.get(api)
        .then(res => {
          const { list } = res.data;
          this.categories = list;
        })
    },
    fetchArticle () {
      const api = CONFIG.API.ARTICLE_LIST;
      $http.get(api)
        .then(res => {
          const { total, currentPage, pageSize, list } = res.data;
          this.total = total;
          this.pageSize = pageSize;
          this.articles = list;
        })
    }
  },
  components: {
    ThePagination,
    ArticleList,
    CategoryList
  }
};
</script>
<style lang="scss" scoped>
.content-wrapper {
  padding-top: 50px;
  color: #313131;
  .content {
    display: flex;
    justify-content: space-between;
    max-width: 1040px;
    width: 90%;
    margin: 0 auto;
  }
}
</style>