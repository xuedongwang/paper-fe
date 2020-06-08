<template>
  <div class="pagination" v-if="total > pageSize">
    <div tag="div" @click="handleChangePage(1)" v-if="currentPage !== 1 && total > 3" class="btn">首页</div>
    <div tag="div" @click="handleChangePage(currentPage-1)" v-if="currentPage !== 1 && total > 3" class="btn">上一页</div>
    <div tag="div" @click="handleChangePage(item)" :key="item" v-for="item of displayPageRange" class="btn" :class="{active: currentPage === item}">{{ item }}</div>
    <div tag="div" @click="handleChangePage(currentPage+1)" v-if="currentPage !== total && total > 3" class="btn">下一页</div>
    <div tag="div" @click="handleChangePage(totalPage)" v-if="currentPage !== total && total > 3" class="btn">末页</div>
  </div>
</template>
<script>
export default {
  name: 'ThePagination',
  data () {
    return {};
  },
  props: {
    total: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    }
  },
  computed: {
    totalPage () {
      return Math.ceil(this.total / this.pageSize);
    },
    displayPageRange () {
      const start = this.currentPage - 2 < 1 ? 1 : this.currentPage - 2;
      const end = this.currentPage + 2 > this.totalPage ? this.totalPage : this.currentPage + 2;
      const ret = [];
      for (let i = start; i <= end; i++) {
        ret.push(i);
      }
      return ret;
    }
  },
  methods: {
    handleChangePage (currentPage) {
      this.$emit('onCurrentPageChange', currentPage);
    }
  }
};
</script>
<style lang="scss" scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  margin: 30px 0;
}
.btn {
  margin: 5px;
  padding: 2px 10px;
  font-size: 14px;
  line-height: 1.625;
  color: #666;
  border: 1px solid #e7e7e7;
  border-radius: 30px;
  cursor: pointer;
  transition: all .2s;
  text-decoration: none;
  &.active {
    background: #333;
    color: #fff;
  }
  &:hover {
    background: #333;
    color: #fff;
  }
}
</style>
