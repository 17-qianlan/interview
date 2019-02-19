import Vue from 'vue';
// import ElementUi from 'element-ui';
import { Form, Button, Input, FormItem} from 'element-ui';

// .vue
import App from './App';

// .js
import createRouter from './router/router';

// .css
import 'element-ui/lib/theme-chalk/index.css';

// create
const router = createRouter();

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
