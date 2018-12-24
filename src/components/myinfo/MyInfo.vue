<template>
	<div>
		<div class="my-info">
			<div class="info-header">
				<div class="info-logout">
					<span @click="loginOut">退出</span>
				</div>
				<div class="info-my">
					<p class="my-icon">
						<img :src="'https://www.jdh19.com' + imgUrl" alt>
					</p>
					<p class="my-name">{{name}}</p>
					<p class="my-mubner">编号：{{userNumber}}</p>
				</div>
			</div>
			<div class="info-content">
				<div class="content-operation">
					<mt-cell title="修改密码" to="/changePassword" is-link>
						<img slot="icon" src="/static/images/change-password.png" class="oper-icon">
					</mt-cell>
				</div>
				<div class="content-operation">
					<mt-cell title="清除缓存" to="//github.com" is-link>
						<img slot="icon" src="/static/images/clear-cache.png" class="oper-icon clear-icon">
					</mt-cell>
				</div>
				<div class="content-operation">
					<mt-cell title="如何使用" to="//github.com" is-link>
						<img slot="icon" src="/static/images/how-use.png" class="oper-icon">
					</mt-cell>
				</div>
				<div class="content-operation">
					<mt-cell title="关于我们" to="//github.com" is-link>
						<img slot="icon" src="/static/images/about.png" class="oper-icon about-icon">
					</mt-cell>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Footer from "components/common/Footer";

export default {
	name: "MyInfo",
	data() {
		return {
			imgUrl: "",
			userNumber: "",
			name: ""
		};
	},
	methods: {
		loginOut() {
			this.$store.commit("loginOut");
		}
	},
	mounted() {
		this.imgUrl = this.$store.getters.userInfo.photo;
		this.userNumber = this.$store.getters.userInfo.number;
		this.name = this.$store.getters.userInfo.name;
	}
};
</script>

<style lang="stylus">
.my-info
	height 100vh
	background-color #f2f2f2
	.info-header
		width 100%
		height 4.62rem
		background url('/static/images/my-info-bg.png')
		background-size cover
		.info-logout
			text-align right
			padding-right 0.25rem
			span
				font-size 0.3rem
				color #fff
		.info-my
			display flex
			flex-direction column
			justify-content center
			align-items center
			p
				font-size 0.28rem
				color #fff
				&.my-icon
					margin-bottom 0.27rem
					img
						display block
						box-sizing border-box
						width 1.5rem
						height 1.5rem
						border 0.07rem solid #fff
						border-radius 50%
				&.my-name
					margin-bottom 0.39rem
	.info-content
		background-color #fff
		padding-left 0.24rem
		.content-operation
			border-bottom 0.01rem rgba(236, 236, 236, 0.5)
			&:last-child
				border-bottom 0 none
			.mint-cell
				min-height 1.07rem
			.mint-cell-title
				display flex
				align-items flex-end
			img.oper-icon
				display inline-block
				width 0.35rem
				height 0.41rem
				margin-right 0.33rem
				&.clear-icon
					width 0.38rem
					height 0.36rem
				&.about-icon
					width 0.38rem
					height 0.37rem
</style>
