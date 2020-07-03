<template>
  <div class="add-comment">
    <p class="tip">发表评论</p>
    <div class="add-comment-input-item textarea-item">
      <textarea class="add-comment-input text-area"></textarea>
    </div>
    <button class="submit">提交评价</button>
  </div>
</template>
<script>
export default {
  name: 'AddComment'
};
</script>
<style lang="scss" scoped>
@import '~@/assets/scss/color';
.add-comment {
  color: #656D78;
  font-size: 13px;
  .tip {
    font-size: 16px;
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
      box-shadow: 0 0 0 1px $color-text-active;
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
      background: $color-text-active;
      color: #fff;
    }
  }
}
</style>