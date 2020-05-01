<template>
	<view class="collect">
		<!-- <text>fdfdffdfdfd</text> -->
		<uni-swipe-action>
		    <uni-swipe-action-item v-for="(item,num) in floors" :key="num" :options="_genOptions(item.outId, item.type)" @click="switchClass" @change="change(item.outId, item.type)" :autoClose="false">
		        <view class='cu-list menu-avatar cont' style="width: 100%;">
					<navigator class="cu-item" :url="item.url" hover-class="navigator-hover">
						<view class="cu-avatar radius lg" :style="'background-image:url('+
						item.coverPic+');background-size:contain;'"></view>
						<view class="content">
							<view class="text-grey">{{ item.title }}</view>
							<view class="text-gray text-sm flex">
								<text class="text-cut">
									<text class="text-red  margin-right-xs"></text>
									{{ item.createTime }}
								</text> </view>
						</view>
						<!-- <view class="action">
							<view class="text-grey text-xs">22:20</view>
							<view class="cu-tag round bg-grey sm">5</view>
						</view> -->
					</navigator>
					
					<!-- <view v-for="(item,num) in floors" :key="num" class="cu-item shadow">
						<view class="content solid-bottom">
							 <loayImg :imgUrl="item.coverPic"></loayImg>
							<view class="desc">
								<view class="text-content"> 
									<view class="text-black">{{ item.title }}</view>
									<text>{{ item.summary }}</text>
								</view>
							</view>
						</view>
					</view> -->
					<!-- <view v-for="(item,num) in floors" :key="num" class="cu-card article no-card" :url="item.url" hover-class="navigator-hover" @click="toDetail(item.url)">
					<view class="cu-item shadow">
						<view class="content solid-bottom">
							 <loayImg :imgUrl="item.coverPic" :fill="'scaleToFill'"></loayImg>
							<view class="desc">
								<view class="text-content"> 
									<view class="text-black">
										<view class="text-cut" styl="float:left;width:220rpx;">{{ item.title }}</view>
										
									</view>
									<text class="text-cuts">{{ item.chapter }}</text>
								</view>
								<view>
									<view class="cu-tag bg-white text-gray light sm round">{{ timestampToTime(item.createTime) }}</view>
								</view>
							</view>
						</view>
					</view>
					</view> -->
				</view>
		    </uni-swipe-action-item>
		</uni-swipe-action>
	</view>
</template>

<script>
	import * as API from '@/api/history.js'
	import { timestampToTime } from "../../../utils/filter.js"
	import uniSwipeAction from '@/components/uni-swipe-action/uni-swipe-action.vue'
	import uniSwipeActionItem from '@/components/uni-swipe-action-item/uni-swipe-action-item.vue'
	export default {
		data() {
			return {
				floors:[],
				options:[
				   //      {
				   //          text: '收藏',
							// type: 1,
				   //          style: {
				   //              backgroundColor: '#007aff'
				   //          }
				   //      }, 
						{
				            text: '删除',
							type: 2,
				            style: {
				                backgroundColor: '#dd524d'
				            }
				        }
				      ]
			};
		},
		components: {
		        uniSwipeAction,
		        uniSwipeActionItem
		    },
		props: {
		    defaultKey: {
		        type: Number,
		        default: 0
		    },
			fresh: {
		        type: Boolean,
		        default: false
		    }
		},
		methods:{
			timestampToTime,
			_genOptions(outId, type){
			    let options=JSON.parse(JSON.stringify(this.options));
			    options.forEach(item=>{
			        item.outId=outId;
			        item.type=type;
			    })
			    // console.log(options)
			    return options;
			},
			// deleteBtn(){
			// 	console.log(1111)
			// },
			// toDetail(url){
			// 	console.log(2222)
			// 	uni.navigateTo({
			// 		url: url
			// 	})
			// },
			change(outId, type){
				// console.log(outId, type,5555)
				let data = { 'outId': Number(outId), 'type': Number(type) }
				// this.deleteHistoricalAction(data)
			},
			deleteHistoricalAction(data){
				API.deleteHistorical(data).then(
				        res => {
							this.historicalRecordList()
							// this.$emit('deletone', )
							// this.floors=this.floors.filter((item)=>{
							// 	console.log(item, data, 898989)
							// 	return (item.outId !==data.outId) && (item.type !== data.type) 
							// })
							// console.log(this.floors, 999)
				        },
				        err => {}
				      );
			},
			switchClass(e){
				console.log(e,666)
				// if(e.content.index === 1) {
				// 	this.colloctAction(e.content.outId, e.content.type)
				// } else {
					
				// }
				let data = { 'outId': Number(e.content.outId), 'type': Number(e.content.type) }
				this.deleteHistoricalAction(data)
			},
			colloctAction(outId, type){
				if(type === 1) {
					this.bookCollectActiion(outId)
				} else {
					this.closedComicAction(outId)
				}
			},
			bookCollectActiion(outId){
				let data ={ bookId: outId }
				API.bookCollect(data).then(
				        res => {
							
				        },
				        err => {}
				      );
			},
			closedComicAction(outId){
				let data = { comicId: outId }
				API.closedComic(data).then(
				        res => {
							
				        },
				        err => {}
				      );
			},
			historicalRecordList() {
				uni.showLoading({ mask: true})
				this.floors = []
				API.historicalRecord().then(
				        res => {
							// console.log(res.data, '多多')
							this.floors = res.data
							this.floors.forEach((item)=>{
								// item.type="comic"
								if (item.type == 1) { // 小说
									item.url = '/pages/two/book/bookDetail/bookDetail?bookId='+item.outId
								}else if(item.type == 2){
									item.url = '/pages/two/comic/comicDetail/comicDetail?comicId='+item.outId
								}
							})
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
				if (e === 0) {
					this.historicalRecordList()
				}
		　　　　},
			fresh(e){
				if (e && this.defaultKey === 0) {
					this.historicalRecordList()
				}
		　　　　}
		　　},
		onShow() {
		// console.log(222)	
		},
		mounted() {
			this.historicalRecordList()
		}
	}
</script>

<style lang="less">
	.collect {
		background-color: #FFFFFF;
		padding-top: 120rpx;
		// min-width: 100%;
		// min-height: 100vh;
		// background-color: #9000FF;
		// .cu-card.article>.cu-item .content>uni-image{
		// 	width: 180rpx;
		// }
	}
</style>
