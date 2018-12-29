<template>
	<div>
		<div class="order">
			<div class="order-top">
				<sale-top
					:title="title"
					:showBack="showBack"
					:showSearch="showSearch"
					:search="search"
					:status="status"
					:goBack="goBack"
				></sale-top>

				<mt-navbar v-model="selected" :fixed="fixed" class="order-navbar">
					<mt-tab-item id="2">
						<router-link :to="{path:'/order/status/2'}">待发货</router-link>
					</mt-tab-item>
					<mt-tab-item id="3">
						<router-link :to="{path:'/order/status/3'}">已发货</router-link>
					</mt-tab-item>
					<mt-tab-item id="4">
						<router-link :to="{path:'/order/status/4'}">已收货</router-link>
					</mt-tab-item>
					<mt-tab-item id="5">
						<router-link :to="{path:'/order/status/5'}">已完成</router-link>
					</mt-tab-item>
					<mt-tab-item id="0">
						<router-link :to="{path:'/order/status/0'}">已关闭</router-link>
					</mt-tab-item>
					<mt-tab-item id="6">
						<router-link :to="{path:'/order/status/6'}">全部</router-link>
					</mt-tab-item>
				</mt-navbar>
			</div>
			<div class="order-content">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
import Top from "components/common/Top";

export default {
	name: "Order",
	components: {
		"sale-top": Top
	},
	data() {
		return {
			status: "",

			// 控制选中
			selected: "",

			// 控制样式
			fixed: true,
			title: "订单",
			showBack: true,
			showSearch: true,
			search: "/orderSearch",
			goBack: '/main/index'
		};
	},

	mounted() {
		this.status = this.$route.params.status;
		this.selected = this.$route.params.status.toString()
	},
	//监听路由变化

	beforeRouteUpdate(to, from, next) {
		this.status = to.params.status
		next();
	},

	// $route(to, from) {
	// 	this.status = this.$route.params.status

	// 	if (to.path == '/main/index') {
	// 		from.meta.keepAlive = false;
	// 		// alert('111')
	// 	}
	// }

	// beforeRouteLeave(to, from, next) {
	// 	if (to.path == '/orderDetail') {
	// 		from.meta.keepAlive = true;
	// 	} if (to.path == '/main/index') {
	// 		from.meta.keepAlive = false;
	// 	}

	// 	next();
	// }
};
</script>

<style lang="stylus" scoped>
.order
	box-sizing border-box
	min-height 100vh
	padding-top 1.99rem
	background-color #f8f8f8
	.order-top
		margin-bottom 0.21rem
	.order-content
		// padding-bottom 0.26rem
	.mint-navbar .mint-tab-item
		box-sizing border-box
		padding 0
		display inline-block
		height 100%
		.mint-tab-item-label
			height 100%
			a
				display flex
				align-items center
				justify-content center
				// display block
				width 100%
				height 100%
	.order-navbar
		height 0.77rem
		box-sizing border-box
		top 1.22rem
</style>

