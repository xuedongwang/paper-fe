<template>
  <aside class="aside">
    <section class="aside-item">
      <h4 class="aside-title">文章分类</h4>
      <div class="aside-content">
        <router-link
          class="aside-btn"
          v-for="category of categoryList" 
          :title="category.name" 
          :key="category.id" 
          :to="`/categories/${category.id}`"
        >
        {{ category.name }}
        </router-link>
      </div>
    </section>
  </aside>
</template>
<script>
export default {
  name: 'CategoryList',
  props: {
    categoryList: {
      type: Array,
      default () {
        return [];
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.aside {
  width: 25%;
  padding: 0 15px;
  .aside-title {
    margin: 10px 0 20px 5px;
  }
  .aside-content {
    display: flex;
    flex-wrap: wrap;
    user-select: none;
    .aside-btn {
      margin: 5px;
      padding: 2px 10px;
      font-size: 14px;
      line-height: 1.625;
      color: #666;
      text-align: center;
      border: 1px solid #e7e7e7;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      border-radius: 30px;
      cursor: pointer;
      transition: all .2s;
      text-decoration: none;
      &:hover {
        background: #333;
        color: #fff;
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  .aside {
    display: none;
  }
}
</style>