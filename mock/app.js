const Router = require('koa-router');
const Koa = require('koa');
const cors = require('koa2-cors');

const app = new Koa();
const router = new Router();

const homeArticleList = require('./home/article-list');
const homeHotTags = require('./home/hot-tags');
const searchTags = require('./search/tag-list');
const archiveList = require('./archives/archive-list');
const categoryList = require('./category/category-list');
const articleInfo = require('./article/article-info');
const articleDetail = require('./article/article-detail');
const articleComment = require('./article/comment-list');

const searchTags1 = require('./home/hot-tags1');
const archives = require('./archives/archives');
const homeArticleList1 = require('./home/article-list1');

const PORT = 9999;

router.get('/articles', ctx => {
  ctx.body = homeArticleList1();
});

router.get('/article_list', ctx => {
  ctx.body = homeArticleList();
});

router.get('/hot_tags', ctx => {
  ctx.body = homeHotTags();
})

router.get('/categories', ctx => {
  ctx.body = searchTags1();
})

router.get('/tag_list', ctx => {
  ctx.body = searchTags();
})

router.get('/archive_list', ctx => {
  ctx.body = archiveList();
})

router.get('/archives', ctx => {
  ctx.body = archives();
})

router.get('/category_articles', ctx => {
  ctx.body = categoryList();
})

router.get('/hot_search_list', ctx => {
  ctx.body = searchTags();
})

router.get('/category_list', ctx => {
  ctx.body = categoryList();
})

router.get('/article_info', ctx => {
  ctx.body = articleInfo();
})

router.get('/article_detail', ctx => {
  ctx.body = articleDetail();
})

router.get('/comment_list', ctx => {
  ctx.body = articleComment();
})

app
  .use(cors())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(PORT, () => {
  console.log(`Mock server running at http://localhost:${ PORT }.`)
});