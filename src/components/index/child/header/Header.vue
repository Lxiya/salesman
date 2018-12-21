<template>
	<header id="header" class="header">
		<div class="header-banner">
			<mt-swipe :auto="auto">
				<mt-swipe-item>
					<img src="/static/images/header-banner.png" alt>
				</mt-swipe-item>
				<mt-swipe-item>
					<img src="/static/images/header-banner.png" alt>
				</mt-swipe-item>
				<mt-swipe-item>
					<img src="/static/images/header-banner.png" alt>
				</mt-swipe-item>
			</mt-swipe>
			<div class="income-order">
				<div class="income-order-show">
					<div class="order-number">
						<router-link to="/currentOrder">
							<div class="number-show">
								<h1 class="number-text">今日有效订单</h1>
								<p class="number">
									118
									<span class="unit">单</span>
								</p>
							</div>
						</router-link>
					</div>
					<div class="split"></div>
					<div class="income-number">
						<div class="number-show">
							<h1 class="number-text">今日订单收入</h1>
							<p class="number">
								<span class="unit">￥</span>19169.62
								<span class="unit">元</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	name: "Header",
	props: {
		userTel: String
	},
	data() {
		return {
			auto: 2000
		};
	}
};
</script>

<style lang="stylus" scoped>
header
	min-height 6.57rem
	margin-bottom 0.26rem
	.mint-swipe-indicators
		bottom 0.5rem
	div.header-banner
		position relative
		height 4.54rem
		img
			display block
			max-width 100%
			height auto
	div.income-order
		position absolute
		left 0
		right 0
		bottom -2.05rem
		width 100%
		div.income-order-show
			display flex
			justify-content space-around
			align-items center
			width 93%
			margin 0 auto
			min-height 2.42rem
			background-color #fff
			border-radius 0.3rem
			a
				color #000
			div.split
				width 1px
				height 2.08rem
				background-color #e7e7e7
			div.order-number
				flex 1
				p
					color #0e5cfb
			div.income-number
				flex 1
				p
					color #ff4e00
			h1
				font-size 0.3rem
				text-align center
				margin-bottom 0.3rem
			p
				font-size 0.48rem
				text-align center
				&.number span
					font-size 0.24rem
</style>
