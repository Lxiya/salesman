<template>
	<div>
		<div class="my-info">
			<div class="info-header">
				<div class="info-logout">
					<span>退出</span>
				</div>
				<div class="info-my">
					<p class="my-icon">
						<img src="/static/images/store-test.png" alt>
					</p>
					<p class="my-name">李二狗</p>
					<p class="my-mubner">编号：123456789</p>
				</div>
			</div>
			<div class="info-content">
				<div class="content-operation">
					<mt-cell title="标题文字" to="//github.com" is-link>
						<img slot="icon" src="" width="24" height="24">
					</mt-cell>
				</div>
				<div class="content-operation">
					<mt-cell title="标题文字" to="//github.com" is-link>
						<img slot="icon" src="" width="24" height="24">
					</mt-cell>
				</div>
				<div class="content-operation">
					<mt-cell title="标题文字" to="//github.com" is-link>
						<img slot="icon" src="" width="24" height="24">
					</mt-cell>
				</div>
				<div class="content-operation">
					<mt-cell title="标题文字" to="//github.com" is-link>
						<img slot="icon" src="" width="24" height="24">
					</mt-cell>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "MyInfo",
	components: {}
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
	.info-content{
		background-color #fff
		padding-left 0.24rem
		.content-operation{
			border-bottom 0.01rem rgba(236,236,236,0.5)
			&:last-child{
				border-bottom 0 none
			}
		}
	}
</style>
