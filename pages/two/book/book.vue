<template>
	<view class="book">
		<swiper class="screen-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
		 :autoplay="true" interval="5000" duration="500">
			<swiper-item v-for="(item,index) in swiperList" :key="index" class="bg-gradual-pink" :class="cardCur==index?'cur':''">
				<navigator class="banner" :url="'/pages/two/book/bookDetail/bookDetail?bookId='+item.id" :style="'background:url('+ item.coverPic +') no-repeat center bottom;'">
					<!-- <image :src="item.coverPic" mode="aspectFill"></image> -->
				</navigator>
				<!-- <video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video> -->
			</swiper-item>
		</swiper>
		<view class="kindWrap grid col-2">
			<view v-for="(item,index) in avatar" :key="index">
				<navigator :url="item.url" hover-class="navigator-hover">
					<view class="kindItem shadow-blur" :class="'bg-gradual-'+item.color">
						<text class="lg text-white" :class="'cuIcon-' + item.value"></text>
					</view>
					<text class="text-black">{{item.label}}</text>
				</navigator>
			</view>
		</view>
		<!-- 正文 -->
		<booksList :floors="floors"></booksList>
		<!-- <view class="floor1">
			<view class="cu-bar bg-white solid-bottom margin-top">
				<view class="action">
					<text class="cuIcon-titles text-orange "></text> 大家都在看
				</view>
				<view class="action text-orange">
					<text>更多</text>
					<text class="lg cuIcon-right"></text>
				</view>
			</view> -->
			<!-- <view class="cu-card article no-card"> -->
				<!-- <navigator class="cu-card article no-card" animation-type="slide-in-right" animation-duration="300" url="/pages/two/book/bookDetail/bookDetail" hover-class="navigator-hover">
				<view class="cu-item shadow">
					<view class="content solid-bottom">
						<image src="http://lingdianshuyuan.oss-cn-beijing.aliyuncs.com/cover/1182/68f3b62e89e0e270da6bc6d8c0cb4032.jpeg"
						 mode="aspectFill"></image>
						<view class="desc">
							<view class="text-content"> 
								<view class="text-black">这是开始</view>
								<text>折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！真正的恩典因不完整而美丽，因情感而真诚，因脆弱而自由！</text>
							</view>
							<view>
								<view class="cu-tag bg-red light sm round">正义天使</view>
								<view class="cu-tag bg-gradual-green light sm round">史诗</view>
							</view>
						</view>
					</view>
				</view>
				</navigator> -->
			<!-- </view> -->
		<!-- </view> -->
	</view>
</template>

<script>
	import * as API from "../../../api/books.js";
	import booksList from "./components/booksList.vue"
	export default {
		name: 'book',
		components:{
			booksList
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
						url: '/pages/two/book/classification/classification'
					},
					{
						value: 'rank',
						label: '排行',
						color: 'green',
						url: '/pages/two/book/bookRanking/bookRanking'
					},
					// {
					// 	value: 'selection',
					// 	label: 'VIP',
					// 	color: 'blue',
					// 	url: '/pages/two/book/classification/classification'
					// }
				],
				floors: []
				// avatar:['https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg','https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg','https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg','https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg']
			};
		},
		props: {
			showClass: {
				type: String,
				default: ''
			},
			fresh: {
				type: Boolean,
				default: false
			},
		},
		methods:{
			DotStyle(e) {
				this.dotStyle = e.detail.value
			},
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
			getbookPageList() {
				uni.showLoading({ mask: true})
				API.getbookPage().then(
				        res => {
							// console.log(res.data, '多多')
							this.floors = res.data
							this.swiperList = this.floors[0].list
							console.log(this.swiperList, 999)
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
				if (e === '') {
					this.getbookPageList()
				}
		　　　　},
			fresh(e){
				if (e && this.showClass === '') {
					this.getbookPageList()
				}
		　　　　},
		　　},
		onReady() {
			// this.getbookPageList()
		},
		onShow() {
			// this.getbookPageList()
		},
		mounted() {
			this.getbookPageList()
		}
	}
</script>

<style lang="less">
	.book {
		width: 100%;
		min-height: 100vh;
		.banner{
			height: 100%;
			// background-size: contain;
		}
		.kindWrap {
			background-color: #FFFFFF;
			padding: 20rpx 0 10rpx;
			text-align: center;
			.kindItem{
				margin: 0 auto 10rpx;
				text-align: center;
				width: 100rpx;
				height: 100rpx;
				border-radius: 50%;
				font-size: 50rpx;
				padding-top: 20rpx;
				box-shadow: 0px 0 3px 3px #fff inset, 0px 6px 9px 1px #DDDDDD;
			}
		}
		.floor1 {
			background-color: #FFFFFF;
			.content {
				padding-bottom: 40rpx;
				image {
					width: 200upx;
					height: 10.4em;
				}
			}
		}
	}
</style>
