const jwt = require('jsonwebtoken');
module.exports = async(ctx, next) => {
    let authorization = ctx.get('authorization'); // 在前端必须发过来的请求头
    if (authorization === '') {
        ctx.body = {
            isToken: false // 表示没有token, 没有请求过, 不返回数据
        };
        return false;
    };
    let token = authorization.split[1];
    let tokenContent;
    try {
        tokenContent = jwt.verify(token, 'sinner77');
    } catch(err) {
        ctx.status = 401;
        ctx.body = {
            isSelfSaveSuccessToken: false  // 表示有请求头, 但是token不是自己的
        };
    }
    if (tokenContent) { // 是自己的token, 正常往下执行
        await next();
    } else { // 没有获取到自己的token, 本地没有保存
        ctx.body = {
            isSaveSuccessToken: false
        };
    };
};
