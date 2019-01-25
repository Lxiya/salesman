<template>
	<div>
		<div class="status-list">
			<van-list
				v-model="loading"
				:finished="finished"
				@load="loadMore"
				finished-text="没有更多了"
				:immediate-check="immediateCheck"
			>
				<sale-order-item
					v-for="(item,index) in orderList"
					:key="index"
					:buyer="item"
					:class="(total==index+1)?'last-item':''"
				></sale-order-item>
			</van-list>
		</div>
	</div>
</template>

<script>
import { Indicator } from "mint-ui";
import OrderItem from "components/common/OrderItem";

export default {
	name: "StatusList",
	components: {
		"sale-order-item": OrderItem
	},
	data() {
		return {
			// vant-list组件属性
			loading: false,
			finished: false,
			total: 0,
			immediateCheck: false,

			//请求参数
			page: 1,
			size: 5,
			status: "",
			userTel: "",

			orderList: []
		};
	},
	methods: {
		// 加载更多
		loadMore() {
			let page = this.page + 1;
			setTimeout(() => {
				this.$http
					.get("/app/sale/effectiveOrder", {
						params: {
							phone: this.userTel,
							status: this.status,
							page: page,
							size: this.size
						}
					})
					.then(reponse => {
						reponse = reponse.body;

						this.orderList = this.orderList.concat(reponse.data.list);

						this.total = reponse.data.total;
						console.log(reponse.data.total)
						this.loading = false;
						this.page++;

						if (this.orderList.length === reponse.data.total) {
							this.finished = true;
						}
					});
			}, 500);
		},
		// 初始化加载
		requestData() {
			this.finished = false;
			Indicator.open();
			this.$http
				.get("/app/sale/effectiveOrder", {
					params: {
						phone: this.userTel,
						page: this.page,
						size: 5
					}
				})
				.then(reponse => {
					Indicator.close();
					reponse = reponse.body;

					this.orderList = reponse.data.list;

					if (this.orderList.length == 0) {
						var scrollLength = document.body.clientHeight
						window.scrollTo(0, scrollLength);
					}
				});
		}
	},
	created() {
		this.status = this.$route.params.status;
		this.userTel = this.$store.getters.userInfo.telePhone;
		this.requestData();
	}
};
</script>

<style lang="stylus" scoped>
</style>

