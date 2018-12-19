<template>
	<div>
		<router-view></router-view>
		<sale-footer></sale-footer>
	</div>
</template>

<script>
import Footer from "components/common/Footer";
import Login from "components/login/Login";

export default {
	name: "App",
	components: {
		"sale-footer": Footer,
		"sale-login": Login
	},
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
a{
	text-decoration: none;
	color: #666666
}
.header-banner .mint-swipe-indicators{
	bottom: 0.3rem
}
p{
	margin: 0
}
</style>
