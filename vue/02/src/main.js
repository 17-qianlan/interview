import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// vue components
import FatherSlot from '@cps/father-slot';
import ChildSlot from '@cps/child-slot';
import Tabs from '@cps/Tabs';
import Tab from '@cps/Tab';
import TodoInput from '@cps/Todo-input';

//css
import './static/css/base.css';

Vue.component('FatherSlot', FatherSlot);
Vue.component('ChildSlot', ChildSlot);
Vue.component('Tabs', Tabs);
Vue.component('Tab', Tab);
Vue.component('TodoInput', TodoInput);

router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title;
    next();
})

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
