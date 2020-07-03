<template>
  <div class="page-view">
    <main class="content">
      <dl :key="archive.year" class="archive" v-for="archive of formatData">
        <dt class="year">{{ archive.year }}</dt>
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
import { groupBy } from 'lodash';
export default {
  name: 'Archives',
  data () {
    return {
      archives: {},
      formatData: []
    };
  },
  mounted () {
    this.fetchArchives ();
  },
  methods: {
    archivesComp (archives) {
      const { list } = archives;
      const group = groupBy(list, article => new Date(article.createDate).getFullYear());
      return Object.keys(group).map(key => {
        return {
          year: key,
          list: group[key]
        }
      }).reverse();
    },
    fetchArchives () {
      const api = CONFIG.API.ARCHIVE_LIST;
      $http.get(api)
        .then(res => {
          this.archives = res.data;
          this.formatData = this.archivesComp(res.data);
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
        flex-shrink: 0;
        font-size: 14px;
        color: #aaa;
      }
    }
  }
}
</style>
