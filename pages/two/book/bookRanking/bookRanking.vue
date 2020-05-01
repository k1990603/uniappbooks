<template>
	<view class="bookStyleWrap padding-top-xl bg-white">
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">
				小说排行
			</block>
		</cu-custom>
		<navigator v-for="(itemOne,num) in bookContent" :key="num" class="cu-card article no-card solid-bottom" :url="'/pages/two/book/bookDetail/bookDetail?bookId='+ itemOne.id" hover-class="navigator-hover">
		<view class="cu-item shadow">
			<!-- <view class="title"><view class="text-cut">无意者 烈火焚身;以正义的烈火拔出黑暗。我有自己的正义，见证至高的烈火吧。</view></view> -->
			<view class="content solid-bottom">
				<!-- <image :src="itemOne.coverPic"
				 mode="aspectFill"></image> -->
				 <loayImg :imgUrl="itemOne.coverPic"></loayImg>
				<view class="desc">
					<view class="text-content"> 
						<view class="text-black">{{ itemOne.title }}</view>
						<text>{{ itemOne.summary }}</text>
					</view>
					<view>
						<!-- <view v-if="num%2 != 1" class="cu-tag bg-red light sm round">{{ itemOne.category && itemOne.category.slice(0, -1) }}</view> -->
						<!-- <view v-if="num%2 === 1" class="cu-tag bg-gradual-green light sm round">{{ itemOne.category && itemOne.category.slice(0, -1) }}</view> -->
					</view>
				</view>
			</view>
		</view>
		</navigator>
		<view v-if="isLoadMore" class="loadMore text-center">加载中...</view>
		<!-- <image v-if="!isLoadMore && !bookContent.length" class="imgNoData" src="/static/images/no-data1.png" mode="aspectFit" /> -->
		<text v-if="!isLoadMore && !bookContent.length" class="imgtext text-center margin-top-xl">暂无数据</text>
	</view>
</template>

<script>
	import * as API from "../../../../api/books.js";
	// import { bookType } from "../../../../utils/match.js"
	import loayImg from "../../../../components/loayImg/loayImg.vue"
	export default {
		data() {
			return {
				showSkeleton: true,
				// category: null,
				// categoryDemo: null,
				bookContent: [],
				// refreshing: false,
				// lists: [],
				pageNumber: 1,
				pageSize: 10,
				isLoadMore: true,
				// pageTotal: 0
			};
		},
		components: {
			loayImg
		},
		onPullDownRefresh() {
			// console.log('下拉刷新');
			// this.lists = [];
			// this.refreshing = true;
			if(this.bookContent.length<this.pageTotal) {
				this.pageNumber = 1
				this.bookContent = []
				this.showSkeleton = true
				this.rankingList();
			}
			
		},
		onReachBottom() {
			if (this.isLoadMore) {
				// console.log('上啦')
				this.pageNumber+=1
				this.rankingList();
			} else {
				uni.showToast({ icon: 'none', title: '没有更多了', duration: 1500 });
			}
		},
		onLoad(e) {
			this.bookContent = []
			// this.categoryDemo = e.category
			// this.category = bookType(e.category)
			this.rankingList()
		},
		methods:{
			// bookType,
			rankingList() {
				// let data = { category: this.category, pageNumber: this.pageNumber,pageSize: this.pageSize }
				let data = { pageNumber: this.pageNumber,pageSize: this.pageSize }
				uni.showLoading({ mask: true})
				API.ranking(data).then(
				        res => {
							let content = res.data.list
							this.bookContent = [...this.bookContent,...content]
							this.pageTotal = res.data.total
							if(this.bookContent.length>=this.pageTotal) {
								this.isLoadMore = false
							}
							// console.log(this.bookContent,content)
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
	.bookStyleWrap {
		height: 100vh;
		// padding-top: 120rpx;
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
