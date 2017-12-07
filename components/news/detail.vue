<template>
	<div>
		<top-bar :message="msg"></top-bar>
		<ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media">
				
					<img class="mui-media-object mui-pull-left" :src="newsinfo.url">
					<div class="mui-media-body">
						{{newsinfo.source}}
						<p class="mui-ellipsis">{{newsinfo.title}}</p>
					</div>
					<p class="count_and_time">热度：{{newsinfo.tcount}} <span>{{newsinfo.ptime}}</span></p>
					<p>id:{{newsinfo.id}}</p>
			</li>
		</ul>
		<p>测试：点击切换</p>
		<div v-for="(msg,index) in mymessage">
			<p v-if="msg===true">{{msg}}</p>
			<p v-if="msg===false">{{msg}}</p>
		</div>
		<button @click="resm()">按钮</button>
		<div class="a">
			sasfas
		</div>
		<el-switch
  v-model="value3"
  active-text="按月付费"
  inactive-text="按年付费">
</el-switch>
<el-switch
  style="display: block"
  v-model="value4"
  active-color="#13ce66"
  inactive-color="#ff4949"
  active-text="按月付费"
  inactive-text="按年付费">
</el-switch>

</div>
	</div>
</template>
<script>
	import TopBar from '../common/navbar.vue';
	export default {
		data(){
			return {
				newsinfo:{},
				msg:'新闻详情',
				mymessage:[true,false],
				value3: true,
        		value4: true
			}
		},
		components:{
			TopBar
		},
		methods:{
			resm(){
				for(let i=0;i< this.mymessage.length;i++){
					//this.mymessage[i]=!this.mymessage[i];
					this.$set(this.mymessage,i,!this.mymessage[i]);
				}
			}
		},
		created(){
			let id = this.$route.params.newid;
			this.$ajax.get(this.$HttpConfig.NEWDETAIL+'?'+id)
				.then(res=>{
				    this.newsinfo = res.data.data;
				    this.newsinfo.id=id;
			  	})
			  	.catch((error)=>{
			    	console.log(error);
			  	})
			
		}
	}
</script>
<style scoped>
	.a{
		background: -webkit-linear-gradient(top, #00c5a4, #00afb2);
		width: 100px;
	}
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