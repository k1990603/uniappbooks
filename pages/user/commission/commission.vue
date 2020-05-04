<template>
	<view class="comicStyleWrap padding-top-xl bg-white">
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">
				佣金列表
			</block>
		</cu-custom>
		<view class="cu-list menu-avatar radius">
			<view class="cu-item" v-for="(item, index) in comicContent" :key="index">
				<view class="cu-avatar round lg" :style="'background-image:url('+baseUrl+item.portrait +');'">
					<view v-if="item.isVip" class="cu-tag badge">vip</view>
				</view>
				<view class="content">
					<view class="text-grey">{{ item.outUserName }}</view>
					<view class="text-gray text-sm">
						<text class="margin-right-xs">充值: {{ item.orderFee }}元</text>
						<text class="text-red">（佣金: {{ item.commission }}元）</text>
					</view>
				</view>
				<view class="action padding-right-sm" style="width: 260rpx;">
					<view class="text-grey text-xs text-right">{{ item.createTime }}</view>
					<view class="cu-tag round bg-gradual-orange sm" style="float: right;">{{ item.outUserLevel }}</view>
				</view>
			</view>
			<!-- <view class="cu-item">
				<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);">
					<view class="cu-tag badge">99+</view>
				</view>
				<view class="content">
					<view class="text-grey">文晓港
						<view class="cu-tag round orange sm">SVIP</view>
					</view>
					<view class="text-gray text-sm">
						<text class="cuIcon-redpacket_fill text-red"></text> 收到红包</view>
				</view>
				<view class="action">
					<view class="text-grey text-xs">22:20</view>
					<text class="cuIcon-notice_forbid_fill text-gray"></text>
				</view>
			</view> -->
		</view>
		<view v-if="isLoadMore" class="loadMore text-center">加载中...</view>
		<!-- <image v-if="!isLoadMore && !comicContent.length" class="imgNoData" src="/static/images/no-data1.png" mode="aspectFit" /> -->
		<view v-if="!isLoadMore && !comicContent.length" class="imgtext text-center margin-top-xl">暂无数据</view>
	</view>
</template>

<script>
	import * as API from "../../../api/user.js";
	import { comicType } from "../../../utils/match.js"
	import { baseUrl } from "../../../config.js"
	import loayImg from "../../../components/loayImg/loayImg.vue"
	export default {
		data() {
			return {
				showSkeleton: true,
				// category: null,
				// categoryDemo: null,
				comicContent: [],
				// refreshing: false,
				// lists: [],
				pageNumber: 1,
				pageSize: 10,
				isLoadMore: true,
				pageTotal: 0
			};
		},
		components: {
			loayImg
		},
		computed:{
			baseUrl(){
				return baseUrl
			}
		},
		onPullDownRefresh() {
			// console.log('下拉刷新');
			// this.lists = [];
			// this.refreshing = true;
			// if(this.comicContent.length<this.pageTotal) {
				this.pageNumber = 1
				this.comicContent = []
				this.showSkeleton = true
				this.isLoadMore = true
				this.getComicStyleList();
			// }
			
		},
		onReachBottom() {
			if (this.isLoadMore) {
				// console.log('上啦')
				this.pageNumber+=1
				this.getComicStyleList();
			} else {
				uni.showToast({ icon: 'none', title: '没有更多了', duration: 1500 });
			}
		},
		onLoad(e) {
			this.comicContent = []
			// this.categoryDemo = e.category
			// this.category = comicType(e.category)
			this.getComicStyleList()
		},
		methods:{
			comicType,
			getComicStyleList() {
				let data = { pageNumber: this.pageNumber,pageSize: this.pageSize }
				uni.showLoading({ mask: true})
				API.getCommissionList(data).then(
				        res => {
							let content = res.data.list
							this.comicContent = [...this.comicContent,...content]
							this.pageTotal = res.data.total
							if(this.comicContent.length>=this.pageTotal) {
								this.isLoadMore = false
							}
							uni.hideLoading();
							uni.stopPullDownRefresh();
				        },
				        err => {}
				      );
			}
		}
	}
</script>

<style lang="less">
	.comicStyleWrap {
		// padding-top: 120rpx;
	}
	.comicStyleWrap {
		height: 100vh;
	}
	.loadMore {
		font-size: 30upx;
		color: #555;
		margin-bottom: 20upx;
		text-align: center;
	}
	.userinfo{
	  display: flex;
	  flex-direction: column;
	}
	.userinfo-avatar{
	  width: 50px;
	  height: 50px;
	  border-radius: 50%;
	  left: 20px;
	  margin-left: 20px;
	  object-fit: contain
	}
	.userinfo-nickname{
	  margin: 20px;
	}
</style>
