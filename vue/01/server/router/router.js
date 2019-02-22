const Router = require('koa-router');

const user = require('../control/user');

const router = new Router();

router.post('/user/res', user.register);

router.post('/user/login', user.login);

module.exports = router;
