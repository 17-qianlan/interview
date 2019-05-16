const Router = require('koa-router');

const router = new Router();

router.get('/11', ctx => {
    ctx.body = '我是get请求';
})

module.exports = router;