<template>
	<div>
		<sale-top :title="title"></sale-top>
		<div class="login-form">
			<div class="from-group">
				<label for="phone-number">
					<img src="./phone-number-icon.png" alt class="phone-number">
				</label>
				<input placeholder="请输入手机号码" type="text" id="phone-number" v-model="phoneNumber">
			</div>
			<div class="from-group">
				<label for="phone-number">
					<img src="./password-icon.png" alt>
				</label>
				<input placeholder="请输入密码" type="password" id="password" v-model="password">
			</div>
			<mt-button size="large" type="primary" @click="login">登录</mt-button>
		</div>
	</div>
</template>

<script>
import Top from "components/common/Top";

export default {
	name: "Login",
	data() {
		return {
			title: "登录",
			phoneNumber: "",
			password: ""
		};
	},
	components: {
		"sale-top": Top
	},
	methods:{
		login(){
			alert(this.phoneNumber)
		}
	}
};
</script>

<style lang="stylus" scoped>
div.login-form
	padding 0 0.24rem
	padding-top 0.48rem
	background-color #f8f8f8
	div.from-group
		display flex
		justify-content space-between
		align-items center
		margin-bottom 0.67rem
		padding-left 0.15rem
		padding-bottom 0.14rem
		border-bottom 1px solid rgba(207,207,207,0.5)
		label
			margin-right 0.25rem
			img
				display block
				width 0.3rem
				height 0.38rem
				&.phone-number
					height 0.43rem
		input
			outline 0 none
			border 0 none
			background-color transparent
			flex 1
			font-size 0.26rem
			color #999999
.mint-button--primary
	height 0.89rem
	background-color #1f69ff
	font-size 0.28rem
	border-radius 0.4rem
</style>

