import axios from 'axios';

import createRouter from './router/router';

axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';

const instance = axios.create();
const router = createRouter();

instance.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';

axios.interceptors.request.use = instance.interceptors.request.use;
axios.interceptors.response.use = instance.interceptors.response.use;

// 请求前需要做的事情
instance.interceptors.request.use(
    config => {
        const store = import('./store/store')();
        if (store.state.token) {
            config.headers.Authorization = `token${store.state.token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);// 返回后用catch接收
    }
);

// 请求成功后需要做的事情, 渲染页面之前
instance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            const store = import('./store/store')();
            switch(error.response.status) {
                case 401 :
                    store.dispatch('UserLogOut');
                    router.replace({
                        path: 'login',
                        query: { redirect: router.currentRoute.fullPath }
                    });
                    // 当返回的状态码是401时所需要做的事情
            }
        }
        return Promise.reject(error);
    }
);

export default {
    userLogin(data) {
        return instance.post('/user/login', data);
    },
    userRegister(data) {
        return instance.post('/user/res', data);
    }
};
