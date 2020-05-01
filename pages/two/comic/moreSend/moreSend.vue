
<template>
	<view class="comicStyleWrap bg-white">
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">
				打赏记录
			</block>
		</cu-custom>
		<view class="bg-img bg-mask flex align-end" :style="'background-image: url('+imgUrl+');height: 414upx;background-size: cover;'">
			<view class="padding-xl text-white">
				<view class="padding-xs text-xxl text-bold">
					{{ comicIdTitle }}
				</view>
				<view class="padding-sm text-sm text-white cu-btn round line-white">
					{{ category && category.slice(0, -1) }}
				</view>
			</view>
		</view>
		<view class="cu-list menu-avatar comment solids-top mbottom bg-white">
			<view class="cu-item" v-for="(item,index) in comicContent" :key="index">
				<view class="cu-avatar round" :style="'background-image:url('+baseUrl+item.portrait+');'"></view>
				<view class="content">
					<view class="text-grey">{{ item.userName || '' }}</view>
					<view class="text-orange text-content text-df">
						赠送 {{ item.userAmount || 0 }} 个礼物给作者
					</view>
					<!-- <view class="bg-grey padding-sm radius margin-top-sm  text-sm">
						<view class="flex">
							<view>凯尔：</view>
							<view class="flex-sub">妹妹，你在帮他们给黑暗找借口吗?</view>
						</view>
					</view> -->
					<view class="margin-top-sm flex justify-between">
						<view class="text-gray text-df">{{ item.createTime}}</view>
						<!-- <view>
							<text class="cuIcon-appreciatefill text-red"></text>
							<text class="cuIcon-messagefill text-gray margin-left-sm"></text>
						</view> -->
					</view>
				</view>
			</view>
		</view>
		<view v-if="isLoadMore" class="loadMore text-center">加载中...</view>
		<!-- <image v-if="!isLoadMore && !comicContent.length" class="imgNoData" src="../../../../static/images/no-data1.png" mode="aspectFit" /> -->
		<!-- <text v-if="!isLoadMore && !comicContent.length" class="imgtext">暂无数据</text> -->
	</view>
</template>

<script>
	import * as API from "../../../../api/comic.js";
	import { timestampToTime } from "../../../../utils/filter.js"
	import { baseUrl } from "../../../../config.js"
	// import loayImg from "../../../../components/loayImg/loayImg.vue"
	export default {
		data() {
			return {
				showSkeleton: true,
				comicId: null,
				comicIdTitle: null,
				comicContent: [],
				// refreshing: false,
				// lists: [],
				pageNumber: 1,
				pageSize: 10,
				isLoadMore: true,
				// pageTotal: 0
			};
		},
		// components: {
		// 	loayImg
		// },
		computed:{
			baseUrl(){
				return baseUrl
			}
		},
		onPullDownRefresh() {
			// console.log('下拉刷新');
			// this.lists = [];
			// this.refreshing = true;
			this.pageNumber = 1
			this.comicContent = []
			this.showSkeleton = true
			this.getSendPageList();
		},
		onReachBottom() {
			if (this.isLoadMore) {
				// console.log('上啦')
				this.pageNumber+=1
				this.getSendPageList();
			} else {
				uni.showToast({ icon: 'none', title: '没有更多了', duration: 1500 });
			}
		},
		onLoad(e) {
			this.comicContent = []
			this.comicId = e.comicId
			this.comicIdTitle = e.title
			this.imgUrl = e.img
			this.category = e.category
			this.getSendPageList()
		},
		methods:{
			timestampToTime,
			getSendPageList() {
				let data = { comicId: this.comicId, pageNumber: this.pageNumber,pageSize: this.pageSize }
				uni.showLoading({ mask: true})
				API.getSendPage(data).then(
				        res => {
							let content = res.data.list
							this.comicContent = [...this.comicContent,...content]
							this.pageTotal = res.data.total
							if(this.comicContent.length>=this.pageTotal) {
								this.isLoadMore = false
							}
							// console.log(this.comicContent,content)
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
	// .comicStyleWrap {
	// 	padding-top: 50rpx;
	// }
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
