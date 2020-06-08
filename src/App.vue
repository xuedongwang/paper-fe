<template>
  <div class="app">
    <TheHeader v-if="$route.meta.header"/>
    <keep-alive :include="$store.state.keepAliveComponents" :max="10">
      <router-view :key="$route.fullPath"></router-view>
    </keep-alive>
    <TheFooter :siteInfo="siteInfo" v-if="$route.meta.footer"/>
    <BackTop/>
    <Loading
      loader = "dots"
      :opacity="0.8"
      :active.sync="$store.state.isLoading" 
    />
  </div>
</template>
<script>
import Loading from 'vue-loading-overlay';
import BackTop from '@/components/BackTop';
import TheHeader from '@/components/TheHeader';
import TheFooter from '@/components/TheFooter';
export default {
  name: 'App',
  data () {
    return {
      siteInfo: {}
    }
  },
  mounted () {
    this.fetchSiteInfo();
  },
  methods: {
    fetchSiteInfo () {
      const api = CONFIG.API.SITE_INFO;
      $http.get(api)
        .then(res => {
          this.siteInfo = res.data;
        })
    },
  },
  components: {
    BackTop,
    TheHeader,
    TheFooter,
    Loading
  }
};
</script>
<style lang="scss" scoped>
@import '~vue-loading-overlay/dist/vue-loading.css';
.app {
  position: relative;
  padding: 70px 0 77px 0;
  box-sizing: border-box;
  min-height: 100vh;
}
</style>