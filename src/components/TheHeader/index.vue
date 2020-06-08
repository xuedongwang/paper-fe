<template>
  <header class="header">
    <div class="header-inner">
      <router-link to="/" class="logo">
        <img src="@/assets/svg/icon.svg" height="22"/>
      </router-link>
      <div class="header-right">
        <nav class="nav-bar">
          <router-link class="link" to="/archives">归档</router-link>
          <router-link class="link" to="/about">关于</router-link>
        </nav>
        <router-link to="/search" class="search">
          <i class="iconfont icon-sousuo"></i>
        </router-link>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'TheHeader'
};
</script>
<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  box-shadow: 0 1px 5px rgba(0,0,0,.1);
  z-index: 1001;
  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1040px;
    width: 90%;
    height: 70px;
    margin: 0 auto;
    padding: 0 15px;
    box-sizing: border-box;
    .logo {
      padding: 5px;
      font-size: 16px;
    }
    .header-right {
      display: flex;
      align-items: center;
      .nav-bar {
        display: flex;
        .link {
          padding: 5px;
          font-size: 14px;
          transition: color 0.2s;
          color: inherit;
          text-decoration: none;
          &:hover {
            color: #3274ff;
          }
          &:not(:first-child) {
            margin-left: 10px;
          }
        }
      }
      .search {
        margin-left: 15px;
        padding: 5px;
        color: inherit;
        text-decoration: none;
        cursor: pointer;
      }
    }
  }
}
</style>