<template>
	<div>
		<div class="index">
			<sale-header></sale-header>
			<sale-order-management></sale-order-management>
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
			userTel: ""
		};
	},
	computed: {
		user() {
			if (this.$store.state.user) {
				return this.$store.state.user;
			} else {
				return JSON.parse(sessionStorage.getItem("user"));
			}
		}
	},
	mounted() {
		this.userTel = this.user.telePhone;
		console.log(this.userTel);
	}
};
</script>

<style lang="stylus">
div.index
	background-color #f2f2f2
	min-width 100%
	overflow-y scroll
	overflow-x hidden
</style>
