<template>
  <div class="app">
    <transition name="fade">
      <keep-alive :include="$store.state.keepAliveComponents" :max="10">
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'App',
};
</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0s;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
</style>
