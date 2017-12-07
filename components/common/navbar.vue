<template>
	<header class="mui-bar mui-bar-nav">
		<a @click="GoBack" class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
		<h1 class="mui-title">{{message}}</h1>
	</header>
	<!-- <mt-header fixed :title="message"></mt-header> -->
</template>
<script>
	export default {
		data(){
			return {
				imgs:[]
			}
		},
		created(){
				
		},
		props:{
			message:''
		},
		methods:{
			GoBack(){
				this.$router.go(-1);
			}
		}
	}
</script>
<style scoped>
	.mui-icon::before{
		font-size: 16px
	}
</style>
