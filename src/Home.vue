<template>
  <div class="home-view" v-lock="isLoading" :key="$route.fullPath">
    <TheHeader></TheHeader>
    <router-view></router-view>
    <TheFooter :siteInfo="siteInfo"></TheFooter>
    <BackTop></BackTop>
    <Loading
      :active.sync="isLoading"
      loader="dots"
      :opacity=".8"
    ></Loading>
  </div>
</template>
<script>
import Loading from 'vue-loading-overlay';
import BackTop from '@/components/BackTop';
import TheHeader from '@/components/TheHeader';
import TheFooter from '@/components/TheFooter';
import { mapGetters } from 'vuex';
export default {
  name: 'HomePage',
  data () {
    return {
      siteInfo: {}
    }
  },
  computed: {
    ...mapGetters([
      'isLoading'
    ])
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
.home-view {
  position: relative;
  padding: 70px 0 77px 0;
  box-sizing: border-box;
  min-height: 100vh;
}
</style>