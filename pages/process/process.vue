<template>
	<view class="process">
		<cu-custom bgColor="bg-gradual-pink" :isBack="false">
			<block slot="content">
				分享步骤
			</block>
		</cu-custom>
		<!-- round-dot -->
		<swiper class="screen-swiper square-dot" :indicator-dots="true" :circular="true"
		 :autoplay="true" interval="5000" duration="500" style="height: calc(100vh - 100rpx);">
			<swiper-item v-for="(item,index) in swiperList" :key="index" class="cur">
				<!-- <navigator class="banner" :url="'/pages/two/book/bookDetail/bookDetail?bookId='+item.id"> -->
					<image :src="item.coverPic" mode="scaleToFill"></image>
				<!-- </navigator> -->
				<!-- <video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video> -->
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiperList: [
					{
					id: 5899,
					type: 'image',
					coverPic: '/static/images/process/p1.jpg'
				},
				{
					id: 6888,
					type: 'image',
					coverPic: '/static/images/process/p2.jpg',
				}, {
					id: 7248,
					type: 'image',
					coverPic: '/static/images/process/p3.jpg'
				}, {
					id: 7247,
					type: 'image',
					coverPic: '/static/images/process/p4.jpg'
				}, {
					id: 7245,
					type: 'image',
					coverPic: '/static/images/process/p5.jpg'
				}, {
					id: 7244,
					type: 'image',
					coverPic: '/static/images/process/p6.jpg'
				},{
					id: 7,
					type: 'image',
					coverPic: '/static/images/process/p7.jpg'
				},{
					id: 8,
					type: 'image',
					coverPic: '/static/images/process/p8.jpg'
				},
				],
			};
		}
	}
</script>

<style lang="less">
	.process {
		uni-swiper .uni-swiper-dots-horizontal {
			bottom: 20%;
		}
	}
</style>
