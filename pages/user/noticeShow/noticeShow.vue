<template>
	<view class="charge">
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">
				我的消息
			</block>
		</cu-custom>
			<view v-if="!!data.length" v-for="(item, index) in data" :key="index" class="bg-white padding-top-sm padding-bottom-sm margin radius shadow" style="position: relative;">
				<!-- <view v-if="!index" class="cu-tag badge bg-gradual-orange"> -->
					<!-- <text class="text-lg">new</text> -->
					<!-- new -->
				<!-- </view> -->
				<view class="text-lg text-bold margin">
					<text class="margin-right">{{ item.title }}</text>
					<text class="cu-tag bg-gradual-red light sm round">{{ item.author }}</text>
					<view v-if="!index" class="cu-tag bg-gradual-orange radius" style="float: right;">new</view>
				</view>
				<view class="margin text-orange">{{ item.body }}</view>
				<view class="margin-left">{{ item.createTime }}</view>
				
			</view>
			<view v-if="isLoadMore" class="loadMore text-center">加载中...</view>
			<view v-if="!isLoadMore &&!data.length" class="text-center"> 无消息通知 </view>
	</view>
</template>

<script>
	import * as API from "../../../api/user.js";
	export default {
		data() {
			return {
				data: [],
				pageNumber: 1,
				pageSize: 10,
				isLoadMore: true,
				showSkeleton: true
			};
		},
		onPullDownRefresh() {
			// console.log('下拉刷新');
			// this.lists = [];
			// this.refreshing = true;
			// if(this.comicContent.length<this.pageTotal) {
				this.pageNumber = 1
				this.data = []
				this.showSkeleton = true
				this.isLoadMore = true
				this.noticeShowAction();
			// }
			
		},
		onReachBottom() {
			if (this.isLoadMore) {
				// console.log('上啦')
				this.pageNumber+=1
				this.noticeShowAction();
			} else {
				uni.showToast({ icon: 'none', title: '没有更多了', duration: 1500 });
			}
		},
		mounted() {
			this.noticeShowAction()
		},
		methods:{
			noticeShowAction() {
				let data = { pageNumber: this.pageNumber,pageSize: this.pageSize }
				uni.showLoading({ mask: true})
				API.noticeShow(data).then(
				        res => {
							let content = res.data.list
							this.data = [...this.data,...content]
							this.pageTotal = res.data.total
							if(this.data.length>=this.pageTotal) {
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
.charge {
	height: 100vh;
	// padding-top: 120rpx;
	.chargeContent {
		position: relative;
		transition: all .3s linear;
		image {
			position: absolute;
			top: 0;
			right: 0;
			width: 100rpx;
			height: 90rpx;
		}
	}
}
</style>
