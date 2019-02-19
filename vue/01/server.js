const Koa = require('koa');
const koaBody = require('koa-body');
const koaCors = require('@koa/cors');

const router = require('./server/rotuer/router');

const app = new Koa();

app.use(koaCors());
app.use(koaBody());

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, '0.0.0.0');
