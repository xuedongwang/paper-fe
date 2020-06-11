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
const articleComment = require('./article/comment-list');
const sateInfo = require('./home/sate-info');

var getRange = num => {
  return Math.floor(Math.random() * num) + 1
}

const delay = timeout => new Promise(resolve => setTimeout(() => resolve(), getRange(timeout)))

const PORT = 9999;

const DELAY_TIME = 500;

router.get('/article_list', async ctx => {
  await delay(DELAY_TIME);
  ctx.body = homeArticleList();
});

router.get('/category_list', async ctx => {
  await delay(DELAY_TIME);
  ctx.body = homeHotTags();
})

router.get('/site_info', async ctx => {
  await delay(DELAY_TIME);
  ctx.body = sateInfo();
})

router.get('/archive_list', async ctx => {
  await delay(DELAY_TIME);
  ctx.body = archiveList();
})

router.get('/tag_list', async ctx => {
  await delay(DELAY_TIME);
  ctx.body = searchTags();
})

router.get('/search_result', async ctx => {
  await delay(DELAY_TIME);
  ctx.body = categoryList();
})

router.get('/category_article', async ctx => {
  await delay(DELAY_TIME);
  ctx.body = categoryList();
})

router.get('/article_info', async ctx => {
  await delay(DELAY_TIME);
  ctx.body = articleInfo();
})

router.get('/comment_list', async ctx => {
  await delay(DELAY_TIME);
  ctx.body = articleComment();
})

app
  .use(cors())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(PORT, () => {
  console.log(`Mock server running at http://localhost:${ PORT }.`)
});