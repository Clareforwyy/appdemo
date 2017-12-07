<template>
	<div class="login_group">
	    <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
	    <mt-field label="验证码" v-model="captcha">
		  	<img src="http://img3.imgtn.bdimg.com/it/u=273516175,2005985612&fm=27&gp=0.jpg" height="45px" width="100px">
		</mt-field>
	    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
	    <a href="javascript:;" class="btn_login" @click='tologin'>登录</a>
	</div>
</template>
<script>
	import { Toast } from 'mint-ui';
	export default {
		data(){
			return {
				username:'',
				captcha:'',
				password:''
			}
		},
		created(){
			// setTimeout(()=>{
			// 	this.$router.push('home');//跳转/home路由
			// },3000)
			this.showpas();
		},
		methods:{
			showpas(){
				Toast('账号123密码123');
			},
			tologin(){
				if(this.username == ''){
					Toast('请输入账号');
					return false;
				}
				if(this.captcha == ''){
					Toast('请输入验证码');
					return false;
				}
				if(this.password == ''){
					Toast('请输入密码');
					return false;
				}
				if(this.username == '123' && this.password == '123' && this.captcha == '2907'){
					localStorage.setItem('accessToken','sas');
					this.$router.push('home');//跳转/home路由
				}else{
					Toast('账号123密码123');
				}
			}
		}
	}
</script>
<style lang="less">
	html{
		height: 100%;
	}
	body{
		height: 100%;
		background: url("../../static/images/timg.jpg") round;
		.login_group{
			.mint-cell{
				background: rgba(255,255,255,0.3);
			}
			.mint-cell-wrapper{
				background: none;
				input{
					margin: 0;
					border: none;
					background: none;
				}
			}
		}
	}
	
</style>
<style scoped lang="less">
	.login_group{
		position: fixed;
		top: 30%;
		left: 0;
		width: 100%;
		text-align: center;
		color: #4a4a4a;
		font-size: 14px;
		.btn_login{
			margin-top: 30px;
			display: inline-block;
			width: 60px;
			background: #007aff;
			height: 30px;
			line-height: 30px;
			color: #ffffff;
		}
	}
	
</style>