<template>
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div
				class="swiper-slide"
				v-for="(banner, index) in bannerData"
				:key="index"
				:style="{backgroundImage: `url(${banner})`}"
			></div>
		</div>
		<!-- 如果需要分页器 -->
		<div class="swiper-pagination"></div>
	</div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

export default {
	name: 'Home-Swiper',
	data() {
		return {
			bannerData: [
				'https://gw.alicdn.com/tfs/TB1B7YDbXT7gK0jSZFpXXaTkpXa-1125-352.jpg_790x10000Q75.jpg_.webp',
				'https://gw.alicdn.com/tfs/TB1lF.bbhv1gK0jSZFFXXb0sXXa-1125-352.jpg_790x10000Q75.jpg_.webp',
				'https://gw.alicdn.com/tfs/TB1mtzKboH1gK0jSZSyXXXtlpXa-1125-352.jpg_790x10000Q75.jpg_.webp',
				'https://gw.alicdn.com/tfs/TB16ad6bAP2gK0jSZPxXXacQpXa-1125-352.jpg_790x10000Q75.jpg_.webp   '
			]
		}
	},
	created() {},
	mounted() {
		new Swiper('.swiper-container', {
			loop: true
		})
	}
}
</script>

<style lang="less" scoped>
@rem: 375/16rem;
.swiper-container {
	width: 351 / @rem;
	height: 110 / @rem;
	border-radius: 8/@rem;
	margin-top: 13/@rem;
	.swiper-slide {
		width: 100%;
		height: 100%;
		background: no-repeat;
		background-size: cover;
		border-radius: 8/@rem;
	}
}
</style>
