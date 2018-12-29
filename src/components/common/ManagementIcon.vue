<template>
	<div class="icon">
		<slot name="icon-img"></slot>
		<slot name="icon-name"></slot>
		<slot name="icon-number"></slot>
	</div>
</template>

<script>
export default {
	name: "ManagementIcon"
};
</script>

<style lang="stylus" scoped>
.icon
	img
		display block
		width 0.6rem
		height 0.6rem
</style>

