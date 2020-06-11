<template>
  <article class="article">
    <h2 class="title">{{ article.title }}</h2>
    <div class="article-meta">
      <time class="createDate">{{ article.createDate | dayjs('YYYY年MM月DD日') }}</time>
    </div>
    <div class="article-content">
      <Markdown :content="article.content"></Markdown>
    </div>
    <div class="copyright-wrapper">
      <div class="copyright" v-if="article.isOriginal">
        <div class="author">作者：{{ article.author }}</div>
        <p class="description">© 文章版权为xx博客所有，转载请注明来源和原文链接。</p>
      </div>
      <div class="last-modified">
        上次修改：<time class="time" :title="article.lastModified | dayjs">{{ article.lastModified | timeago }}</time>
      </div>
    </div>
    <div class="article-footer">
      <ul class="tag-list">
        <li class="tag" v-for="tag of article.tags" :key="tag.id">
          <router-link :to="`/tag/${tag.id}`">#{{ tag.name }}</router-link>
        </li>
      </ul>
      <div class="comment-wrapper">
        <p class="more-read">更多阅读:</p>
        <div class="recommend">
          <router-link v-for="article of article.moreRead" :key="article.id" :to="`/a/${article.id}`" class="article">
            <h3 class="title">{{ article.name }}</h3>
            <div class="meta">
              <time class="date">{{ article.createDate | dayjs('MMM DD, YYYY') }}</time>
              <!-- <time class="date">Aug 08, 2019</time> -->
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </article>
</template>
<script>
import Markdown from '@/components/Markdown';
export default {
  name: 'ArticleView',
  props: {
    article: {
      type: Object,
      default () {
        return {};
      }
    }
  },
  components: {
    Markdown
  }
};
</script>
<style lang="scss" scoped>
.article {
  .title {
    font-size: 24px;
    line-height: 1.5;
    font-weight: 500;
  }
  .article-meta {
    margin-top: 10px;
    .createDate {
      color: #aaa;
      font-size: 14px;
    }
  }
  .article-content {
    margin-top: 50px;
  }
  .copyright-wrapper {
    margin-top: 50px;
    .copyright {
      .author {
        font-size: 14px;
        font-weight: bold;
      }
      .description {
        margin-top: 10px;
        color: #999;
        font-size: 12px;
        padding-bottom: 5px;
      }
    }
    .last-modified {
      margin-top: 10px;
      color: #999;
      font-size: 12px;
      padding-bottom: 5px;
      .time {
        margin-top: 5px;
      }
    }
  }
  .article-footer {
    .tag-list {
      display: flex;
      flex-wrap: wrap;
      padding: 15px 0;
      color: #4D89FB;
      .tag {
        list-style: none;
        margin: 5px 10px 0 0;
      }
    }
    .comment-wrapper {
      .recommend {
        display: flex;
        justify-content: space-between;
        .article {
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

        @media only screen and (max-width: 720px) {
          .article {
            width: 90%;
          }
        }
      }
    }
  }
}


</style>