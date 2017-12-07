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
import NewsDetail from './components/news/detail.vue';

//引入配置对象
import HttpConfig from './static/util/config.js';
Vue.prototype.$HttpConfig = HttpConfig;

//引入mint-ui
import MintUi from 'mint-ui';
//mint-ui 的css
import 'mint-ui/lib/style.css';
Vue.use(MintUi);

import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
//引入elementui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
//引入mui
import './static/vender/mui/dist/css/mui.css';

//引入axios
import Axios from 'axios';
// 添加请求拦截器
Axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    MintUi.Indicator.open();
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    MintUi.Indicator.close();
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
Vue.prototype.$ajax = Axios; //this.$ajax

// vue-router
import VueRouter from 'vue-router';

//安装插件
Vue.use(VueRouter);
//构建路由对象
const router = new VueRouter({
	linkActiveClass:'mui-active',
	routes:[
	{path: '/', redirect: '/login'},
	{name:'login',path:'/login',component:Login},
	{
		name:'common',
		path:'/common',
		component:Common,
		meta: {  requiresAuth: true},
		children:[
			{name:'home',path:'/home',component:Home,meta: {  requiresAuth: true},},
			{name:'vip',path:'/vip',component:Vip,meta: {  requiresAuth: true},},
			{name:'search',path:'/search',component:Search,meta: {  requiresAuth: true},},
			{name:'shop',path:'/shop',component:Shop,meta: {  requiresAuth: true},},
		]
	},
	{name:'newslist',path:'/news/list',component:NewsList,meta: {  requiresAuth: true},},
	{name:'newdetail',path:'/news/detail/:newid',component:NewsDetail,meta: {  requiresAuth: true},}
	
	]
});
// router.addRoutes([
	
	
// ])
router.beforeEach((to, from, next) => {    
	//to即将进入的目标路由对象，from当前导航正要离开的路由， next  :  下一步执行的函数钩子
	if(to.path === '/login')  {  
		next()  // 如果即将进入登录路由，则直接放行
	}else {     //进入的不是登录路由
		if(to.meta.requiresAuth && !localStorage.getItem('accessToken')) {
		  	next({ path: '/login' })//下一跳路由需要登录验证，并且还未登录，则路由定向到  登录路由
		}else {

	  		next() //如果不需要登录验证，或者已经登录成功，则直接放行
	  	}
	}
});


//加入进vue实例中
new Vue({
	el:'#app',
	router,
	created(){
		this.checkLogin();
	},
	methods:{
		checkLogin(){
		      //检查是否存在session
		      if(!localStorage.getItem('accessToken')){
		        //如果没有登录状态则跳转到登录页
		        this.$router.push('/login');
		      }else{
		        //否则跳转到登录后的页面
		        this.$router.push('/home');
		      }
		    }

	},
	render:(c)=>c(App), //c(App)就是return
})