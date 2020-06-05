<template>
  <footer class="footer">
    <div class="footer-row">
      <span class="footer-item">Powered by <a href="">Xuedong Wang</a></span>
    </div>
    <div class="footer-row">
      <span class="footer-item">@2019 <a href="">xxx博客</a></span>
      <span class="footer-item">xICP备xxxxxxxx号</span>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'TheFooter'
};
</script>
<style lang="scss" scoped>
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 20px 0;
  font-size: 12px;
  color: #999;
  text-align: center;
  border-top: 1px solid #eee;
}
.footer-row {
  & + & {
    margin-top: 10px;
  }
}
.footer-item {
  & + & {
    &:before {
      content: '·';
      margin: 0 5px;
    }
  }
  a {
    text-decoration: none;
    color: #999;
  }
  a:hover {
    color: #3274ff;
  }
}
</style>