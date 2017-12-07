<template>
	<div class="commom_box">
		<mt-header fixed title="主页"></mt-header>
		
		<router-view></router-view>
		
		<!-- tab bar -->
		<nav class="mui-bar mui-bar-tab">
			<router-link :to="{name:'home'}" class="mui-tab-item " href="#tabbar">
				<span class="mui-icon icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link :to="{name:'vip'}" class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon icon-vip"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link :to="{name:'shop'}" class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon icon-yingerche"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link :to="{name:'search'}" class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon icon-sousuo"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				imgs:[]
			}
		},
		created(){
				
		}
	}
</script>
<style scoped>
	.commom_box{
		height: 100%;
	}
	.mui-icon::before{
		font-size: 16px
	}
</style>
