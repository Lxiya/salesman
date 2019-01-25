<template>
	<div>
		<div class="current-order">
			<div class="order-top">
				<sale-top :title="title" :lastPage="lastPage"></sale-top>
			</div>
			<div class="order-content">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
import Top from "components/common/Top";

export default {
	name: "CurrentOrder",
	components: {
		"sale-top": Top,
	},
	data() {
		return {
			// 控制样式
			title: "今日有效订单",
			lastPage: true
		};
	}
};
</script>

<style lang="stylus" scoped>
.current-order
	min-height 100vh
	box-sizing border-box
	padding-top 1.22rem
	background-color #f2f2f2
</style>

