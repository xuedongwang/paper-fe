<template>
  <div class="page-view">
    <main class="content">
      <dl :key="archive.year" class="archive" v-for="archive of archives.list">
        <dt class="year">{{ archive.year | dayjs('YYYY') }}</dt>
        <dd :key="article.id" class="item" v-for="article of archive.list">
          <router-link :to="`/a/${article.id}`" class="title">
            <time class="create-at">{{ article.createDate | timeago }}</time>{{ article.title }}
          </router-link>
        </dd>
      </dl>
    </main>
  </div>
</template>
<script>
export default {
  name: 'Archives',
  data () {
    return {
      archives: {}
    };
  },
  mounted () {
    this.fetchArchives ();
  },
  methods: {
    fetchArchives () {
      const api = CONFIG.API.ARCHIVE_LIST;
      $http.get(api)
        .then(res => {
          this.archives = res.data;
        })
    }
  }
};
</script>
<style lang="scss" scoped>
.page-view {
  color: #313131;
  .content {
    max-width: 1040px;
    width: 90%;
    margin: 0 auto;
    padding: 30px 0 30px 20px;
    box-sizing: border-box;
  }
}
.archive {
  margin: 0;
  overflow: hidden;
  &:not(:first-child) {
    margin-top: 20px;
  }
  .year {
    margin: 18px 0;
    font-weight: 400;
    font-size: 29px;
    line-height: 34px;
  }
  .item {
    display: flex;
    margin: 15px 0;
    font-size: 16px;
    line-height: 25px;
    .title {
      display: flex;
      transition: all .17s;
      &:hover {
        margin-left: 8px;
        color: #4D89FB;
        .create-at {
          color: #4D89FB;
        }
      }
      .create-at {
        display: block;
        width: 80px;
        font-size: 14px;
        color: #aaa;
      }
    }
  }
}
</style>
