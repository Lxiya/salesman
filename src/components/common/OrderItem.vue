<template>
	<div>
		<div class="order-item">
			<div class="wrapper time-status-wrapper">
				<div class="time-status">
					<div class="order-tiem">创建时间：{{buyer.createTime}}</div>
					<div class="order-status">{{buyer.status}}</div>
				</div>
			</div>

			<div class="wrapper">
				<div class="buyer">
					<img class="buyer-icon" src="/static/images/buyer-icon.png" alt>
					<span class="buyer-name">{{buyer.shopName}}</span>
				</div>
			</div>

			<div class="detail-list">
				<div class="wrapper order-detail-wrapper" v-for="(item,index) in buyer.orderDetailList">
					<router-link :to="{path:'/orderDetail',query:{id:buyer.id}}">
						<div class="order-detail">
							<div class="order-img">
								<img :src="'https://www.jdh19.com' + item.url" alt>
							</div>
							<div class="order-name">{{item.packageName}}</div>
							<div class="order-price">
								<div class="order-total">￥{{item.price}}</div>
								<div class="order-mumber">×{{item.amount}}</div>
							</div>
						</div>
					</router-link>
				</div>
			</div>

			<div class="wrapper order-intro-wrapper">
				<div class="order-intro">
					<div class="intro-text">
						<p class="text">共{{buyer.amount}}件商品 合计：</p>
						<p class="number">￥{{buyer.reality}} (运费￥0.00)</p>
					</div>
				</div>
			</div>

			<div class="wrapper">
				<div class="order-operation">
					<router-link :to="{path:'/orderDetail',query:{id:buyer.id}}">
						<span class="btn-detail">订单详情</span>
					</router-link>

					<span class="btn-call">拨打电话</span>
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
div.last-item
	.order-item
		margin-bottom 0
.order-item
	font-size 0.28rem
	background-color #fff
	margin-bottom 0.26rem
	a
		color #000
	.blank
		height 0.2rem
	.wrapper
		padding-left 0.24rem
		&.time-status-wrapper
			border-bottom 0.02rem solid #f8f8f8
		&.order-detail-wrapper
			background-color #f8f8f8
		&.order-intro-wrapper
			border-bottom 0.02rem solid #f8f8f8
	.detail-list
		.order-detail-wrapper
			&:last-child
				.order-detail
					border-bottom 0 none
	.time-status
		display flex
		justify-content space-between
		padding 0.27rem 0 0.21rem
		padding-right 0.24rem
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
		padding-top 0.24rem
		padding-bottom 0.24rem
		padding-right 0.24rem
		border-bottom 0.02rem solid #fff
		.order-img
			margin-right 0.16rem
			img
				display block
				width 1.52rem
				height 1.52rem
		.order-name
			margin-right 0.35rem
			line-height 0.45rem
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
			padding-right 0.24rem
	.order-operation
		display flex
		justify-content flex-end
		padding 0.2rem 0
		padding-right 0.24rem
		span
			display inline-block
			padding 0.13rem 0.24rem
			border-radius 0.5rem
			&.btn-detail
				border #999999 solid 0.02rem
			&.btn-call
				margin-left 0.2rem
				border #1f69ff solid 0.02rem
				color #1f69ff
</style>
