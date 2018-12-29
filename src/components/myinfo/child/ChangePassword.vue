<template>
	<div>
		<div class="change-password">
			<sale-top :title="title" :showBack="showBack" :where="where" :goBack="goBack"></sale-top>
			<div class="change-input">
				<div class="from-item">
					<mt-field
						label="原密码"
						placeholder="请输入密码"
						type="password"
						v-model="password"
						:state="confirmResult"
						@blur.native.capture="confirmOldPassword"
					></mt-field>
				</div>
			</div>

			<div class="change-input">
				<div class="from-item">
					<mt-field label="新密码" placeholder="请输入6-16位英文或数字" type="password" v-model="newPassword"></mt-field>
				</div>
			</div>

			<div class="change-input">
				<mt-field
					label="确认密码"
					placeholder="请再次输入新密码"
					type="password"
					v-model="repeatNewPassword"
					:state="evalPassword"
				></mt-field>
			</div>

			<div class="btn-change" @click="changePassWord" @keyup.enter="changePassWord">
				<mt-button size="large" type="primary" :disabled="disabled">修改</mt-button>
			</div>
		</div>
	</div>
</template>

<script>
import Top from "components/common/Top";
import { Toast } from "mint-ui";
import { Indicator } from "mint-ui";

export default {
	name: "ChagePassword",
	components: {
		"sale-top": Top
	},
	data() {
		return {
			uerId: "",
			//控制样式
			title: "修改密码",
			showBack: true,
			goBack: "main/myinfo",
			disabled: true,
			// 控制数据绑定
			password: "",
			newPassword: "",
			repeatNewPassword: "",
			confirmResult: "",
			evalPassword: ""
		};
	},
	watch: {
		repeatNewPassword: function () {
			// if(this.repeatNewPassword)
			if (this.repeatNewPassword !== "") {
				this.repeatNewPassword === this.newPassword
					? (this.evalPassword = "success")
					: (this.evalPassword = "error");
				this.confirmResult === "success" && this.evalPassword === "success"
					? (this.disabled = false)
					: (this.disabled = true);
			} else {
				this.evalPassword = "";
			}
		},
		newPassword: function () {
			if (this.repeatNewPassword !== "" && this.newPassword !== "") {
				this.repeatNewPassword === this.newPassword
					? (this.evalPassword = "success")
					: ((this.evalPassword = "error"), (this.disabled = true));
			} else {
				this.evalPassword = "";
			}
		},
		password: function () {
			this.confirmOldPassword();
		}
	},
	methods: {
		confirmOldPassword() {
			this.$http
				.get("/app/sale/checkOldPassword", {
					params: {
						id: this.userId,
						oldPassword: this.password
					}
				})
				.then(response => {
					response = response.body;
					!response.success
						? ((this.confirmResult = "error"), (this.disabled = true))
						: (this.confirmResult = "success");
				});
		},
		changePassWord() {
			Indicator.open();
			this.$http
				.get("/app/sale/updatePassword", {
					params: {
						id: this.userId,
						password: this.newPassword
					}
				})
				.then(response => {
					Indicator.close();
					response = response.body;
					Toast({
						message: "操作成功",
						iconClass: "icon icon-success"
					});
					setTimeout(() => {
						this.$store.commit("loginOut");
					}, 2000);
				});
		}
	},
	mounted() {
		this.userId = this.$store.getters.userInfo.id;
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
		.from-item
			border-bottom 0.02rem solid #ececec
	.btn-change
		width 7.02rem
		margin 0 auto
		margin-top 0.6rem
		.mint-button--primary
			background-color #1f69ff
			border-radius 0.15rem
</style>


