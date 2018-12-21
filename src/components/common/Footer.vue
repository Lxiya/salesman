<template>
	<mt-tabbar v-model="selected" :fixed="fixed">
		<mt-tab-item id="首页">
			<router-link :to="{path:'index'}">
				<img :src="selected=='首页'?'/static/images/index-active.png':'/static/images/index-icon.png'">首页
			</router-link>
		</mt-tab-item>
		<mt-tab-item id="店铺">
			<router-link :to="{path:'store'}">
				<img
					:src="selected=='店铺'?'/static/images/store-active.png':'/static/images/store-icon.png'"
					class="store"
				>店铺
			</router-link>
		</mt-tab-item>
		<mt-tab-item id="我的">
			<router-link :to="{path:'myinfo'}">
				<img
					:src="selected=='我的'?'/static/images/my-info-active.png':'/static/images/my-info-icon.png'"
					class="myinfo"
				>我的
			</router-link>
		</mt-tab-item>
	</mt-tabbar>
</template>

<script>
export default {
	name: "Footer",
	data() {
		return {
			selected: "首页",
			fixed: true
		};
	},
	mounted(){
		// console.log(this.selected)
	}
};
</script>

<style lang="stylus">
.mint-tabbar
	background-color
.mint-tab-item
	padding 0
	&.is-selected
		background-color transparent !important
.mint-tab-item-label
	display flex
	flex-direction column
	a
		display block
		padding 0.14rem 0
		padding-bottom 0.09rem
		font-size 0.22rem
		&.active
			color #1f69ff
	img
		display block
		margin 0 auto
		width 0.44rem
		height 0.44rem
		margin-bottom 0.09rem
		&.store
			width 0.46rem
		&.myinfo
			width 0.47rem
</style>

