<template>
  <div class="page-view">
    <main class="content">
      <p class="tip-wrapper">
        <span class="keywords">{{ category.keywords }}</span>
        下有
        <span class="keywords">{{ category.count | formatNumber }}</span>
        篇文章
      </p>
      <div class="card-list">
        <router-link :to="`/a/${article.id}`" v-for="article of category.list" :key="article.id" class="card-item">
          <h3 class="title">{{ article.title }}</h3>
          <div class="meta">
            <time class="create-at">{{ article.createDate }}</time>
          </div>
        </router-link>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  name: 'Category',
  data () {
    return {
      category: {}
    };
  },
  mounted () {
    this.fetchSearch();
  },
  methods: {
    fetchSearch() {
      const api = CONFIG.API.CATEGORY_ARTICLE;
      $http.get(api)
        .then(res => {
          this.category = res.data;
        })
    }
  }
};
</script>
<style lang="scss" scoped>
@import '~@/assets/scss/color';
.page-view {
  color: #313131;
  box-sizing: border-box;
  .content {
    max-width: 940px;
    width: 90%;
    margin: 50px auto;
    .tip-wrapper {
      display: block;
      font-size: 14px;
      color: #5f5f5f;
      .keywords {
        padding: 0 5px;
        color: $color-text-active;
        font-weight: bold;
      }
    }
    .card-list {
      margin-top: 20px;
      display: grid;
      grid-template-columns: repeat(3, 30%);
      grid-column-gap: 5%;
      grid-row-gap: 30px;
      .card-item {
        padding: 20px 25px;
        background: #fff;
        border: 1px solid rgba(184,197,214,.2);
        border-radius: 3px;
        box-shadow: 0 1px 4px rgba(0,0,0,.04);
        transition: transform .12s;
        &:hover {
          transform: scale(1.05);
        }
        .title {
          font-size: 14px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          color: #313131;
        }
        .meta {
          margin-top: 20px;
          font-size: 12px;
          color: #5f5f5f;
        }
      }
    }
  }
}
@media only screen and (max-width: 768px) {
  .card-list {
    grid-template-columns: repeat(2, 47%) !important;
    grid-column-gap: 6%;
  }
}
</style>
