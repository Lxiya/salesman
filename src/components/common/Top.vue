<template>
	<mt-header :title="title" :fixed="fixed"></mt-header>
</template>

<script>
export default {
	name: "Top",
	props: {
		title: String
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
	height auto
	padding-top 0.56rem
	padding-bottom 0.28rem
	background-color #1f69ff
	font-size 0.38rem
</style>

