const createToken = require('../token/create-token');
const checkToken = require('../token/check-token');
const userSchema = require('../data/user');
const { db } = require('../data/schema');
const crypto = require('../until/crypto');

const User = db.model('users', userSchema);

exports.register = async ctx => {
    let {username, password} = ctx.request.body;
    let cryptoPassword = crypto(password);
    let token = createToken(username);
    await new Promise((resolve, reject) => {
        User.find({username}, (error, data) => {
            if (error) reject(error);
            if (data.length !== 0) return resolve('');
            const _user = new User({
                username,
                password: cryptoPassword,
                token,
                time: new Date().getTime()
            });
            _user.save((error, data) => {
                if (error) return reject(error);
                resolve(data);
            });
        });
    }).then(data => {
        // isRegisterFailure 注册失败
        // isRegisterSuccess 注册成功
        if (data.length !== 0) {
            ctx.body = {
                isRegisterSuccess: true,
                isRegisterFailure: false
            };
        } else {
            ctx.body = {
                isRegisterSuccess: false,
                isRegisterFailure: true
            };
        }
    }).catch( err => {
        ctx.body = {
            isRegisterFailure: true
        };
    });
};

exports.login = async ctx => {
    let {username, password} = ctx.request.body;
    let crateCrypto = crypto(password);
    let token = createToken(password);
    await new Promise((resolve, reject) => {
        User.find({username}, (error, data) => {
            if (error) return reject(error);
            if (data.length !== 0) {
                if (crateCrypto === data[0]['password']) {
                    data[0]['token'] = token;
                    data.save((error, data) => {
                        if (error) return reject(error);
                    });
                    return resolve(data);
                }
            };
            resolve('');
        });
    }).then(data => {
        if (data.length !== 0){
            ctx.body = {
                isLoginFailure: false,
                isLoginSuccess: true,
                token: data[0].token,
                username: data[0].username
            };
        } else {
           ctx.body = {
               isLoginFailure: true,
               isLoginSuccess: false
           };
        }

    }).catch(err => {
        ctx.body = {
            isLoginFailure: true,
            isLoginSuccess: false
        };
    });
};
