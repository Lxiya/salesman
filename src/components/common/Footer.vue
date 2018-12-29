<template>
	<mt-tabbar v-model="selected" :fixed="fixed">
		<mt-tab-item id="首页">
			<router-link :to="{path:'index'}" class="index">
				<span class="index-icon"></span>首页
			</router-link>
		</mt-tab-item>
		<mt-tab-item id="店铺">
			<router-link :to="{path:'store'}" class="store">
				<span class="store-icon"></span>店铺
			</router-link>
		</mt-tab-item>
		<mt-tab-item id="我的">
			<router-link :to="{path:'myinfo'}" class="myinfo">
				<span class="myinfo-icon"></span>我的
			</router-link>
		</mt-tab-item>
	</mt-tabbar>
</template>

<script>
export default {
	name: "Footer",
	props: {},
	data() {
		return {
			selected: "首页",
			fixed: true
		};
	}
};
</script>

<style lang="stylus">
.footer
	.mint-tabbar
		background-color #fff
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
						span.index-icon
							background-image url('index-active.png')
						span.store-icon
							background-image url('store-active.png')
						span.myinfo-icon
							background-image url('my-info-active.png')
					& span
						background-size 0.44rem 0.44rem
					&.index
						span
							background-image url('index-icon.png')
					&.store
						span
							background-image url('store-icon.png')
							background-size 0.46rem 0.44rem
					&.myinfo
						span
							background-image url('my-info-icon.png')
							background-size 0.47rem 0.44rem
				span
					display block
					margin 0 auto
					width 0.44rem
					height 0.44rem
					margin-bottom 0.09rem
					&.store-icon
						width 0.46rem
					&.myinfo-icon
						width 0.47rem
</style>

