<template>
	<div>
		<div class="change-password">
			<sale-top :title="title" :showBack="showBack" :where="where"></sale-top>
			<div class="change-input">
				<mt-field label="原密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
			</div>
			<div class="change-input">
				<mt-field label="新密码" placeholder="请输入6-16位英文数字组合" type="password" v-model="newPassword"></mt-field>
			</div>
			<div class="change-input">
				<mt-field label="确认密码" placeholder="请再次输入新密码" type="password" v-model="repeatNewPassword"></mt-field>
			</div>
			<div class="btn-change">
				<mt-button size="large" type="primary">修改</mt-button>
			</div>
		</div>
	</div>
</template>

<script>
import Top from "components/common/Top";

export default {
	name: "ChagePassword",
	components: {
		"sale-top": Top
	},
	data() {
		return {
			//控制样式
			title: "修改密码",
			showBack: true,
			where: "main/myinfo",
			// 控制数据绑定
			password: "",
			newPassword:'',
			repeatNewPassword:''
		};
	}
};
</script>

<style lang="stylus" scoped>
.change-password
	height 100vh
	padding-top 1.34rem
	background-color #f8f8f8
	.change-input
		padding-left 0.25rem
		background-color #fff
		.mint-cell
			border-bottom 0.01rem red
	.btn-change{
		width 7.02rem
		margin 0 auto
		margin-top 0.6rem
		.mint-button--primary{
			background-color #1f69ff
			border-radius 0.15rem
		}
	}
</style>


