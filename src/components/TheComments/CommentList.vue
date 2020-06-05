<template>
  <div class="comment">
    <p class="commentTitle">{{ comments.count }}条回应：“友情链接”</p>
    <ul class="commentList">
      <li class="commentItem" :key="comment.id" v-for="comment of comments.list">
        <div class="initComment">
          <div class="clearfix commentUserInfo">
            <img src="//placehold.it/600x600" class="fl avatar"/>
            <div class="fl infoBlock">
              <div class="commentUsername">{{ comment.username }}<span class="say">说道:</span></div>
              <div class="commentDate">{{ comment.commentDate }}</div>
            </div>
            <div class="fr reply">@回复</div>
          </div>
          <p class="commentContent">{{ comment.content }}</p>
        </div>
        <div class="childtenCommentWrapper">
              <div class="childrenComments" :key="childComment.id" v-for="childComment of comment.children">
                <div class="clearfix commentUserInfo">
                  <img src="//placehold.it/600x600" class="fl avatar"/>
                  <div class="fl infoBlock">
                    <div class="commentUsername">
                      <a v-if="childComment.userSite" href="childComment.userSite">{{ childComment.username }}</a>
                      <span v-else>{{ childComment.username }}</span>
                      <span class="say">说道:</span></div>
                    <div class="commentDate">{{ childComment.commentDate }}</div>
                  </div>
                  <div class="fr reply">@回复</div>
                </div>
                <p class="commentContent">{{ childComment.content }}</p>
              </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: '',
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
.commentTitle {
  margin: 40px 0;
  font-size: 20px;
  font-weight: bold;
  color: #656D78;
}
.commentUserInfo {
  font-size: 13px;
  color: #656D78;
}
.avatar {
  width: 42px;
  height: 42px;
  background: #fff;
  padding: 2px;
  border: 1px solid #E6E9ED;
  border-radius: 100%;
  box-sizing: border-box;
}
.infoBlock {
  margin-left: 12px;
  padding: 3px 0;
  box-sizing: border-box;
}
.commentDate {
  margin-top: 8px;
}
.say {
  margin-left: 5px;
  color: #AAB2BD
}
.reply {
  cursor: pointer;
}
.commentContent {
  margin-left: 54px;
  font-size: 13px;
  line-height: 22px;
  color: #656D78;
  text-align: justify;
  word-break: break-all;
}

.childrenComments {
  padding: 15px 0;
  position: relative;
  z-index: 11;
  .avatar {
    width: 30px;
    height: 30px;
  }
  .commentContent {
    margin-left: 42px;
  }
}
.childtenCommentWrapper {
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
}

.commentItem {
  padding: 30px 0;
}
.initComment {
  margin-bottom: 20px;
}

.addComment {
  color: #656D78;
  font-size: 13px;
}
.addCommentTip {
  font-size: 16px;
}

.addCommentUserInfo {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}

.inputLabel {
  &:before {
    content: '*';
  }
}
.addCommentInputItem {
  display: flex;
  flex-direction: column;
  flex: 1;
}
.addCommentInput {
  padding: 8px 10px;
  box-shadow: 0 0 0 1px #E6E9ED;
  background: #fff;
  margin: 6px 0;
  line-height: 18px;
  box-sizing: border-box;
  &:focus {
    position: relative;
    z-index: 1;
    box-shadow: 0 0 0 1px #3274ff;
  }
}
.addCommentTexrarea {
  resize: vertical;
  min-height: 200px;
}
.addCommentTextareaItem {
  margin-top: 15px;
}
.submitComment {
  width: 100%;
  padding: 8px 10px;
  box-shadow: 0 0 0 1px #E6E9ED;
  background: #fff;
  font-size: .8rem;
  margin: 6px 0;
  line-height: 18px;
  border: 0;
  outline: none;
  cursor: pointer;
  transition: all .12s;
  &:hover {
    background: #3274ff;
    color: #fff;
  }
}

.cancelReply {
  margin-left: 20px;
  cursor: pointer;
  transition: all .12s;
  &:hover {
    color: #3274ff;
  }
}
.replayUsername {
  padding: 0 2px;
  color: #3274ff;
  font-weight: bold;
}
</style>