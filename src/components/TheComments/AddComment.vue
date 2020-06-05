<template>
  <div class="add-comment-wrapper">
    <div class="addComment">
      <p class="tip">发表评论</p>
      <div class="user-info">
        <div class="add-comment-input-item">
          <label class="input-label" for="username">
            <span class="labelText">姓名</span>
          </label>
          <input class="add-comment-input" type="text"/>
        </div>
        <div class="add-comment-input-item">
          <label class="input-label" for="username">
            <span class="labelText">电子邮件</span>
          </label>
          <input class="add-comment-input" type="text"/>
        </div>
        <div class="add-comment-input-item">
          <label class="input-label" for="username">
            <span class="labelText">站点</span>
          </label>
          <input class="add-comment-input" type="text"/>
        </div>
      </div>
      <div class="add-comment-input-item textarea-item">
        <label class="input-label" for="username">
          <span class="labelText">评论<span class="replyOther">对<span class="replayUsername">C</span>进行回复</span><span class="cancelReply">取消回复</span></span>
        </label>
        <textarea class="add-comment-input text-area"></textarea>
      </div>
      <button class="submit">提交评价</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'add-comment-input'
};
</script>
<style lang="scss" scoped>
.add-comment-wrapper {
  .addComment {
    color: #656D78;
    font-size: 13px;
  }
  .tip {
    font-size: 16px;
  }

  .user-info {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
  }

  .input-label {
    &:before {
      content: '*';
    }
  }
  .add-comment-input-item {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .add-comment-input {
    border: 0;
    outline: 0;
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
  .text-area {
    resize: vertical;
    min-height: 200px;
  }
  .textarea-item {
    margin-top: 15px;
  }
  .submit {
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
}
</style>