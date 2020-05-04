<template>
	<view class="comic">
		<swiper class="card-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="false" :circular="true"
		 :autoplay="true" interval="5000" duration="500" @change="cardSwiper" indicator-color="#8799a3"
		 indicator-active-color="#0081ff">
			<swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur==index?'cur':''">
				<navigator class="swiper-item" :url="'/pages/two/comic/comicDetail/comicDetail?comicId='+ item.id">
					<image :src="item.coverPic" mode="aspectFill"></image>
					<!-- <video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video> -->
				</navigator>
			</swiper-item>
		</swiper>
		<view class="kindWrap grid col-3 text-center bg-white radius">
			<view v-for="(item,index) in avatar" :key="index">
				<navigator :url="item.url" hover-class="navigator-hover">
				<view class="kindItem shadow-blur" :class="'bg-gradual-'+item.color">
					<text class="text-white" :class="'cuIcon-' + item.value"></text>
				</view>
				<text>{{item.label}}</text>
				</navigator>
			</view>
		</view>
		<!-- 正文 -->
		<comicList :floors="floors"></comicList>
	</view>
</template>

<script>
	import * as API from "../../../api/comic.js";
	import comicList from "./components/comicList.vue"
	export default {
		components:{
			comicList
		},
		data() {
			return {
				cardCur:0,
				dotStyle: true,
				swiperList: [
				// 	{
				// 	id: 0,
				// 	type: 'image',
				// 	coverPic: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
				// }, {
				// 	id: 1,
				// 	type: 'image',
				// 	coverPic: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
				// }, {
				// 	id: 2,
				// 	type: 'image',
				// 	coverPic: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
				// }, {
				// 	id: 3,
				// 	type: 'image',
				// 	coverPic: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
				// }, {
				// 	id: 4,
				// 	type: 'image',
				// 	coverPic: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
				// }, {
				// 	id: 5,
				// 	type: 'image',
				// 	coverPic: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
				// }, {
				// 	id: 6,
				// 	type: 'image',
				// 	coverPic: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
				// },
				],
				avatar:[
					{
						value: 'similar',
						label: '分类',
						color: 'orange',
						url: '/pages/two/comic/classification/classification'
					},
					{
						value: 'pay',
						label: '储值',
						color: 'red',
						url: '/pages/user/charge/charge'
					},
					{
						value: 'rank',
						label: '排行',
						color: 'pink',
						url: '/pages/two/comic/comicRanking/comicRanking'
					},
					// {
					// 	value: 'selection',
					// 	label: 'VIP',
					// 	color: 'blue',
					// 	url: '/pages/two/comic/classification/classification'
					// }
				],
				floors: [],
				// oneFloor: {},
				// twoFloor: {},
				// threeFloor: {},
				// fourFloor: {},
				comicStatus: [
					{
						value: 0
					},
				]
			};
		},
		props: {
			showClass: {
				type: String,
				default: ''
			},
			fresh: {
				type: Boolean,
				default: ''
			},
		},
		methods:{
			DotStyle(e) {
				this.dotStyle = e.detail.value
			},
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
			getComicList() {
				uni.showLoading({ mask: true})
				API.getComicHome().then(
				        res => {
							// console.log(res.data, '多多')
							let floor = res.data
							// this.oneFloor = res.data
							this.floors = []
							for(var item in floor) {
								if(item === '今日推荐') {
									this.swiperList = floor[item]
								}
								// console.log(item)
								this.floors.push({
									title: item,
									content: floor[item]
								})
							}
							uni.stopPullDownRefresh();
							uni.hideLoading();
							this.$emit('freshChange')
				        },
				        err => {}
				      );
			}
		},
		watch:{
			showClass(e){
				// console.log(111)
				if (e === 'oneMove') {
					this.getComicList()
				}
		　　　　},
			fresh(e){
				// console.log(111)
				if (e && this.showClass === 'oneMove') {
					this.getComicList()
				}
		　　　　}
		　　},
		// onShow() {
		// 	console.log(3333)
		// 	this.getComicList()
		// },
		mounted() {
		}
	}
</script>

<style lang="less">
	.comic {
		width: 100%;
		min-height: 100vh;
		// .cu-card.dynamic>.cu-item {
		// 	box-sizing: border-box;
		// 	display: inline-block;
		// 	margin-left: 0;
		// 	margin-right: 0;
		// 	.text-content {
		// 		padding: 0 30rpx;
		// 	}
		// }
		.cu-bar {
			margin-top: 60rpx;
		}
		.kindWrap {
			// background-color: #FFFFFF;
			padding: 20rpx 0 30rpx;
			box-shadow: 0px 3px 10px rgba(26, 26, 26, 0.2);
			// text-align: center;
			.kindItem{
				margin: 0 auto 10rpx;
				text-align: center;
				width: 100rpx;
				height: 100rpx;
				border-radius: 50%;
				font-size: 50rpx;
				padding-top: 12rpx;
				// box-shadow: 0px 0 3px 3px #fff inset, 0px 6px 9px 1px #DDDDDD;
				box-shadow: 0px 6px 9px 1px rgba(0,0,0,.3);
				.text-white{
					font-size: 70rpx;
				}
			}
		}
	}
</style>
