<template>
	<div>
		<topbar :message="msg"></topbar>
		<ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media" v-for="(item , index) in news" :key="index">
				<router-link :to="{name:'newdetail',params:{newid:item.id}}">
					<img class="mui-media-object mui-pull-left" :src="item.url">
					<div class="mui-media-body">
						{{item.source}}
						<p class="mui-ellipsis">{{item.title}}</p>
					</div>
					<p class="count_and_time">热度：{{item.tcount}} <span>{{item.ptime}}</span></p>
				</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
	import topbar from '../common/navbar.vue';
	export default {
		data(){
			return {
				news:[],
				msg:'新闻列表'
			}
		},
		components:{
			topbar
		},
		created(){
			
			this.$ajax.get(this.$HttpConfig.NEWSLIST)
				.then((res)=>{
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
		font-family: "微软雅黑";
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