const Router = require('koa-router');
const Koa = require('koa');
const cors = require('koa2-cors');

const app = new Koa();
const router = new Router();

const routes = require('./src/routes');

const PORT = 9999;

routes(router);

app
  .use(cors())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(PORT, () => {
  console.log(`Mock server running at http://localhost:${ PORT }.`)
});