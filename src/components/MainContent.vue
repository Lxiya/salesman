<template>
	<div>
		<keep-alive>
			<router-view v-if="$route.meta.keepAlive"></router-view>
		</keep-alive>
		<router-view v-if="!$route.meta.keepAlive"></router-view>

		<footer class="footer">
			<sale-footer></sale-footer>
		</footer>
	</div>
</template>

<script>
import Footer from "components/common/Footer";

export default {
	name: "MainContent",
	components: {
		"sale-footer": Footer
	}
};
</script>

<style lang="stylus" scoped>
</style>

