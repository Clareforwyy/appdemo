<template>
	<div class="search_box">
		
		<el-input
		    placeholder="请输入内容"
		    prefix-icon="el-icon-search"
		    v-model="input21">
		  </el-input>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				input21:''
			}
		},
		created(){
			
			
			
		}
	}
</script>
<style scoped>
	.search_box{
		margin-top: 40px;
	}
	.el-input--prefix .el-input__inner{
		margin-bottom: 0;
	}
</style>