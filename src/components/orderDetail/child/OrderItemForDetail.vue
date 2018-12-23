<template>
	<div>
		<div class="order-item">
			<div class="wrapper">
				<div class="buyer">
					<img class="buyer-icon" src="/static/images/buyer-icon.png" alt>
					<span class="buyer-name">{{buyer.shopName}}</span>
				</div>
			</div>

			<div class="wrapper order-detail-wrapper" v-for="(item,index) in buyer.orderDetailList">
				<div class="order-detail">
					<div class="order-img">
						<img :src="'https://www.jdh19.com' +  item.url" alt>
					</div>
					<div class="order-name">
						{{item.packageName}}
					</div>
					<div class="order-price">
						<div class="order-total">￥{{item.price}}</div>
						<div class="order-mumber">×{{item.amount}}</div>
					</div>
				</div>
			</div>

			<div class="wrapper order-intro-wrapper">
				<div class="order-intro">
					<div class="intro-text">
						<p class="text">共1件商品 合计：</p>
						<p class="number">
							<i style="font-style:normal;font-size:0.32rem;color:#ff5a00">￥{{buyer.reality}}</i> (运费￥0.00)
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "OrderItem",
	props: {
		buyer: Object
	}
};
</script>

<style lang="stylus" scoped>
.order-item
	font-size 0.28rem
	background-color #fff
	a
		color #000
	.blank
		height 0.2rem
	.wrapper
		padding-left 0.24rem
		padding-right 0.24rem
		&.time-status-wrapper
			border-bottom 0.02rem solid #f8f8f8
		&.order-detail-wrapper
			background-color #f8f8f8
		&.order-intro-wrapper
			border-bottom 0.02rem solid #f8f8f8
	.time-status
		display flex
		justify-content space-between
		padding 0.27rem 0 0.21rem
		.order-status
			color #ff5a00
	.buyer
		display flex
		justify-content flex-start
		align-items center
		.buyer-icon
			display block
			width 0.36rem
			height 0.32rem
			margin-right 0.29rem
			padding-top 0.21rem
			padding-bottom 0.25rem
	.order-detail
		display flex
		align-items flex-start
		justify-content space-between
		padding-top 0.26rem
		padding-bottom 0.24rem
		.order-img
			margin-right 0.16rem
			img
				display block
				width 1.52rem
				height 1.52rem
		.order-name
			line-height 0.45rem
			margin-right 0.35rem
		.order-price
			line-height 0.45rem
			font-size 0.26rem
			.order-mumber
				text-align right
	.order-intro
		.intro-text
			display flex
			justify-content flex-end
			align-items center
			padding 0.3rem 0
</style>
