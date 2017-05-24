import Vue from 'vue';
import VueRouter from 'vue-router';
import Routers from './router';
import filters from './filters/filters';
import Env from '../config/env';
import FastClick from 'fastclick';
import VueLazyload from 'vue-lazyload';
import VueResource from 'vue-resource';
//import $ from 'jquery';

import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './components/app.vue';
import VueScroll from 'vue-scroll'
Vue.use(VueScroll)
// import Loadmore from './loadmore.vue';
// import FadingCircle from '../node_modules/mint-spinner/lib/fading-circle';
// import '../node_modules/mint-ui/lib/style.css';
// Vue.component('spinner', FadingCircle);
// export default Loadmore;


Vue.use(VueRouter);
Vue.use(VueResource);//请求数据

//依赖组件
Vue.use(Mint);


Vue.use(VueLazyload, {//图片懒加载
	preload: 1.3,
	attempt: 1,
	try: 3 // default 1
});

Vue.http.options.emulateHTTP = true;
Vue.http.options.emulateJSON = true;

//实例化Vue的filter
Object.keys(filters).forEach(key => {
	Vue.filter(key, filters[key])
});
  // 并且配置路由规则
const router = new VueRouter({
	mode: 'hash',
	base: __dirname,
	routes: Routers
})
router.beforeEach((to, from, next) => {
	window.scrollTo(0, 0);
	FastClick.attach(document.body);
	next();
});

router.afterEach(() => {

});
const app = new Vue({
	router: router,
	render: h => h(App)
}).$mount('#app');


