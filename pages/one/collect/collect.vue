<template>
	<view class="collect">
		<view class='cu-list menu-avatar cont' style="width: 100%;">
		<navigator class="cu-item" v-for="(item,num) in floors" :key="num" :url="item.url" hover-class="navigator-hover">
			<view class="cu-avatar radius lg" :style="'background-image:url('+
			item.coverPic+');background-size:contain;'"></view>
			<view class="content">
				<view class="text-grey">{{ item.title }}</view>
				<view class="text-gray text-sm flex">
					<text class="text-cut">
						<text class="text-red  margin-right-xs"></text>
						{{ item.summary }}
					</text> </view>
			</view>
		</navigator>
		</view>
		<!-- <navigator v-for="(item,num) in floors" :key="num" class="cu-card article no-card" :url="item.url" hover-class="navigator-hover">
		<view class="cu-item shadow padding-top-xs solid-bottom">
			<view class="content">
				 <loayImg :imgUrl="item.coverPic" :fill="'aspectFit'"></loayImg>
				<view class="desc">
					<view class="text-content"> 
						<view class="text-black text-cut">{{ item.title }}</view>
						<text class="text-cut-two" style="width: 450rpx;">{{ item.summary }}</text>
					</view>
					<view>
					</view>
				</view>
			</view>
		</view>
		</navigator> -->
	</view>
</template>

<script>
	import * as API from '@/api/collect.js'
	export default {
		data() {
			return {
				floors:[]
			};
		},
		props: {
		    defaultKey: {
		        type: Number,
		        default: 0
		    },
			fresh: {
		        type: Boolean,
		        default: false
		    },
		},
		methods:{
			closedHistoryList() {
				// uni.showLoading({ mask: true})
				API.closedHistory().then(
				        res => {
							// console.log(res.data, '多多')
							res.data.forEach((item)=>{
								item.type="comic"
								item.url = '/pages/two/comic/comicDetail/comicDetail?comicId='+item.comicId
							})
							res.data && (this.floors =[...this.floors,...res.data])
							this.bookCollectListList()
				        },
				        err => {}
				      );
			},
			bookCollectListList() {
				// uni.showLoading({ mask: true})
				API.bookCollectList().then(
				        res => {
							// console.log(res.data, '多多')
							res.data.forEach((item)=>{
								item.type="book"
								item.url = '/pages/two/book/bookDetail/bookDetail?bookId='+item.bid
							})
							res.data && (this.floors =[...this.floors,...res.data])
							uni.stopPullDownRefresh();
							uni.hideLoading();
							this.$emit('freshChange')
				        },
				        err => {}
				      );
			}
		},
		watch:{
			defaultKey(e){
				if (e === 1) {
					this.floors = []
					uni.showLoading({ mask: true})
					this.closedHistoryList()
				}
		　　　　},
			fresh(e){
				console.log(e)
				if (e && this.defaultKey === 1) {
					this.floors = []
					uni.showLoading({ mask: true})
					this.closedHistoryList()
				}
		　　　　}
		　　},
		onShow() {
		// console.log(222)	
		},
		mounted() {
			// this.closedHistoryList()
		}
	}
</script>

<style lang="less">
	.collect {
		// background-color: #FFFFFF;
		// min-height: calc( 100% - 180rpx);
		// padding-top: 120rpx;
		// min-height: 100vh;
		// background-color: #9000FF;
		.cu-card.article>.cu-item .content>uni-image{
			width: 180rpx;
		}
	}
</style>
