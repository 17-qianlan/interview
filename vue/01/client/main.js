import Vue from 'vue';
// import ElementUi from 'element-ui';
import element from 'element-ui';

// .vue
import App from './App';

// .js
import createRouter from './router/router';
import createStore from './store/store';
import $ from 'jquery';
import Axios from 'axios';
import '../node_modules/bootstrap/dist/js/bootstrap.min';

// .css
import 'element-ui/lib/theme-chalk/index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// create
const router = createRouter();
const store = createStore();

// prototype
Vue.prototype.$ = $;
Vue.prototype.axios = Axios;

//mount
/*Vue.use(Form);
Vue.use(Button);
Vue.use(Input);
Vue.use(FormItem);*/

Vue.use(element);

new Vue({
    el: '#app',
    store,
    router,
    render: (h) => h(App)
});
