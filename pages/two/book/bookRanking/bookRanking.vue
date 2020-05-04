<template>
	<view class="bookStyleWrap bg-white">
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">
				小说排行
			</block>
		</cu-custom>
		<scroll-view scroll-x class="bg-white nav margin-bottom-sm">
			<view class="flex text-center">
				<view class="cu-item flex-sub" :class="item.id==TabCur?'text-pink cur':''" v-for="(item,index) in selectList" :key="index" @tap="tabSelect" :data-id="item.id">
					{{item.name}}
				</view>
			</view>
		</scroll-view>
		<navigator v-for="(itemOne,num) in bookContent" :key="num" class="cu-card article no-card solid-bottom" :url="'/pages/two/book/bookDetail/bookDetail?bookId='+ itemOne.id" hover-class="navigator-hover">
		<view class="cu-item shadow">
			<!-- <view class="title"><view class="text-cut">无意者 烈火焚身;以正义的烈火拔出黑暗。我有自己的正义，见证至高的烈火吧。</view></view> -->
			<view class="content solid-bottom">
				<!-- <image :src="itemOne.coverPic" mode="aspectFit"></image> -->
				 <loayImg :imgUrl="itemOne.coverPic" :fill="'aspectFit'" style="width: 120rpx;"></loayImg>
				<view class="desc">
					<view class="text-content"> 
						<view class="text-black">{{ num+ 1 + ' . ' +itemOne.title }}</view>
						<text class="text-cut-two">{{ itemOne.summary }}</text>
					</view>
					<view>
						<view class="cu-tag bg-white text-orange">
							<text class="cuIcon-favorfill margin-right-xs margin-left-xs"></text> 
							{{ itemOne.category && itemOne.collectSum || 0 }}
							<text class="cuIcon-appreciate margin-right-xs margin-left-xs"></text>
							{{ itemOne.category && itemOne.likeSum || 0 }}
						</view>
						<!-- <view class="cu-tag bg-white">
							<text class="cuIcon-appreciate margin-right-xs"></text> 
							{{ itemOne.category && itemOne.likeSum || 0 }}
						</view> -->
					</view>
				</view>
			</view>
		</view>
		</navigator>
		<!-- <view v-if="isLoadMore" class="loadMore text-center">加载中...</view> -->
		<!-- <image v-if="!isLoadMore && !bookContent.length" class="imgNoData" src="/static/images/no-data1.png" mode="aspectFit" /> -->
		<view v-if="!isLoadMore && !bookContent.length" class="imgtext text-center margin-top-xl">暂无数据</view>
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
				TabCur: 1,
				scrollLeft: 1,
				// type: 1,
				selectList: [
					{ 
						id: 1,
						name: '点赞',
					},
					{
						id: 2,
						name: '打赏',
					},
					{
						id: 3,
						name: '收藏',
					},
					{
						id: 4,
						name: '评论',
					}
				],
				pageTotal: 0
			};
		},
		components: {
			loayImg
		},
		onPullDownRefresh() {
			// console.log('下拉刷新');
			// this.lists = [];
			// this.refreshing = true;
			// if(this.bookContent.length<this.pageTotal) {
				this.pageNumber = 1
				this.bookContent = []
				this.showSkeleton = true
				this.isLoadMore = true
				this.rankingList();
			// }
			
		},
		// onReachBottom() {
		// 	if (this.isLoadMore) {
		// 		this.pageNumber+=1
		// 		this.rankingList();
		// 	} else {
		// 		uni.showToast({ icon: 'none', title: '没有更多了', duration: 1500 });
		// 	}
		// },
		onLoad(e) {
			this.bookContent = []
			// this.categoryDemo = e.category
			// this.category = bookType(e.category)
			this.rankingList()
		},
		methods:{
			// bookType,
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
				// console.log(this.TabCur,e.currentTarget.dataset, 999)
				// this.type = this.TabCur
				this.pageNumber = 1
				this.bookContent = []
				this.showSkeleton = true
				this.rankingList();
			},
			rankingList() {
				// let data = { category: this.category, pageNumber: this.pageNumber,pageSize: this.pageSize }
				let data = { type: this.TabCur, pageNumber: this.pageNumber,pageSize: this.pageSize }
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
