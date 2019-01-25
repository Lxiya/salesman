<template>
	<mt-header :title="title" :fixed="fixed">
		<!-- 返回指定页按钮 -->
		<router-link v-if="showBack" :to="goBack" slot="left">
			<mt-button icon="back"></mt-button>
		</router-link>
		<!-- 返回上一页按钮 -->
		<mt-button v-if="lastPage" @click="goLastPage" icon="back" slot="left"></mt-button>
		<!-- 搜索按钮 -->
		<router-link v-if="showSearch" :to="search + '?status=' + status " slot="right">
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
		lastPage: Boolean,
		showSearch: Boolean,
		search: String,
		goBack: String,
		status: [Number, String]
	},
	data() {
		return {
			fixed: true
		};
	},
	methods: {
		goLastPage() {
			this.$router.go(-1)
		}
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

