const Koa = require('koa');
const cors = require('@koa/cors');

const router = require('./router');

const app = new Koa();

app.use(cors());
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);