<template>
	<div class="header g-pd">

		<el-row>
			<!-- 顶部 -->
			<el-col :span="24">
				<div class="logo"></div>
				<!-- 头像 -->
				<i class="el-icon-user-solid icon-user"></i>
			</el-col>
		</el-row>
		<!-- Search -->
		<el-row>
			<el-col :span="24" class="search">
				<el-input
					class="search-input"
					placehoder="请输入内容"
					v-model="input"
					prefix-icon="el-icon-search"
				></el-input>
			</el-col>
		</el-row>
		<!-- 热搜 -->
		<el-row class="hot-search-row">
			<span class="hot-search">热搜</span>
			<el-tag class="xm-tag">云南旅游</el-tag>
			<el-tag class="xm-tag">背景故宫博物馆</el-tag>
			<el-tag class="xm-tag">日本签证</el-tag>
		</el-row>
		<el-row>
			<xm-home-swiper></xm-home-swiper>
		</el-row>

	</div>
</template>

<script>
import HomeSwiper from '../swiper/Home-Swiper'

export default {
	name: 'xmheader',
	data() {
		return {
			input: '请输入内容'
		}
	},
	components: {
		xmHomeSwiper: HomeSwiper
	}
}
</script>

<style lang="less" scoped>
@rem: 375/16rem;
.header {
	background: linear-gradient(#fecf02, #fdb100);
	height: 210 / @rem;
	position: relative;
	.logo {
		width: 47 / @rem;
		height: 44 / @rem;
		margin: 0 auto;
		background: url(../../assets/image/logo.png) no-repeat center center;
		background-size: contain;
	}
	.icon-user {
		position: absolute;
		top: 10 / @rem;
		right: 0;
	}
	.el-col.search {
		height: 31 / @rem;
		/deep/ .el-input.search-input {
			height: 31 / @rem;
			display: block;
			input {
				height: 31 / @rem;
				border-radius: 16 / @rem;
				font-size: 13 / @rem;
				padding-left: 30 / @rem;
			}
			span {
				font-size: 17 / @rem;
				position: absolute;
				top: -5 / @rem;
				left: 8 / @rem;
				color: #333;

			}
		}
	}
	/* 热搜 */
	.hot-search-row {
		.hot-search {
			color: #fff;
			font-size: 12 / @rem;
			margin-left: 4 / @rem;
			margin-right: 6 / @rem;
		}
		margin-top: 6 / @rem;
		.el-tag.xm-tag {
			display: inline;
			box-sizing: border-box;
			padding: 4 / @rem 8 / @rem;
			margin-right: 8 / @rem;
			color: #fff;
			background: rgba(255, 255, 255, 0.2);
			font-size: 13 / @rem;
			border-radius: 14 / @rem;
			border: none;
		}
	}
}
</style>
