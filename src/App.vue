<template>
	<div>
		<xm-home></xm-home>
	</div>
</template>

<script>
import Home from './components/Home'
export default {
	name: 'App',
	components: {
		xmHome: Home
	}
}
</script>

<style lang="less">
@rem: 375/16rem;
.g-pd {
	padding: 0 11/@rem;
}
</style>
