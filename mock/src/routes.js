const { delay } = require('./utils/helper');

const homeArticleList = require('./controller/home/articleList');
const homeHotTags = require('./controller/home/hotTags');
const searchTags = require('./controller/search/tagList');
const archiveList = require('./controller/archives/archiveList');
const categoryList = require('./controller/category/category-list');
const searchResult = require('./controller/search/searchResult');
const articleInfo = require('./controller/article/articleInfo');
const sateInfo = require('./controller/home/sateInfo');

const DELAY_TIME = 100;

const routes = router => {
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
    ctx.body = searchResult();
  })
  
  router.get('/category_article', async ctx => {
    await delay(DELAY_TIME);
    ctx.body = categoryList();
  })
  
  router.get('/article_info', async ctx => {
    await delay(DELAY_TIME);
    ctx.body = articleInfo();
  })
}

module.exports = routes;