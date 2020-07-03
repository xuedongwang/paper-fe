<template>
  <transition name="fade">
    <div v-show="show" class="back-top">
      <i @click="handleBackTop" class="icon-huidaodingbu iconfont back-top-icon"></i>
    </div>
  </transition>
</template>
<script>
import { throttle } from 'lodash';
const SHOW_GO_TO_BACK_DISTANCE = 800;
export default {
  name: 'BackToTop',
  data () {
    return {
      show: false
    };
  },
  mounted () {
    this.throttleFunc = throttle(this.scrollCallback);
    this.bindWindowScroll();
  },
  methods: {
    top () {
      return document.documentElement.scrollTop;
    },
    handleBackTop () {
      const animationWidth = () => {
        document.documentElement.scrollTop = this.top() - this.top() * 0.2;
        if (this.top() > 0) {
          requestAnimationFrame(animationWidth);
        }
      };
      requestAnimationFrame(animationWidth);
    },
    scrollCallback () {
      this.show  = this.top() > SHOW_GO_TO_BACK_DISTANCE;
    },
    bindWindowScroll () {
      window.addEventListener('scroll', this.throttleFunc);
    }
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.throttleFunc);
  }
};
</script>
<style lang="scss" scoped>
.back-top {
  position: fixed;
  z-index: 9999;
  bottom: 50px;
  right: 50px;
  font-size: 30px;
  .back-top-icon {
    font-size: 40px;
    color: #333;
    cursor: pointer;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .18s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-leave,
.fade-enter-to {
  opacity: 1;
}

</style>
