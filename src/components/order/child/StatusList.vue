<template>
	<div>
		<van-list v-model="loading" :finished="finished" @load="loadMore" :offset="offset">
			<sale-order-item v-for="(item,index) in orderList" :key="index" :buyer="item"></sale-order-item>
		</van-list>
	</div>
</template>

<script>
import { Indicator } from "mint-ui";
import OrderItem from "components/common/OrderItem";

export default {
	name: 'StatusList',
	components: {
		"sale-order-item": OrderItem
	},
	data() {
		return {
			// 列表属性
			loading: false,
			finished: false,
			orderList: [],

			//请求参数
			page: 1,
			size: 5,
			status: "",
			userTel: "",
		}

	},
	methods: {
		requestData(page, size) {
			this.$http.get('/app/sale/selectOrderListByStatus', {
				params: {
					phone: this.userTel,
					status: this.status,
					page: this.page,
					size: this.size,
				}
			}).then(reponse => {
				reponse = reponse.body
				reponse.data.list.forEach(element => {
					this.orderList.push(element);
				});
			})
		},

		// 加载更多
		loadMore() {
			let page = this.page + 1

			setTimeout(() => {
				this.requestData(page, this.size)
				// 结束加载状态
				this.loading = false
				this.page++
			}, 2000)
		}
	},
	created() {
		// 获取请求
		this.status = this.$route.params.status;
		this.userTel = this.$store.getters.userInfo.telePhone;

		// 初始化请求一次
		// this.requestData(this.page, this.size)
	}
}
</script>

<style lang="stylus" scoped>
.van-list
	// min-height 100vh
	div
		margin-bottom 0.26rem
		&:nth-child(5n)
			margin-bottom 0
</style>

