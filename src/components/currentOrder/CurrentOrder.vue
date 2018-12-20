<template>
	<div>
		<div class="current-order">
			<div class="order-top">
				<sale-top :title="title" :showBack="showBack" :where="where"></sale-top>
			</div>
			<div class="order-content">
				<sale-order-item></sale-order-item>
			</div>
		</div>
	</div>
</template>

<script>
import Top from "components/common/Top";
import OrderItem from "components/common/OrderItem";

export default {
	name: "CurrentOrder",
	components: {
		"sale-top": Top,
		"sale-order-item": OrderItem
	},
	data() {
		return {
			// 控制样式
			title: "今日有效订单",
			showBack: true,
			where: "/index"
		};
	}
};
</script>

<style lang="stylus" scoped>
.current-order
	height 100vh
	padding-top 1.22rem
	background-color #f2f2f2
</style>

