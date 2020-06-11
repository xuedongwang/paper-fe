<template>
  <div class="page-view">
    <main class="content">
      <section class="input-wrapper">
        <div class="input-box">
          <input class="input-inner" placeholder="search...." type="text"/>
          <i class="iconfont icon-sousuo search-btn"></i>
        </div>
      </section>
      <div class="hot-search-tags">
        <p class="help-guide">👇 The following tabs can help you!</p>
        <ul class="tag-list">
          <li v-for="tag of hotSearch.list" :key="tag.id" class="tag">
            <router-link :to="`/search-result?keywords=${tag.name}`"># {{ tag.name }} ({{ tag.count }})</router-link>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  name: 'Search',
  data () {
    return {
      hotSearch: {}
    };
  },
  mounted () {
    this.fetchHotSearch ();
  },
  methods: {
    fetchHotSearch () {
      const api = CONFIG.API.TAG_LIST;
      $http.get(api)
        .then(res => {
          this.hotSearch = res.data;
        })
    }
  }
};
</script>
<style lang="scss" scoped>
.page-view {
  padding: 60px 0;
  color: #313131;
  box-sizing: border-box;
  .content {
    max-width: 700px;
    width: 90%;
    margin: 0 auto;
    .input-wrapper {
      .input-box {
        position: relative;
        .input-inner {
          font-size: 14px;
          line-height: 40px;
          width: 100%;
          height: 40px;
          padding: 0 40px 0 18px;
          color: #313131;
          border: 1px solid rgba(184,197,214,.2);
          border-radius: 20px;
          outline: 0;
          background-color: #fff;
          box-shadow: 0 1px 4px rgba(0,0,0,.04);
          box-sizing: border-box;
        }
        .search-btn {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          padding: 5px;
          cursor: pointer;
        }
      }
    }
    .hot-search-tags {
      padding: 15px 0;
      .help-guide {
        margin-top: 20px;
        font-size: 14px;
        text-align: center;
      }
      .tag-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 10px;
        .tag {
          font-size: 13px;
          display: inline-block;
          margin: 10px 8px 0 0;
          padding: 2px 15px;
          transition-duration: .4s;
          letter-spacing: 0;
          border-radius: 15px;
          box-shadow: 0 1px 4px rgba(0,0,0,.04);
          border: 1px solid rgba(184, 197, 214, 0.2);
          background: #fff;
          line-height: 1.625;
          &:hover {
            color: #3274ff;
          }
        }
      }
    }
  }
}

</style>
