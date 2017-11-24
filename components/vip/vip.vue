<template>
	<div>
		
		

		<!-- 九宫格 -->
		<p>vip</p>
		<p>vip</p>
		<p>vip</p>
		<p>vip</p>
		vip
		vip


		<!-- tab bar -->
		
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
			
			this.$ajax.get("/static/api/tu.json")
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

	.swipe{
		width: 100%;
		height: 200px;
	}
	.swipe img{
		width: 100%;
	}
	.mui-content{
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