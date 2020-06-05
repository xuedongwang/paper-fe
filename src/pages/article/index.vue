<template>
  <div class="page-view">
    <TheHeader/>
    <div class="articleView">
      <main class="content">
        <article class="article">
          <h2 class="title">{{ article.title }}</h2>
          <div class="articleMeta">
            <time class="createDate">{{ article.createDate | dayjs('YYYY年MM月DD日') }}</time>
          </div>
          <div class="articleContent">
            <Markdown :content="article.content"></Markdown>
          </div>
          <div class="articleCopyright">
            <div class="articleCopyright" v-if="article.isOriginal">
              <div class="author">作者：Xuedong Wang</div>
              <p class="copyrightDesc">© 文章版权为xx博客所有，转载请注明来源和原文链接。</p>
            </div>
            <p class="copyrightDesc" v-else>原文链接：{ article.originalUrl }</p>
            <div class="historyVersion">
              上次修改<div class="versionItem">2019-08-12 14:10:29 xxx </div>
            </div>
          </div>
          <div class="articleFooter">
            <ul class="articleTags">
              <li class="articleTagsItem" v-for="tag of article.tags" :key="tag.id">
                <router-link :to="`/tag/${tag.id}`">#{{ tag.name }}</router-link>
              </li>
            </ul>
            <div class="recommendWrapper">
              <p class="moreReadTip">更多阅读:</p>
              <div class="recommend">
                <router-link to="/a/dadasdasd" class="articleListItem">
                  <h3 class="articleTitle">MAT 分析 Heap Dump 需要关注的指标</h3>
                  <div class="articleMeta">
                    <time class="articleCreateDate">Aug 08, 2019</time>
                  </div>
                </router-link>
                <router-link to="/a/dadasdasd" class="articleListItem">
                  <h3 class="articleTitle">MAT 分析 Heap Dump 需要关注的指标</h3>
                  <div class="articleMeta">
                    <time class="articleCreateDate">Aug 08, 2019</time>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </article>
        <TheComment :comments="comments"/>
      </main>
    </div>
    <TheFooter/>
  </div>
</template>
<script>
import TheHeader from '@/components/TheHeader';
import TheFooter from '@/components/TheFooter';
import Markdown from '@/components/Markdown';
import TheComment from '@/components/TheComments';
export default {
  name: 'Home',
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
    TheHeader,
    TheFooter,
    Markdown,
    TheComment,
  }
};
</script>
<style lang="scss" scoped>
.page-view {
  position: relative;
  padding: 70px 0 77px 0;
  box-sizing: border-box;
  min-height: 100vh;
  .articleView {
    padding: 50px 0;
    color: #313131;
    background: #fff;
    box-sizing: border-box;
    .content {
      max-width: 780px;
      width: 90%;
      margin: 0 auto;
      .title {
        font-size: 24px;
        line-height: 1.5;
        font-weight: 500;
      }

      .articleContent {
        margin-top: 50px;
      }

      .articleMeta {
        margin-top: 10px;
      }
      .createDate {
        color: #aaa;
        font-size: 14px;
      }
      .articleTags {
        display: flex;
        flex-wrap: wrap;
        padding: 15px 0;
        color: #4D89FB;
      }
      .articleTagsItem {
        margin: 5px 10px 0 0;
      }
      .articleCopyright {
        margin-top: 50px;
      }
      .author {
        font-size: 14px;
        font-weight: bold;
      }
      .copyrightDesc {
        margin-top: 10px;
        color: #999;
        font-size: 12px;
        padding-bottom: 5px;
      }
      .historyVersion {
        margin-top: 10px;
        color: #999;
        font-size: 12px;
        padding-bottom: 5px;
        cursor: pointer;
        user-select: none;
      }
      .historyVersionDisplay {
        margin-top: 15px;
        padding: 15px;
        background: #f5f6f7;
        position: relative;
        border-radius: 3px;
        cursor: auto;
        user-select: text;
        &:after {
          content: '';
          position: absolute;
          top: -18px;
          width: 0;
          height: 0;
          border: 9px solid transparent;
          border-bottom-color: #f5f6f7;
        }
      }
      .versionItem {
        & + & {
          margin-top: 5px;
        }
      }
      .moreIcon {
        display: inline-block;
        font-size: 12px;
        transform: scale(.7);
      }

      .articleTitle {
        font-size: 14px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #313131;
      }
      .articleMeta {
        margin-top: 20px;
        font-size: 12px;
        color: #5f5f5f;
      }
    }
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

.articleListItem {
  width: 40%;
  margin-top: 15px;
  padding: 20px 25px;
  background: #fff;
  border: 1px solid rgba(184,197,214,.2);
  border-radius: 3px;
  box-shadow: 0 1px 4px rgba(0,0,0,.04);
  transition: transform .12s;
  &:hover {
    transform: scale(1.05);
  }
}

@media only screen and (max-width: 720px) {
  .articleListItem {
    width: 90%;
  }
}
</style>