<template>
	<div>
		<sale-top :title="title"></sale-top>
		<div class="login-form">
			<div class="from-group">
				<label for="phone-number">
					<img src="static/images/phone-number-icon.png" alt class="phone-number">
				</label>
				<input placeholder="请输入手机号码" type="text" id="phone-number" v-model="phoneNumber">
			</div>
			<div class="from-group">
				<label for="phone-number">
					<img src="static/images/password-icon.png" alt>
				</label>
				<input
					placeholder="请输入密码"
					type="password"
					id="password"
					v-model="password"
					@keyup.enter="login"
				>
			</div>
			<mt-button size="large" type="primary" @click="login" @keyup.enter="login">登录</mt-button>
		</div>
	</div>
</template>

<script>
import { Indicator } from "mint-ui";
import { Toast } from 'mint-ui';
import Top from "components/common/Top";

export default {
	name: "Login",
	data() {
		return {
			title: "登录",
			phoneNumber: "",
			password: "",
			user: {}
		};
	},
	components: {
		"sale-top": Top
	},
	methods: {
		login() {

			if (this.phoneNumber.trim() == '' || this.password.trim() == '') {
				Toast({
					message: '请输入用户名和密码',
					position: 'bottom',
					duration: 5000
				});
				return false
			}

			Indicator.open();
			this.$http
				.get("/app/sale/saleLogin", {
					params: {
						telePhone: this.phoneNumber,
						password: this.password
					}
				})
				.then(response => {
					response = response.body;
					Indicator.close();
					this.user = response.data;
					console.log(this.user)

					if (this.user) {
						this.$router.push("/main/index");
						//登录后本地保存登录用户的信息
						this.$store.commit("login", this.user);
						jstoandroid.resgiterJpush(this.user.id);
					} else {
						Toast({
							message: '用户名或密码错误',
							position: 'bottom',
							duration: 5000
						});
					}
					// } else {
					// 	Toast({
					// 		message: '用户名或密码错误',
					// 		position: 'bottom',
					// 		duration: 5000
					// 	});
					// }


				});
		}
	},
	created() {
		if (localStorage.getItem("user")) {
			this.$router.push("main/index");
		}
	}
};
</script>

<style lang="stylus" scoped>
div.login-form
	height 100vh
	background-color #f8f8f8
	padding 0 0.24rem
	padding-top 1.22rem
	background-color #f8f8f8
	div.from-group
		display flex
		justify-content space-between
		align-items center
		padding-top 0.48rem
		padding-left 0.15rem
		padding-bottom 0.14rem
		border-bottom 1px solid rgba(207, 207, 207, 0.5)
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
			font-size 0.3rem
			color #000000
.mint-button--primary
	margin-top 0.64rem
	height 0.89rem
	background-color #1f69ff
	font-size 0.28rem
	border-radius 0.4rem
</style>

