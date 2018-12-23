<template>
	<div>
		<div class="store">
			<sale-top :title="title"></sale-top>
			<div class="detail-list">
				<sale-store-detail v-for="(item,index) in storeList" :key="index" :store='item'></sale-store-detail>
			</div>
		</div>
	</div>
</template>

<script>
import Top from "components/common/Top";
import StoreDetail from "components/store/child/StoreDetail";

export default {
	name: "Store",
	data() {
		return {
			title: "店铺",
			userTel: "",
			storeList: []
		};
	},
	components: {
		"sale-top": Top,
		"sale-store-detail": StoreDetail
	},
	mounted() {
		this.userTel = this.$store.getters.userInfo.telePhone;
		this.$http
			.get("/app/sale/shopList", {
				params: {
					phone: this.userTel,
					page: "1",
					size: "5"
				}
			})
			.then(reponse => {
				reponse = reponse.body;
				this.storeList = reponse.data.list;
			});
	}
};
</script>

<style lang="stylus" scoped>
.store
	padding 1.34rem 0.24rem 1rem
</style>

