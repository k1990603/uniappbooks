<template>
	<view class="comicStyleWrap bg-white">
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">
				漫画排行
			</block>
		</cu-custom>
		<scroll-view scroll-x class="bg-white nav margin-bottom-sm">
			<view class="flex text-center">
				<view class="cu-item flex-sub" :class="item.id==TabCur?'text-pink cur':''" v-for="(item,index) in selectList" :key="index" @tap="tabSelect" :data-id="item.id" :data-index="item.index">
					{{item.name}}
				</view>
			</view>
		</scroll-view>
		<navigator v-for="(itemOne,num) in comicContent" :key="num" class="cu-card article no-card solid-bottom" :url="'/pages/two/comic/comicDetail/comicDetail?comicId='+ itemOne.id" hover-class="navigator-hover">
		<view class="cu-item shadow">
			<!-- <view class="title"><view class="text-cut">无意者 烈火焚身;以正义的烈火拔出黑暗。我有自己的正义，见证至高的烈火吧。</view></view> -->
			<view class="content solid-bottom">
				<!-- <image :src="itemOne.coverPic"
				 mode="aspectFill"></image> -->
				 <loayImg :imgUrl="itemOne.coverPic"></loayImg>
				<view class="desc">
					<view class="text-content"> 
						<view class="text-black text-cut">
						<text class="margin-right-sm">{{ num +1 + ' . ' + itemOne.title }}</text>
							<view v-if="num%2 != 1" class="cu-tag bg-gradual-red light sm round">{{ itemOne.category && itemOne.category.slice(0, -1) }}</view>
							<view v-if="num%2 === 1" class="cu-tag bg-gradual-orange light sm round">{{ itemOne.category && itemOne.category.slice(0, -1) }}</view>
						</view>
						<text class="text-cut-two">{{ itemOne.summary }}</text>
					</view>
					<view>
						<view class="cu-tag bg-white text-orange">
							<text class="cuIcon-favorfill margin-right-xs margin-left-xs"></text> 
							{{ itemOne.collect || 0 }}
							<text class="cuIcon-appreciate margin-right-xs margin-left-xs"></text>
							{{ itemOne.likes || 0 }}
						</view>
						<!-- <view class="cu-tag radius bg-white">
							<text class="cuIcon-appreciate text-lg"></text> 
							{{ itemOne.category && itemOne.likeSum || 0 }}
						</view> -->
					</view>
				</view>
			</view>
		</view>
		</navigator>
		<!-- <view v-if="isLoadMore" class="loadMore text-center">加载中...</view> -->
		<!-- <image v-if="!isLoadMore && !comicContent.length" class="imgNoData" src="/static/images/no-data1.png" mode="aspectFit" /> -->
		<view v-if="!isLoadMore && !comicContent.length" class="imgtext text-center margin-top-xl">暂无数据</view>
	</view>
</template>

<script>
	import * as API from "../../../../api/comic.js";
	import { comicType } from "../../../../utils/match.js"
	import { baseUrl } from "../../../../config.js"
	import loayImg from "../../../../components/loayImg/loayImg.vue"
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
				TabCur: 'like',
				scrollLeft: 0,
				// type: 1,
				selectList: [
					{
						id: 'like',
						name: '点赞',
					},
					{
						id: 'send',
						name: '打赏',
					},
					{
						id: 'collect',
						name: '收藏',
					},
					{
						id: 'comments',
						name: '评论',
					}
				],
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
				this.rankingList();
			// }
			
		},
		// onReachBottom() {
		// 	if (this.isLoadMore) {
		// 		// console.log('上啦')
		// 		this.pageNumber+=1
		// 		this.rankingList();
		// 	} else {
		// 		uni.showToast({ icon: 'none', title: '没有更多了', duration: 1500 });
		// 	}
		// },
		onLoad(e) {
			this.comicContent = []
			// this.categoryDemo = e.category
			// this.category = comicType(e.category)
			this.rankingList()
		},
		methods:{
			comicType,
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.index) * 60
				// this.type = this.TabCur
				this.pageNumber = 1
				this.comicContent = []
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
