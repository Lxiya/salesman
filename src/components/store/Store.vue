<template>
	<div>
		<div class="store">
			<sale-top :title="title"></sale-top>
			<sale-store-detail></sale-store-detail>
			<sale-store-detail></sale-store-detail>
			<sale-store-detail></sale-store-detail>
			<sale-store-detail></sale-store-detail>
			<sale-store-detail></sale-store-detail>
			<sale-store-detail></sale-store-detail>
			<sale-store-detail></sale-store-detail>
			<sale-store-detail></sale-store-detail>
			<sale-store-detail></sale-store-detail>
			<sale-store-detail></sale-store-detail>
		</div>
	</div>
</template>

<script>
import Top from "components/common/Top";
import StoreDetail from 'components/store/child/StoreDetail'

export default {
	name: "Store",
	data() {
		return {
			title: "店铺"
		};
	},
	components: {
		"sale-top": Top,
		"sale-store-detail":StoreDetail

	}
};
</script>

<style lang="stylus" scoped>
.store{
	padding	1.34rem 0.24rem 1rem
}
</style>

