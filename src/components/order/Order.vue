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
					:status="status"
				></sale-top>
				<mt-navbar v-model="selected">
					<mt-tab-item id="2">待发货</mt-tab-item>
					<mt-tab-item id="3">已发货</mt-tab-item>
					<mt-tab-item id="4">已收货</mt-tab-item>
					<mt-tab-item id="5">已完成</mt-tab-item>
					<mt-tab-item id="0">已关闭</mt-tab-item>
					<mt-tab-item id="6">全部</mt-tab-item>
				</mt-navbar>
			</div>

			<div class="order-content">
				<ul
					v-infinite-scroll="loadMore"
					infinite-scroll-disabled="disabledLoad"
					infinite-scroll-distance="0"
				>
					<li v-for="(item,index) in orderList" :key="index">
						<sale-order-item :buyer="item"></sale-order-item>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import { Indicator } from "mint-ui";
import Top from "components/common/Top";
import OrderItem from "components/common/OrderItem";

export default {
	name: "Order",
	components: {
		"sale-top": Top,
		"sale-order-item": OrderItem
	},
	data() {
		return {
			page: 1,
			size: 5,
			orderList: [],
			status: "",
			userTel: "",
			// 控制选中
			selected: "2",
			// 控制样式
			title: "订单",
			showBack: true,
			showSearch: true,
			where: "main/index",
			search: "/OrderSearch"
		};
	},
	methods: {
		requestData(page, size) {
			Indicator.open();
			this.$http
				.get("/app/sale/selectOrderListByStatus", {
					params: {
						status: this.status,
						page: this.page,
						size: this.size,
						phone: this.userTel
					}
				})
				.then(reponse => {
					reponse = reponse.body;
					Indicator.close();
					reponse.data.list.forEach(element => {
						this.orderList.push(element);
					});
				});
		},
		loadMore() {
			this.disabledLoad = true;
			this.page++;
			this.requestData(this.page - 1, 5);
		}
	},
	mounted() {
		this.status = this.$route.query.status;
		this.userTel = this.$store.getters.userInfo.telePhone;
		this.requestData(this.page, 5);
	}
};
</script>

<style lang="stylus" scoped>
.order
	box-sizing border-box
	min-height 100vh
	padding-top 1.22rem
	background-color #f8f8f8
	.order-top
		margin-bottom 0.21rem
	.order-content
		padding-bottom 0.26rem
		li
			margin-bottom 0.26rem
			&:last-child
				margin-bottom 0
	.mint-navbar .mint-tab-item
		padding 0.3rem 0
</style>

