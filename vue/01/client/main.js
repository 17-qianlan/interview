import Vue from 'vue';
// import ElementUi from 'element-ui';
import { Form, Button, Input, FormItem} from 'element-ui';

// .vue
import App from './App';

// .js
import createRouter from './router/router';
import $ from 'jquery';
import Axios from 'axios';
import '../node_modules/bootstrap/dist/js/bootstrap.min';

// .css
import 'element-ui/lib/theme-chalk/index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// create
const router = createRouter();

// prototype
Vue.prototype.$ = $;
Vue.prototype.axios = Axios;

//mount
Vue.use(Form);
Vue.use(Button);
Vue.use(Input);
Vue.use(FormItem);

new Vue({
    el: '#app',
    render: (h) => h(App),
    router
});
