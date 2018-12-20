<template>
	<div>
		<div class="order-detail">
			<div class="order-top">
				<sale-top :title="title" :showBack="showBack" :where="where"></sale-top>
			</div>
			<div class="order-content">
				<div></div>
			</div>
		</div>
	</div>
</template>

<script>
import Top from "components/common/Top";
import OrderItem from "components/common/OrderItem";

export default {
	name: "OrderDetail",
	data() {
		return {
			title: "订单详情",
			showBack: true,
			where: "/order"
		};
	},
	components: {
		"sale-top": Top,
		"sale-order-item": OrderItem
	}
};
</script>

<style lang="stylus" scoped>
.order-detail
	height 100vh
	padding-top 1.22rem
	background-color #f8f8f8
</style>

