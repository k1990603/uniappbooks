<template>
	<view class="bookStyleWrap padding-top-xl bg-white">
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">
				{{ categoryDemo }}
			</block>
		</cu-custom>
		<navigator v-for="(itemOne,num) in bookContent" :key="num" class="cu-card article no-card solid-bottom" :url="'/pages/two/book/bookDetail/bookDetail?bookId='+itemOne.id" hover-class="navigator-hover">
		<view class="cu-item shadow">
			<!-- <view class="title"><view class="text-cut">无意者 烈火焚身;以正义的烈火拔出黑暗。我有自己的正义，见证至高的烈火吧。</view></view> -->
			<view class="content solid-bottom">
				<!-- <image :src="itemOne.coverPic"
				 mode="aspectFill"></image> -->
				 <loayImg :imgUrl="itemOne.coverPic" :fill="'aspectFit'" style="width:120rpx;"></loayImg>
				<view class="desc">
					<view class="text-content"> 
						<view class="text-cut text-black">{{ itemOne.title }}</view>
						<view class="text-cut-two" style="max-width: 420rpx;">{{ itemOne.summary }}</view>
					</view>
					<view>
						<!-- <view v-if="num%2 != 1" class="cu-tag bg-red light sm round">{{ itemOne.category.slice(0, -1) }}</view> -->
						<view class="cu-tag bg-gradual-orange light sm round">{{ itemOne.author }}</view>
					</view>
				</view>
			</view>
		</view>
		</navigator>
		<view v-if="isLoadMore" class="loadMore text-center">加载中...</view>
		<!-- <image v-if="!isLoadMore && !bookContent.length" class="imgNoData text-center" src="/static/images/no-data1.png" mode="aspectFit" /> -->
		<view v-if="!isLoadMore && !bookContent.length" class="imgtext text-center margin-top-xl">暂无数据</view>
	</view>
</template>

<script>
	import * as API from "../../../../api/books.js";
	import { bookTypeDetail, bookType } from "../../../../utils/match.js"
	import loayImg from "../../../../components/loayImg/loayImg.vue"
	export default {
		components: {
			loayImg
		},
		data() {
			return {
				category: null,
				categoryDemo: null,
				bookContent: [],
				// refreshing: false,
				// lists: [],
				pageNumber: 1,
				pageSize: 10,
				isLoadMore: true,
				navstaus: false,
				pageTotal: 0
			};
		},
		onPullDownRefresh() {
			// console.log('下拉刷新');
			// this.lists = [];
			// this.refreshing = true;
			if(this.bookContent.length<this.pageTotal) {
				this.pageNumber = 1
				this.bookContent = []
				this.isLoadMore = true
				this.navstaus?this.categoryPageListList():this.getbookTypeList();
			}
		},
		onReachBottom() {
			if (this.isLoadMore) {
				// console.log('上啦')
				this.pageNumber+=1
				this.navstaus?this.categoryPageListList():this.getbookTypeList();
			} else {
				uni.showToast({ icon: 'none', title: '没有更多了', duration: 1500 });
			}
		},
		onLoad(e) {
			this.navstaus = parseFloat(e.category) >= 0
			console.log(e.category, typeof e.category, this.navstaus)
			if (this.navstaus) {
				this.categoryDemo = bookType(Number(e.category))
				this.category = e.category
				this.categoryPageListList()
			} else {
				this.categoryDemo = e.category
				this.category = bookTypeDetail(e.category)
				console.log(this.category, 8888)
				this.getbookTypeList()
			}
			
			
		},
		methods:{
			bookTypeDetail,
			bookType,
			getbookTypeList() {
				let data = { status: this.category, pageNumber: this.pageNumber,pageSize: this.pageSize }
				uni.showLoading({ mask: true})
				API.getbookType(data).then(
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
			},
			categoryPageListList() {
				let data = { category: this.category, pageNumber: this.pageNumber,pageSize: this.pageSize }
				uni.showLoading({ mask: true})
				API.categoryPageList(data).then(
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
			},
		}
	}
</script>

<style lang="less">
	.bookStyleWrap {
		// padding-top: 120rpx;
	}
	.loadMore {
		font-size: 30upx;
		color: #555;
		margin-bottom: 20upx;
		text-align: center;
	}
</style>
