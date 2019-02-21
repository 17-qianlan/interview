import user from '../axios';

export default {
    Login({commit}, opts) {
        return new Promise((resolve, reject) => {
            user.userLogin(opts).then(({data}) => {
                if (data.isLoginSuccess) {
                    let {username, token} = data.token;
                    commit('UserLogin', {username, token});
                    resolve(data.isLoginSuccess);
                } else {
                    resolve(data.isLoginSuccess);
                }
            }).catch(error => {
                reject(error);
            });
        });
    },
    Res({commit}, opts) {
        return new Promise((resolve, reject) => {
            user.userRegister(opts).then(({data}) => {
                // 如果需要自动登录, 那么只要和登录一样就可以了
                // 后台返回token和username, 存入本地的session就可以了
                resolve(data.isRegisterSuccess);
            }).catch(error => {
                reject(error);
            });
        });
    }
};
