<template>
	<div>
		<div class="index">
			<sale-header :orderStatusNumber="orderStatusNumber"></sale-header>
			<sale-order-management :orderStatusNumber="orderStatusNumber"></sale-order-management>
		</div>
	</div>
</template>

<script>
import Footer from "components/common/Footer";
import Header from "components/index/child/header/Header";
import OrderManagement from "components/orderManagement/orderManagement";

export default {
	name: "Index",
	components: {
		"sale-header": Header,
		"sale-order-management": OrderManagement
	},
	data() {
		return {
			userTel: "",
			orderStatusNumber: {}
		};
	},
	mounted() {
		this.userTel = this.$store.getters.userInfo.telePhone;
		this.$http
			.get("/app/sale/appHome", {
				params: {
					phone: this.userTel
				}
			})
			.then(reponse => {
				reponse = reponse.body;
				this.orderStatusNumber = reponse.data;
			});
	}
};
</script>

<style lang="stylus">
div.index
	background-color #f2f2f2
	height 100vh
	box-sizing border-box
	min-width 100%
	overflow-y scroll
	overflow-x hidden
</style>
