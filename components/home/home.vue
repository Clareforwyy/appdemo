<template>
	<div>
		
		<div class="swipe">
			<mt-swipe :auto="4000">
			  <mt-swipe-item v-for="(pic,index) in imgs" :key="index"><img :src="pic.image_url" alt=""/></mt-swipe-item>
			</mt-swipe>
		</div>
		
		<div class="mui-content">
	        <ul class="mui-table-view mui-grid-view mui-grid-9">
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
	            	<router-link :to="{name:'newslist'}">
	                    <span class="mui-icon mui-icon-home"></span>
	                    <div class="mui-media-body">新闻列表</div>
	                </router-link>
	            </li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
	            	<a href="#">
	                    <span class="mui-icon mui-icon-email"></span>
	                    <div class="mui-media-body">Email</div>
	                </a>
	            </li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
	            	<a href="#">
	                    <span class="mui-icon mui-icon-chatbubble"></span>
	                    <div class="mui-media-body">Chat</div>
	                </a>
	            </li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
	            	<a href="#">
	                    <span class="mui-icon mui-icon-location"></span>
	                    <div class="mui-media-body">location</div>
	                </a>
	            </li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
	            	<a href="#">
	                    <span class="mui-icon mui-icon-search"></span>
	                    <div class="mui-media-body">Search</div>
	                </a>
	            </li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
	            	<a href="#">
	                    <span class="mui-icon mui-icon-phone"></span>
	                    <div class="mui-media-body">Phone</div>
	                </a>
	            </li>
	        </ul> 
		</div>
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
			
			this.$ajax.get(this.$HttpConfig.LUNBOURL)
				.then((response)=>{
				    this.imgs = response.data.data;
			  	})
			  	.catch((error)=>{
			    	console.log(error);
			  	})
		}
	}
</script>
<style scoped>
	body{
		background: #ffffff;
	}
	.swipe{
		width: 100%;
		height: 160px;
		margin-top: 40px;
	}
	.swipe img{
		width: 100%;
	}
	.mui-content,.mui-grid-view.mui-grid-9{
		background: none;
	}
	.mui-grid-view.mui-grid-9 .mui-table-view-cell{
		border: none;
	}
	.mui-content > .mui-table-view:first-child{
		margin-top: 0;
	}
	.mui-icon{
		width: 50px;
		height: 50px;
	}
	
	.mui-icon-home::before,
	.mui-icon-email::before,
	.mui-icon-chatbubble::before,
	.mui-icon-location::before,
	.mui-icon-search::before,
	.mui-icon-phone::before{
		content: "";
	}
	.mui-icon-home{
		background: url("../../static/images/1.png") center no-repeat;
	}
	.mui-icon-email{
		background: url("../../static/images/2.png") center no-repeat;
	}
	.mui-icon-chatbubble{
		background: url("../../static/images/3.png") center no-repeat;
	}
	.mui-icon-location{
		background: url("../../static/images/4.png") center no-repeat;
	}
	.mui-icon-search{
		background: url("../../static/images/5.png") center no-repeat;
	}
	.mui-icon-phone{
		background: url("../../static/images/6.png") center no-repeat;
	}
</style>