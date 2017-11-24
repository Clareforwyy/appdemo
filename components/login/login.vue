<template>
	<div>
		<router-link :to="{name:'home'}">
			<div class="login">
				Welcome! 
				<img src="/static/images/chui.jpg" height="240" width="240" alt="">
			</div>
		</router-link>
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
			setTimeout(()=>{
				this.$router.push('home');//跳转/home路由
			},3000)
		}
	}
</script>
<style scoped>
	.login{
		position: fixed;
		top: 30%;
		left: 0;
		width: 100%;
		text-align: center;
		color: #4a4a4a;
		font-size: 20px;
	}
	.login img{
		width: 50px;
		height: 50px;
		position: absolute;
		top: -60px;
		left: 50%;
		margin-left: -25px;
		border-radius: 50%;
	}
</style>