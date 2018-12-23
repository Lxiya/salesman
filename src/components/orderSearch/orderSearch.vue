<template>
	<div>
		<div class="change-password">
			<sale-top :title="title" :showBack="showBack" :where="where"></sale-top>
			<div class="change-input">
				<mt-field label="店铺名称" placeholder="请输入店铺名称" type="text" v-model="storeName"></mt-field>
			</div>
			<div class="change-input">
				<mt-field label="订单编号" placeholder="请输入订单编号" type="text" v-model="orderNumber"></mt-field>
			</div>
			<div class="change-input">
				<mt-field label="收货人电话" placeholder="请输入收获人电话" type="text" v-model="buyerTel"></mt-field>
			</div>

			<div class="change-input" @click="openStartPicker">
				<mt-field
					:readonly="true"
					label="开始日期"
					placeholder="请输入开始日期"
					type="text"
					v-model="inputStartTime"
				></mt-field>
			</div>

			<div class="change-input" @click="openEndPicker">
				<mt-field
					:readonly="true"
					label="结束日期"
					placeholder="请输入结束日期"
					type="text"
					v-model="inputEndTime"
				></mt-field>
			</div>

			<div class="btn-change">
				<mt-button size="large" type="primary" @click="orderSearch">查询</mt-button>
			</div>

			<mt-datetime-picker
				ref="pickerStart"
				v-model="startTime"
				type="date"
				year-format="{value} 年"
				month-format="{value} 月"
				date-format="{value} 日"
				@confirm="showStartTime"
			></mt-datetime-picker>

			<mt-datetime-picker
				ref="pickerEnd"
				v-model="endTime"
				type="date"
				year-format="{value} 年"
				month-format="{value} 月"
				date-format="{value} 日"
				@confirm="showEndTime"
			></mt-datetime-picker>
		</div>
	</div>
</template>

<script>
import Top from "components/common/Top";

export default {
	name: "ChagePassword",
	components: {
		"sale-top": Top
	},
	data() {
		return {
			uerTel: "",
			status: '',
			//控制样式
			title: "订单查询",
			showBack: true,
			where: "order",
			// 控制数据绑定
			storeName: "",
			orderNumber: "",
			buyerTel: "",
			startTime: new Date(),
			endTime: new Date(),
			inputStartTime: '',
			inputEndTime: ''
		};
	},
	methods: {
		openStartPicker() {
			this.$refs.pickerStart.open();
		},
		openEndPicker() {
			this.$refs.pickerEnd.open();
		},
		// 查询请求
		orderSearch() {
			this.userTel = this.$store.getters.userInfo.telePhone;
			this.status = this.$route.query.status;
			this.$http.get('/app/sale/search', {
				params: {
					phone: this.userTel,
					status: this.status,
					shopName: this.storeName,
					number: this.orderNumber,
					buyerTel: this.buyerTel,
					startTime: this.inputStartTime,
					endTime: this.inputEndTime,
					page: 1,
					size: 5
				}			}).then(reponse => {
				reponse = reponse.body;
				console.log(reponse)			})
		},
		// 日期转换
		formatDate(otcDate) {
			let date = new Date(otcDate)
			return (date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate());
		},
		// 键入开始日期
		showStartTime(selectedDate) {
			this.inputStartTime = this.formatDate(selectedDate)
		},
		// 键入结束日期
		showEndTime(selectedDate) {
			this.inputEndTime = this.formatDate(selectedDate)
		}
	},
	// computed: {
	// 	startTimeFormat: {
	// 		get: function () {
	// 			let date = new Date(this.startTime);
	// 			return (date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate());
	// 		},
	// 		set: function (value) {
	// 			this.startTime = value
	// 		}
	// 	},
	// 	endTimeFormat: {
	// 		get: function () {
	// 			let date = new Date(this.endTime);
	// 			return (date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate());
	// 		},
	// 		set: function (value) {
	// 			this.endTime = value
	// 		}
	// 	}
	// },
	mounted() {
		this.uerTel = this.$store.getters.userInfo.telePhone;
		// let date = new Date();
		// let dateFormat =
		// 	date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
		// this.startTime = dateFormat;
		// this.endTime = dateFormat;
	}
};
</script>

<style lang="stylus" scoped>
.change-password
	height 100vh
	padding-top 1.34rem
	background-color #f8f8f8
	.change-input
		padding-left 0.25rem
		background-color #fff
		.mint-cell
			border-bottom 0.01rem red
	.btn-change
		width 7.02rem
		margin 0 auto
		margin-top 0.6rem
		.mint-button--primary
			background-color #1f69ff
			border-radius 0.15rem
</style>


