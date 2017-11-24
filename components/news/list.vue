<template>
	<div>
		<header class="mui-bar mui-bar-nav">
			<router-link :to="{name:'home'}" class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></router-link >
			<h1 class="mui-title">新闻晚知道</h1>
		</header>
		<ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media" v-for="(item , index) in news" :key="index">
				<a href="javascript:;">
					<img class="mui-media-object mui-pull-left" :src="item.url">
					<div class="mui-media-body">
						{{item.source}}
						<p class="mui-ellipsis">{{item.title}}</p>
					</div>
					<p class="count_and_time">热度：{{item.tcount}} <span>{{item.ptime}}</span></p>
				</a>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				news:[]
			}
		},
		created(){
			
			this.$ajax.get(this.$HttpConfig.NEWSLIST)
				.then((res)=>{
					console.log(res.data)
				    this.news = res.data.list;
			  	})
			  	.catch((error)=>{
			    	console.log(error);
			  	})
			
		}
	}
</script>
<style scoped>
	.mui-table-view{
		margin-top: 40px;
	}
	.mui-table-view .mui-media-object{
		min-width: 80px;
		height: 60px; 
	}
	.count_and_time{
		margin-left: 50px;
		font-size: 12px;
		color: #a4a4a4;
	}
	.count_and_time span{
		float: right;
		color: #e4e4e4;
	}
</style>