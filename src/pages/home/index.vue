<template>
  <div class="page-view">
    <TheHeader/>
    <div class="content-wrapper">
      <main class="content">
        <section class="article-wrapper">
          <div class="article-list">
            <div :key="article.id" class="article-item" v-for="article of articles">
              <h2 class="title">
                <router-link :to="`/a/${article.id}`">{{ article.title }}</router-link>
              </h2>
              <div class="article-meta">
                <div class="create-at" :title="article.createdAt | dayjs">{{ article.createdAt | timeago }}</div>
                <div class="comment-count">{{ article.commentCount | formatNumber }}条评论</div>
              </div>
              <p class="description">{{ article.articleShortDesc }}</p>
            </div>
          </div>
        </section>
        <aside class="aside">
          <section class="aside-item">
            <h4 class="aside-title">热门标签</h4>
            <div class="aside-content">
              <router-link class="aside-btn" v-for="category of categories" :title="category.name" :key="category.id" :to="`/category/${category.id}`">{{ category.name }}</router-link>
            </div>
          </section>
        </aside>
      </main>
    </div>
    <ThePagination
      :total="total"
      :currentPage="currentPage"
    />
    <TheFooter/>
  </div>
</template>
<script>
import TheHeader from '@/components/TheHeader';
import ThePagination from '@/components/ThePagination';
import TheFooter from '@/components/TheFooter';
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
          this.currentPage = currentPage;
          this.pageSize = pageSize;
          this.articles = list;
        })
    }
  },
  components: {
    TheHeader,
    ThePagination,
    TheFooter
  }
};
</script>
<style lang="scss" scoped>
.page-view {
  position: relative;
  padding: 70px 0 77px 0;
  box-sizing: border-box;
  min-height: 100vh;
}
.content-wrapper {
  padding: 50px 0;
  color: #313131;
}
.content {
  display: flex;
  justify-content: space-between;
  max-width: 1040px;
  width: 90%;
  margin: 0 auto;
}

.article-wrapper {
  width: 66%;
  padding: 015px;
}
@media only screen and (max-width: 768px) {
  .article-wrapper {
    width: 100%;
  }
}

.title {
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

.article-item {
  a {
    text-decoration: none;
    color: #333;
  }
  & + & {
    margin-top: 30px;
  }
}

.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  margin: 30px 0;
}
.btnItem {
  margin: 5px;
  padding: 2px 10px;
  font-size: 14px;
  line-height: 1.625;
  color: #666;
  border: 1px solid #e7e7e7;
  border-radius: 30px;
  cursor: pointer;
  transition: all .2s;
  &.active {
    background: #333;
    color: #fff;
  }
  &:hover {
    background: #333;
    color: #fff;
  }
}

.aside {
  width: 25%;
  padding: 0 15px;
}

@media only screen and (max-width: 768px) {
  .aside {
    display: none;
  }
}

.aside-title {
  margin: 10px 0 20px 5px;
}
.aside-content {
  display: flex;
  flex-wrap: wrap;
  user-select: none;
}
.aside-btn {
  margin: 5px;
  padding: 2px 10px;
  font-size: 14px;
  line-height: 1.625;
  color: #666;
  text-align: center;
  border: 1px solid #e7e7e7;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  border-radius: 30px;
  cursor: pointer;
  transition: all .2s;
  text-decoration: none;
  &:hover {
    background: #333;
    color: #fff;
  }
}
</style>