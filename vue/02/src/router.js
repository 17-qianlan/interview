import Vue from 'vue';
import Router from 'vue-router';
import Index from './views/index.vue';

Vue.use(Router);

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'index',
			component: Index,
		},
		{
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
		},
        {
            path: '/todo',
            name: 'todo',
            component: () => import(/* webpackChunkName: "todo" */ './views/todo.vue'),
            meta: {
                title: 'todo page'
            }
        },
        {
            path: '/arr',
            name: 'arr',
            component: () => import(/* webpackChunkName: "arr" */ './views/arr.vue'),
            meta: {
                title: '测试和监听arr'
            }
        },
        {
            path: '/createElement',
            name: 'createElement',
            component: () => import(/* webpackChunkName: "arr" */ './views/createElement.vue'),
            meta: {
                title: 'createElement'
            }
        }
	],
});
