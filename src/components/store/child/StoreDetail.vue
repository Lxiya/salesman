<template>
	<div>
		<div class="store-detail">
			<div class="store-img">
				<img src="/static/images/store-test.png" alt="">
			</div>
			<div class="store-info">
				<p class="store-name">贵州茅台专卖</p>
				<p class="store-address">贵州省遵义市仁怀市茅台镇</p>
				<p class="store-owner">王冲 13605400000</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "StoreDetail",
	components: {}
};
</script>

<style lang="stylus" scoped>
.store-detail{
	display flex
	align-items center
	padding-top 0.32rem
	padding-left 0.36rem
	padding-bottom 0.33rem
	margin-bottom 0.24rem
	background-color #f2f6fc
	border-radius 0.1rem
	.store-img{
		margin-right 0.26rem
		img{
			display block
			width 1.27rem
			height 1.27rem
			border-radius 0.15rem
		}
	}
	.store-info{
		p{
			margin-bottom 0.16rem
			&:last-child{
				margin-bottom 0
			}
		}
		.store-name{
			color #212121
			font-size 0.3rem
		}
		.store-address,.store-owner{
			font-size 0.26rem
			color #999999
		}
	}
	
}
</style>

