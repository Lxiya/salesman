<template>
	<div>
		<div class="current-order">
			<div class="order-top">
				<sale-top :title="title" :showBack="showBack" :where="where"></sale-top>
			</div>
			<div class="order-content">
				<ul>
					<li v-for="(item,index) in orderList" :key="index">
						<sale-order-item :buyer="item"></sale-order-item>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import Top from "components/common/Top";
import OrderItem from "components/common/OrderItem";
import { Indicator } from "mint-ui";

export default {
	name: "CurrentOrder",
	components: {
		"sale-top": Top,
		"sale-order-item": OrderItem
	},
	data() {
		return {
			ueserTel: "",
			orderList: [],
			// 控制样式
			title: "今日有效订单",
			showBack: true,
			where: "main/index"
		};
	},
	mounted() {
		Indicator.open();
		this.userTel = this.$store.getters.userInfo.telePhone;
		this.$http
			.get("/app/sale/effectiveOrder", {
				params: { phone: this.userTel, page: "1", size: "5" }
			})
			.then(reponse => {
				Indicator.close();
				reponse = reponse.body;
				this.orderList = reponse.data.list;
			});
	}
};
</script>

<style lang="stylus" scoped>
.current-order
	height 100vh
	padding-top 1.22rem
	background-color #f2f2f2
</style>

