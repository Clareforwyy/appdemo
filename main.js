//引入vue/vue-router/axios
import Vue from 'vue';

//引入home，app
import App from './app.vue';

import Login from './components/login/login.vue';
import Common from './components/common/common.vue';
import Home from './components/home/home.vue';
import Vip from './components/vip/vip.vue';
import Shop from './components/shop/shop.vue';
import Search from './components/search/search.vue';
import NewsList from './components/news/list.vue';

//引入配置对象
import HttpConfig from './config.js';
Vue.prototype.$HttpConfig = HttpConfig;

//引入mint-ui
import MintUi from 'mint-ui';
//mint-ui 的css
import 'mint-ui/lib/style.css';
Vue.use(MintUi);

import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

//引入mui
import './static/vender/mui/dist/css/mui.css';

//引入axios
import Axios from 'axios';
Vue.prototype.$ajax = Axios; //this.$ajax

// vue-router
import VueRouter from 'vue-router';

//安装插件
Vue.use(VueRouter);
//构建路由对象
const router = new VueRouter({
	linkActiveClass:'mui-active'
});
router.addRoutes([
	{path: '/', redirect: '/login'},
	{name:'login',path:'/login',component:Login},
	{
		name:'common',
		path:'/common',
		component:Common,
		children:[
			{name:'home',path:'/home',component:Home},
			{name:'vip',path:'/vip',component:Vip},
			{name:'search',path:'/search',component:Search},
			{name:'shop',path:'/shop',component:Shop},
		]
	},
	{name:'newslist',path:'/news/list',component:NewsList}
	
	
])


//加入进vue实例中
new Vue({
	el:'#app',
	router:router,
	render:(c)=>c(App), //c(App)就是return
})