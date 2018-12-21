<template>
	<div>
		<div class="order">
			<div class="order-top">
				<sale-top
					:title="title"
					:showBack="showBack"
					:showSearch="showSearch"
					:where="where"
					:search="search"
				></sale-top>
				<mt-navbar v-model="selected">
					<mt-tab-item id="1">待发货</mt-tab-item>
					<mt-tab-item id="2">已发货</mt-tab-item>
					<mt-tab-item id="3">已收货</mt-tab-item>
					<mt-tab-item id="4">已完成</mt-tab-item>
					<mt-tab-item id="5">已关闭</mt-tab-item>
					<mt-tab-item id="6">全部</mt-tab-item>
				</mt-navbar>
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
	name: "Order",
	components: {
		"sale-top": Top,
		"sale-order-item":OrderItem
	},
	data() {
		return {
			// 控制选中状态
			selected: "1",
			// 控制样式
			title: "订单",
			showBack: true,
			showSearch: true,
			where: "main/index",
			search: "/search"
		};
	}
};
</script>

<style lang="stylus" scoped>
.order
	height 100vh
	padding-top 1.22rem
	background-color #f8f8f8
	.order-top
		margin-bottom 0.21rem
	.mint-navbar .mint-tab-item
		padding 0.3rem 0
</style>

