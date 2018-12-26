<template>
	<div>
		<div class="order-detail">
			<div class="order-top">
				<sale-top :title="title" :showBack="showBack"></sale-top>
			</div>
			<div class="order-content">
				<div class="order-status">
					<span>{{order.status}}</span>
				</div>

				<div class="wrapper accpect-wrapper">
					<div class="accpect-info">
						<div class="location-icon">
							<img src="/static/images/location.png" alt>
						</div>
						<div class="accpect-account">
							<div class="name-phone">
								<span class="name">收货人：{{order.buyerName}}</span>
								<span class="phone">{{order.buyerTel}}</span>
							</div>
							<div class="address">收货地址：{{order.addressContent}}</div>
						</div>
					</div>
				</div>

				<sale-order-item-detail :buyer="order"></sale-order-item-detail>
			</div>
		</div>
	</div>
</template>

<script>
import Top from "components/common/Top";
import OrderItemForDetail from "components/orderDetail/child/OrderItemForDetail";

export default {
	name: "OrderDetail",
	data() {
		return {
			orderId: "",
			order: {},
			// 控制显示
			title: "订单详情",
			showBack: true
		};
	},
	components: {
		"sale-top": Top,
		"sale-order-item-detail": OrderItemForDetail
	},
	mounted() {
		this.orderId = this.$route.query.id;
		this.$http
			.get("/app/sale/orderDetail", {
				params: {
					id: this.orderId
				}
			})
			.then(reponse => {
				reponse = reponse.body;
				this.order = reponse.data;
			});
	}
};
</script>

<style lang="stylus" scoped>
.order-detail
	height 100vh
	box-sizing border-box
	padding-top 1.22rem
	background-color #f8f8f8
	font-size 0.28rem
	.wrapper
		&.accpect-wrapper
			background-color #fff
			padding 0.33rem 0
			padding-left 0.24rem
			padding-right 0.24rem
			margin-bottom 0.32rem
	.order-status
		display flex
		padding-top 0.4rem
		padding-bottom 0.75rem
		padding-left 0.24rem
		background-color #1f69ff
		span
			color #fff
			font-size 0.36rem
	.accpect-info
		display flex
		justify-content flex-start
		align-items center
		.location-icon
			margin-right 0.33rem
			img
				display block
				width 0.46rem
				height 0.46rem
	.accpect-info
		line-height 0.36rem
		.name-phone
			display flex
			justify-content space-between
</style>

