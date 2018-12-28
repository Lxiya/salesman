<template>
	<div>
		<div class="searchList">
			<sale-top :title="title" :showBack="showBack"></sale-top>

			<div class="order-content">
				<van-list v-model="loading" :finished="finished" @load="loadMore" finished-text="没有更多了">
					<sale-order-item
						v-for="(item,index) in orderList"
						:key="index"
						:buyer="item"
						:class="(total==index+1)?'last-item':''"
					></sale-order-item>
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
			// 列表属性
			loading: false,
			finished: false,
			total: 0,

			// 请求参数
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


		};
	},
	methods: {
		// 加载更多
		loadMore() {
			let page = this.page + 1

			setTimeout(() => {
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
					}).then(reponse => {
						reponse = reponse.body;

						reponse.data.list.forEach(element => {
							this.orderList.push(element);
						});

						this.total = reponse.data.total
						this.loading = false
						this.page++

						if (this.orderList.length === reponse.data.total) {
							this.finished = true
						}
					})

			}, 500)

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
	}
};
</script>

<style lang="stylus" scoped>
.searchList
	padding-top 1.22rem
	background-color #f8f8f8
</style>

