<template>
	<div>
		<keep-alive>
			<router-view v-if="$route.meta.keepAlive"></router-view>
		</keep-alive>
		<router-view v-if="!$route.meta.keepAlive"></router-view>
	</div>
</template>

<script>
export default {
	name: "App",
	mounted() {
		let rem = window.screen.width;
		document.documentElement.style.fontSize = 100 * (rem / 750) + "px";
	}
};
</script>

<style>
html {
	font-size: 100px;
}
body {
	width: 100%;
	height: 100vh;
	overflow-x: hidden;
	overflow-y: scroll;
}
h1 {
	margin: 0;
}
a {
	text-decoration: none;
	color: #666666;
}
.header-banner .mint-swipe-indicators {
	bottom: 0.3rem;
}
p {
	margin: 0;
}
.mintui {
	font-size: 0.42rem;
}
.order .mint-tab-item-label {
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 0.28rem;
	height: 100%;
}
ul {
	margin: 0;
	padding: 0;
	list-style: none;
}
</style>
