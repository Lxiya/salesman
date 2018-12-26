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
			// loading: false,
			// finished: false,
			// offset: 10,
			// loadingText: "加载中",

			// page: 1,
			// size: 5,
			// orderList: [],
			status: "",
			// userTel: "",
			// 控制选中
			selected: "",
			// 控制样式
			fixed: true,
			title: "订单",
			showBack: true,
			showSearch: true,
			search: "/OrderSearch"
		};
	},
	// methods: {
	// 	requestData(page, size) {
	// 		this.$http
	// 			.get("/app/sale/selectOrderListByStatus", {
	// 				params: {
	// 					status: this.status,
	// 					page: this.page,
	// 					size: this.size,
	// 					phone: this.userTel
	// 				}
	// 			})
	// 			.then(reponse => {
	// 				reponse = reponse.body;
	// 				reponse.data.list.forEach(element => {
	// 					this.orderList.push(element);
	// 				});
	// 			});
	// 	},
	// 	loadMore() {
	// 		console.log("加载更多");
	// 	}
	// },
	mounted() {
		// this.status = this.$route.query.status;
		// this.userTel = this.$store.getters.userInfo.telePhone;
		this.selected = this.$route.params.status.toString();
		// this.requestData(this.page, 5);
	}
	// watch: {
	// 	$route(to, from) {
	// 		// this.orderList = []
	// 		this.status = this.$route.params.status;
	// 		if (this.$route.params.status) {
	// 			this.requestData(this.page, 5);
	// 		}

	// 	}
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
		padding-bottom 0.26rem
	.mint-navbar .mint-tab-item
		padding 0.3rem 0
	.order-navbar
		height 0.77rem
		box-sizing border-box
		top 1.22rem
</style>

