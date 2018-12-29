<template>
	<div>
		<div class="order-management">
			<div class="management-title">
				<img src="static/images/management-title.png" alt>
			</div>
			<div class="management-icon">
				<div class="icon-list">
					<router-link :to="{path:'/order/status/2'}">
						<sale-management-icon>
							<i slot="icon-number" v-show="orderStatusNumber.waitSend">{{orderStatusNumber.waitSend}}</i>
							<img src="static/images/waiting-deliver.png" alt slot="icon-img">
							<h1 slot="icon-name">待发货</h1>
						</sale-management-icon>
					</router-link>

					<router-link :to="{path:'/order/status/3'}">
						<sale-management-icon>
							<i slot="icon-number" v-show="orderStatusNumber.hadSend">{{orderStatusNumber.hadSend}}</i>
							<img src="static/images/finished-deliver.png" alt slot="icon-img">
							<h1 slot="icon-name">已发货</h1>
						</sale-management-icon>
					</router-link>

					<router-link :to="{path:'/order/status/4'}">
						<sale-management-icon>
							<i slot="icon-number" v-show="orderStatusNumber.received">{{orderStatusNumber.received}}</i>
							<img src="static/images/finished-accpect.png" alt slot="icon-img">
							<h1 slot="icon-name">已收货</h1>
						</sale-management-icon>
					</router-link>
				</div>
				<div class="icon-list">
					<router-link :to="{path:'/order/status/5'}">
						<sale-management-icon>
							<i slot="icon-number" v-show="orderStatusNumber.finished">{{orderStatusNumber.finished}}</i>
							<img src="static/images/finished.png" alt slot="icon-img" class="finished">
							<h1 slot="icon-name">已完成</h1>
						</sale-management-icon>
					</router-link>

					<router-link :to="{path:'/order/status/0'}">
						<sale-management-icon>
							<i slot="icon-number" v-show="orderStatusNumber.close">{{orderStatusNumber.close}}</i>
							<img src="static/images/closed.png" alt slot="icon-img">
							<h1 slot="icon-name">已关闭</h1>
						</sale-management-icon>
					</router-link>

					<router-link :to="{path:'/order/status/6'}">
						<sale-management-icon>
							<i slot="icon-number" v-show="orderStatusNumber.allOrder">{{orderStatusNumber.allOrder}}</i>
							<img src="static/images/all-orders.png" alt slot="icon-img">
							<h1 slot="icon-name">全部订单</h1>
						</sale-management-icon>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ManagementIcon from "components/common/ManagementIcon";

export default {
	name: "OrderManagement",
	components: {
		"sale-management-icon": ManagementIcon
	},
	props: {
		orderStatusNumber: Object
	}
};
</script>

<style lang="stylus" scoped>
div.order-management
	width 93%
	padding-top 0.48rem
	padding-bottom 0.73rem
	margin 0 auto
	margin-bottom 0.38rem
	background-color #fff
	border-radius 0.3rem
	.management-title
		margin-bottom 0.8rem
		img
			display block
			width 5.58rem
			margin 0 auto
	.management-icon
		margin 0 auto
		width 4.97rem
		.icon-list
			display flex
			justify-content space-between
			flex-wrap wrap
			margin-bottom 0.71rem
			&:last-child
				margin-bottom 0
			.icon
				display flex
				flex-direction column
				align-items center
				position relative
				img
					display block
					margin-bottom 0.22rem
					&.finished
						margin-left 0.12rem
				h1
					font-size 0.24rem
					color #666666
				i
					display flex
					justify-content center
					align-items center
					position absolute
					right -0.19rem
					top -0.15rem
					box-sizing border-box
					width 0.39rem
					height 0.39rem
					background-color #ff5a00
					border-radius 50%
					font-style normal
					font-size 0.23rem
					color #fff
</style>


