<template>
	<view>
		<view class="fixed">
			<cu-custom :isBack="true" bgColor="bg-shadeTop text-white">
				<!-- <block slot="backText">返回</block> -->
				<block slot="content">分类</block>
			</cu-custom>
		</view>
		<swiper class="screen-swiper round-dot" :indicator-dots="false" :circular="true" :autoplay="true" interval="5000"
		 duration="500">
			<swiper-item v-for="(item,index) in swiperList" :key="index">
				<image :src="item.coverPic" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		<view class="VerticalBox margin-top-sm">
			<scroll-view class="VerticalNav nav" scroll-y scroll-with-animation :scroll-top="verticalNavTop" style="height:calc(100vh - 375upx)">
				<view class="cu-item" :class="index==tabCur?'text-green cur':''" v-for="(item,index) in list" :key="index" @tap="TabSelect"
				 :data-id="index">
					{{item.name}}
				</view>
			</scroll-view>
			<scroll-view class="VerticalMain" scroll-y scroll-with-animation style="height:calc(100vh - 375upx)"
			 :scroll-into-view="'main-'+mainCur" @scroll="VerticalMain">
				<view class="padding-top padding-lr" v-for="(item,index) in list" :key="index" :id="'main-'+index">
					<view class="cu-bar solid-bottom bg-white">
						<view class="action">
							<text class="cuIcon-title text-green"></text> {{item.name}}</view>
						<view class="action text-orange" style="margin-right: 0;" @tap="toNavigate" data-url="/pages/two/book/bookType/bookType" :data-category="item.id">
							<text>更多</text>
							<text class="lg cuIcon-right"></text>
						</view>
					</view>
					<view class="cu-list menu-avatar">
						<view class="cu-item"  v-for="(itemdemo,indexs) in item.list" :key="indexs" @tap="toNavigates" data-url="/pages/two/book/bookDetail/bookDetail" :data-bookid="itemdemo.id">
							<!-- <view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"></view> -->
							<view class="cu-avatar radius lg" :style="'background-image:url('+itemdemo.coverPic+');'">
								<!-- <view class="cu-tag badge"></view> -->
							</view>
							<view class="content">
								<view>
									<text class="text-cut">{{ itemdemo.title }}</text>
									<!-- <view class="cu-tag round bg-orange sm">{{ itemdemo.author }}</view> -->
								</view>
								<!-- <view class="text-grey">{{ itemdemo.title }}</view> -->
								<view class="text-gray text-sm flex">
									<text class="text-cut" style="max-height: 40rpx;">
										<!-- <text class="cuIcon-infofill text-red  margin-right-xs"></text> -->
										{{ itemdemo.summary }}
									</text> </view>
							</view>
							<!-- <view class="action">
								<view class="text-grey text-xs">22:20</view>
								<view class="cu-tag round bg-grey sm">5</view>
							</view> -->
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import * as API from "../../../../api/books.js"
	import { bookType } from "../../../../utils/match.js"
	export default {
		data() {
			return {
				list: [],
				tabCur: 0,
				mainCur: 0,
				verticalNavTop: 0,
				load: true,
				swiperList: [
					{
					id: 5899,
					type: 'image',
					coverPic: '/static/images/p1.png'
				}, {
					id: 6888,
					type: 'image',
					coverPic: '/static/images/p2.png',
				}, {
					id: 7248,
					type: 'image',
					coverPic: '/static/images/p3.png'
				}, {
					id: 7247,
					type: 'image',
					coverPic: '/static/images/p4.png'
				}, {
					id: 7245,
					type: 'image',
					coverPic: '/static/images/p5.png'
				}, {
					id: 7244,
					type: 'image',
					coverPic: '/static/images/p6.png'
				}
				],
			};
		},
		onLoad() {
		},
		onReady() {
			// uni.hideLoading()
			this.categoryListAction()
		},
		methods: {
			bookType,
			toNavigate(e) {
				// console.log(e)
				let url = e.currentTarget.dataset.url
				let category = e.currentTarget.dataset.category
				uni.navigateTo({
					url: url + "?category=" + category
				})
			},
			toNavigates(e) {
				// console.log(e)
				let url = e.currentTarget.dataset.url
				let bookId = e.currentTarget.dataset.bookid
				uni.navigateTo({
					url: url + "?bookId=" + bookId
				})
			},
			categoryListAction() {
				// console.log(1111)
				uni.showLoading({ mask: true})
				let data = { bookId:this.bookId }
				API.categoryList(data).then(
				        res => {
							console.log(res.data, '多多')
							console.log(this.list, this.listCur)
							let list = res.data
							list.forEach(item=>{
								item.id = item.category
								item.name = bookType(item.category)
							})
							this.list = list
							this.listCur = this.list[0]
							// uni.hideLoading();
				        },
				        err => {}
				      );
			},
			TabSelect(e) {
				this.tabCur = e.currentTarget.dataset.id;
				this.mainCur = e.currentTarget.dataset.id;
				this.verticalNavTop = (e.currentTarget.dataset.id - 1) * 50
			},
			VerticalMain(e) {
				// #ifdef MP-ALIPAY
				   return false  //支付宝小程序暂时不支持双向联动 
				// #endif
				let that = this;
				let tabHeight = 0;
				if (this.load) {
					for (let i = 0; i < this.list.length; i++) {
						let view = uni.createSelectorQuery().select("#main-" + this.list[i].id);
						view.fields({
							size: true
						}, data => {
							this.list[i].top = tabHeight;
							tabHeight = tabHeight + data.height;
							this.list[i].bottom = tabHeight;
						}).exec();
					}
					this.load = false
				}
				let scrollTop = e.detail.scrollTop + 10;
				for (let i = 0; i < this.list.length; i++) {
					if (scrollTop > this.list[i].top && scrollTop < this.list[i].bottom) {
						this.verticalNavTop = (this.list[i].id - 1) * 50
						this.tabCur = this.list[i].id
						console.log(scrollTop)
						return false
					}
				}
			}
		},
	}
</script>

<style>
	.fixed {
		position: fixed;
		z-index: 99;
	}

	.VerticalNav.nav {
		width: 200upx;
		white-space: initial;
	}

	.VerticalNav.nav .cu-item {
		width: 100%;
		text-align: center;
		background-color: #fff;
		margin: 0;
		border: none;
		height: 50px;
		position: relative;
	}

	.VerticalNav.nav .cu-item.cur {
		background-color: #f1f1f1;
	}

	.VerticalNav.nav .cu-item.cur::after {
		content: "";
		width: 8upx;
		height: 30upx;
		border-radius: 10upx 0 0 10upx;
		position: absolute;
		background-color: currentColor;
		top: 0;
		right: 0upx;
		bottom: 0;
		margin: auto;
	}

	.VerticalBox {
		display: flex;
	}

	.VerticalMain {
		background-color: #f1f1f1;
		flex: 1;
	}
</style>
