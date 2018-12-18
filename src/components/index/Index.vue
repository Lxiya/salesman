<template>
	<div>
		<div class="index">
			<sale-header></sale-header>
		</div>
	</div>
</template>

<script>
import Header from 'components/index/child/header/Header'
import OrderManagement from 'components/orderManagement/orderManagement'

export default {
	name: "Index",
	components: {
		'sale-header':Header,
		'sale-order-management':OrderManagement
	}
};
</script>

<style lang="stylus">
div.index{
	background-color #f2f2f2
	min-width 100%
	height 2000px
	overflow-y scroll
	overflow-x hidden
}
</style>
