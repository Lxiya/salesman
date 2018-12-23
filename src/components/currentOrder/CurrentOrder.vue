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
			ueserTel: "",
			orderList: [],
			// 控制样式
			title: "今日有效订单",
			showBack: true,
			where: "main/index"
		};
	},
	mounted() {
		this.userTel = this.$store.getters.userInfo.telePhone;
		this.$http
			.get("/app/sale/effectiveOrder", {
				parms: { phone: this.userTel, page: "1", size: "5" }
			})
			.then(reponse => {
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

