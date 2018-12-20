<template>
	<mt-header :title="title" :fixed="fixed">
		<router-link :to="where" slot="left" v-if="showBack">
			<mt-button icon="back"></mt-button>
		</router-link>

		<router-link :to="search" slot="right" v-if="showSearch">
			<mt-button icon="search"></mt-button>
		</router-link>
	</mt-header>
</template>

<script>
export default {
	name: "Top",
	props: {
		title: String,
		showBack: Boolean,
		showSearch: Boolean,
		where: String,
		search: String
	},
	data() {
		return {
			fixed: true
		};
	}
};
</script>

<style lang="stylus" scoped>
.mint-header
	height 1.22rem
	padding-top 0.56rem
	padding-bottom 0.28rem
	background-color #1f69ff
	font-size 0.38rem
</style>

