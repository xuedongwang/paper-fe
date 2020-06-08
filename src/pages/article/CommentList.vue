<template>
  <div class="comment">
    <p class="comment-tip">{{ comments.count }}条回应：“友情链接”</p>
    <ul class="comment-list">
      <li class="item" :key="comment.id" v-for="comment of comments.list">
        <div class="parent-comment">
          <div class="clearfix user-info">
            <img src="//placehold.it/600x600" class="fl avatar"/>
            <div class="fl info-block">
              <div class="name">{{ comment.username }}<span class="say">说道:</span></div>
              <div class="date">{{ comment.commentDate | timeago }}</div>
            </div>
            <div class="fr reply">@回复</div>
          </div>
          <p class="comment-content">{{ comment.content }}</p>
        </div>
        <div class="child-comment">
          <div class="comments" :key="childComment.id" v-for="childComment of comment.children">
            <div class="clearfix user-info">
              <img src="//placehold.it/600x600" class="fl avatar"/>
              <div class="fl info-block">
                <div class="name">
                  <a v-if="childComment.userSite" :href="childComment.userSite">{{ childComment.username }}</a>
                  <span v-else>{{ childComment.username }}</span>
                  <span class="say">说道:</span></div>
                <div class="date">{{ childComment.commentDate | timeago }}</div>
              </div>
              <div class="fr reply">@回复</div>
            </div>
            <p class="comment-content">{{ childComment.content }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'CommentList',
  props: {
    comments: {
      type: Object,
      default () {
        return {}
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.comment {
  .comment-tip {
    margin: 40px 0;
    font-size: 20px;
    font-weight: bold;
    color: #656D78;
  }
  .comment-list {
    .item {
      padding: 30px 0;
      list-style: none;
      .parent-comment {
        margin-bottom: 20px;
        .user-info {
          font-size: 13px;
          color: #656D78;
          .avatar {
            width: 42px;
            height: 42px;
            background: #fff;
            padding: 2px;
            border: 1px solid #E6E9ED;
            border-radius: 100%;
            box-sizing: border-box;
          }
          .info-block {
            margin-left: 12px;
            padding: 3px 0;
            box-sizing: border-box;
            .date {
              margin-top: 8px;
            }
          }
          .reply {
            cursor: pointer;
          }
        }
        .comment-content {
          margin: 0;
          margin-left: 54px;
          font-size: 13px;
          line-height: 22px;
          color: #656D78;
          text-align: justify;
          word-break: break-all;
        }
      }
      .child-comment {
        position: relative;
        margin-left: 54px;
        &:after {
          content: '';
          position: absolute;
          left: 15px;
          top: 0;
          height: calc(100%);
          width: 1px;
          background: #E6E9ED;
        }
        .comments {
          padding: 15px 0;
          position: relative;
          z-index: 11;
          .user-info {
            font-size: 13px;
            color: #656D78;
            .info-block {
              margin-left: 12px;
              padding: 3px 0;
              box-sizing: border-box;
              .date {
                margin-top: 8px;
              }
            }
            .reply {
              cursor: pointer;
            }
            .avatar {
              width: 30px;
              height: 30px;
              border-radius: 50%;
              border: 1px solid #E6E9ED;
              background: #fff;
            }
          }
          .comment-content {
            margin: 0;
            margin-left: 42px;
            font-size: 13px;
            line-height: 22px;
            color: #656D78;
            text-align: justify;
            word-break: break-all;
          }
        }
      }
    }
  }
}

</style>