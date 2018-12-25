<template>
	<div>
		<div class="searchList">
			<sale-top :title="title" :showBack="showBack"></sale-top>

			<div class="order-content">
				<van-list
					v-model="loading"
					:finished="finished"
					:loading-text="loadingText"
					@load="loadMore"
					:offset="offset"
				>
					<sale-order-item v-for="(item,index) in orderList" :key="index" :buyer="item"></sale-order-item>
				</van-list>
			</div>
		</div>
	</div>
</template>

<script>
import Top from "components/common/Top";
import OrderItem from "components/common/OrderItem";

export default {
	name: "SearchList",
	components: {
		"sale-top": Top,
		"sale-order-item": OrderItem
	},
	data() {
		return {
			userTel: "",
			status: "",
			shopName: "",
			number: "",
			buyerTel: "",
			startTime: "",
			endTime: "",

			page: 1,
			size: 5,
			orderList: [],

			title: "查询结果",
			showBack: true,

			loading: false,
			finished: false,
			offset: 10,
			loadingText: "加载中"
		};
	},
	methods: {
		loadMore() {
			console.log("加载更多");
		}
	},
	mounted() {
		this.userTel = this.$route.query.phone;
		this.status = this.$route.query.status;
		this.shopName = this.$route.query.shopName;
		this.number = this.$route.query.number;
		this.buyerTel = this.$route.query.buyerTel;
		this.startTime = this.$route.query.startTime;
		this.endTime = this.$route.query.endTime;

		this.$http
			.get("/app/sale/search", {
				params: {
					phone: this.userTel,
					status: this.status,
					shopName: this.shopName,
					number: this.number,
					buyerTel: this.buyerTel,
					startTime: this.startTime,
					endTime: this.endTime,
					page: this.page,
					size: this.size
				}
			})
			.then(reponse => {
				reponse = reponse.body;
				reponse.data.list.forEach(element => {
					this.orderList.push(element);
				});
			});
	}
};
</script>

<style lang="stylus" scoped>
.searchList
	box-sizing border-box
	min-height 100vh
	padding-top 1.22rem
	background-color #f8f8f8
	.order-content
		padding-bottom 0.26rem
		.van-list
			min-height 100vh
			div
				margin-bottom 0.26rem
				&:nth-child(5n)
					margin-bottom 0
</style>

