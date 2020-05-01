<template>
	<view class="bookDetail">
		<view class="fixed">
			<!-- <cu-custom :isBack="true" bgColor="bg-shadeTop text-white"> -->
			<cu-custom :isBack="true" :bgColor="titleDemo?'bg-gradual-pink':'text-white'">
				<block slot="backText">返回</block>
				<block v-if="titleDemo" slot="content">{{ titleDemo }}</block>
				<block v-if="getToken" slot="right">
					<text class="lg text-pink"></text>
					<view v-if="!collectStatus" class='cu-tag round bg-orange topwrap' @tap="bookCollectAction">
						<text class="lg cuIcon-add topshouc"></text>
						<text>收藏</text>
					</view>
					<view v-else class='cu-tag round bg-grey topwrap' @tap="bookCollectAction">
						<text class="text-white">已收藏</text>
					</view>
					<!-- <view class='cu-tag round bg-orange topwrap'>
						<text class="lg cuIcon-add topshouc"></text>
						<text v-if="!collectStatus">收藏</text>
						<text v-else>取消收藏</text>
					</view> -->
				</block>
			</cu-custom>
		</view>
		<view class="bg-img bg-mask flex align-end" :style="'background-image: url('+floors.coverPic+');height: 414upx;background-size: contain;'">
			<view class="padding-xl text-white">
				<view class="padding-xs text-xxl text-bold">
					{{ floors.title }}
				</view>
				<view class="padding-xs text-lg">
					{{ bookType(floors.category) }}
				</view>
			</view>
		</view>
		<scroll-view scroll-x class="bg-white nav text-center">
			<view class="cu-item curs" :class="index==TabCur?'text-orange cur':''" v-for="(item,index) in 2" :key="index" @tap="tabSelect"
			 :data-id="index">
				{{index?'选集':'详情'}}
			</view>
		</scroll-view>
		<view class="details grid col-2" :class="[TabCur==1?'tran':'',!ifFull?'currentPage':'']">
			<view class="detailWrap">
				<view class="title">作品简介</view>
				<view class="content">{{ floors.summary }}</view>
				<view class="auther">作者：{{ floors.author }}</view>
				<view class="grid col-3">
					<view class="text-left"><text class="lg text-orange cuIcon-favorfill"> {{ floors.collectSum || 0 }}人已收藏</text></view>
					<view class="text-center"><text class="lg text-blue cuIcon-appreciate"> {{ floors.likeSum || 0 }}人已点赞</text></view>
					<view class="text-right"><text class="lg text-pink cuIcon-like"> {{ (floors.collectSum + floors.likeSum)*10 || 0 }}人气值</text></view>
				</view>
			</view>
			<view class="selectWrap grid col-3">
				<view v-if="!ifFull?(index<6):true" class="padding-xs" v-for="(item,index) in floors.bookEpisodeList" :key="index" :data-id="item.id">
					<view class="cu-btn radius line-gray" @tap="toRead(item.id, item.jiNo)">
						第{{ index+1 }}章
					</view>
				</view>
				<view v-if="!ifFull" class="flex flex-direction" style="width:100vw;" @tap="changeFill">
					<button class="cu-btn radius bg-gray lg text-sm margin-tb-sm">查看更多章节</button>
				</view>
				<view v-else class="flex flex-direction" style="width:100vw;" @tap="changeFill">
					<button class="cu-btn radius bg-gray lg text-sm margin-tb-sm">收起更多章节</button>
				</view>
			</view>
		</view>

		<!-- start 最新评论 -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-titles text-orange "></text> 最新评论
			</view>
			<view class="action text-orange" @tap="toSend" data-url="/pages/two/book/moreCommon/moreCommon">
				<text>更多</text>
				<text class="lg cuIcon-right"></text>
			</view>
		</view>
		<view class="cu-card dynamic no-card">

			<view class="cu-list menu-avatar comment solids-top">
				<view v-if="index<4" class="cu-item" v-for="(item,index) in floors.commentList" :key="index">
					<view class="cu-avatar round" :style="'background-image:url('+ baseUrl+ item.portrait +');'"></view>
					<view class="content">
						<view class="text-grey">{{ item.userName }}</view>
						<view class="text-gray text-content text-df">
							{{ item.commentInfo }}
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
		</view>
		<!-- </view> -->
		<!-- end 最新评论 -->

		<!-- start 猜你喜欢 -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-titles text-orange "></text> 猜你喜欢
			</view>
		</view>
		<!-- end 猜你喜欢 -->
		
		<!-- start 打赏 -->
		<view class="bg-white padding flex flex-direction">
			<view class="bubble">
				<text>已打赏</text>
				<hr>
				<text>{{ floors.sendSum || 0 }}书币</text>
			</view>
			<button class="cu-btn bg-blue round margin-tb-sm lg half" @tap="showModal" data-target="ChooseModal">打赏</button>
		</view>
		<view class="cu-modal bottom-modal" :class="modalName=='ChooseModal'?'show':''" @tap="hideModal">
			<view class="cu-dialog" @tap.stop="">
				<view class="cu-bar bg-white">
					<view class="action text-blue" @tap="hideModal">取消</view>
					<!-- <view class="action text-green" @tap="okModal">确定</view> -->
				</view>
				<view class="grid col-3 padding-sm">
					<view v-for="(item,index) in checkbox" class="padding-xs" :key="index">
						<button class="cu-btn orange lg block line-orange" @tap="ChooseCheckbox"
						 :data-value="item.value"> {{item.name}}
							<view class="cu-tag sm round" :class="item.checked?'bg-white text-orange':'bg-orange'" v-if="item.hot">HOT</view>
						</button>
					</view>
				</view>
			</view>
		</view>
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-titles text-orange"></text> 打赏记录
			</view>
		</view>
		<view class="cu-card dynamic no-card">
			<view class="cu-list menu-avatar comment solids-top mbottom bg-white">
				<view v-if="index<4" class="cu-item" v-for="(item,index) in floors.sendList" :key="index">
					<view class="cu-avatar round" :style="'background-image:url('+baseUrl+item.portrait+');'"></view>
					<view class="content">
						<view class="text-grey">{{ item.userName || '' }}</view>
						<view class="text-orange text-content text-df">
							共赠送  {{ item.userAmount || 0 }}个书币给作者
						</view>
						<!-- <view class="margin-top-sm flex justify-between"> -->
							<!-- <view class="text-gray text-df">{{ timestampToTime(item.createTime)}}</view> -->
							<!-- <view>
								<text class="cuIcon-appreciatefill text-red"></text>
								<text class="cuIcon-messagefill text-gray margin-left-sm"></text>
							</view> -->
						<!-- </view> -->
					</view>
				</view>

				<!-- <view class="cu-item">
					<view class="cu-avatar round" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
					<view class="content">
						<view class="text-grey">凯尔</view>
						<view class="text-orange text-content text-df">
							赠送 X 1个礼物给作者
						</view>
						<view class="margin-top-sm flex justify-between">
							<view class="text-gray text-df">2018年12月4日</view>
						</view>
					</view>
				</view> -->
				<view class="bg-white padding flex flex-direction">
					<button v-if="!!floors.sendList" class="cu-btn line-grey round margin-tb-sm lg" @tap="toSend" data-url="/pages/two/book/moreSend/moreSend">更多</button>
				</view>
			</view>
		</view>
		
		<!-- end 打赏 -->
		<view class="fixednav flex  p-xs mb-sm bg-white solids-top">
			<view class="flex-twice bg-white padding-sm margin-xs radius text-cut margin-top-xs" style="line-height: 2.8;">
				<!-- <view class="text-cut margin-top"> -->
					<!-- 1话：第几章东方史蒂夫史蒂夫sdfsdfsdfsdf -->
					<!-- </view> -->
					{{ currentPage.name }}
			</view>
			<!-- <view class="flex-treble bg-grey padding-sm margin-xs radius">3</view> -->
			<view class="flex-sub padding-sm margin-xs radius">
				<button v-if="!floors.newestChapterId" class="cu-btn bg-orange round lg shadow" @tap="toRead(currentPage.chapterId, currentPage.jiNo)">立即阅读</button>
				<button v-else class="cu-btn bg-orange round lg shadow" @tap="toRead(currentPage.chapterId, currentPage.jiNo)">继续阅读</button>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapGetters, mapActions} from 'vuex'
	import * as API from "../../../../api/books.js"
	import { bookType } from "../../../../utils/match.js"
	import { baseUrl } from "../../../../config.js"
	import { timestampToTime } from "../../../../utils/filter.js"
	export default {
		data() {
			return {
				TabCur: 0,
				bookId: null,
				floors: {},
				collectStatus: 0,
				likedStatus: 0,
				titleDemo: '',
				ifFull: false,
				modalName: null,
				currentPage:{
					chapterId:null,
					name: ''
				},
				checkbox: [{
					value: 100,
					name: '100书币',
					checked: false,
					hot: false,
				}, {
					value: 200,
					name: '200书币',
					checked: false,
					hot: false,
				}, {
					value: 300,
					name: '300书币',
					checked: false,
					hot: false,
				}, {
					value: 600,
					name: '600书币',
					checked: false,
					hot: false,
				}, {
					value: 800,
					name: '800书币',
					checked: false,
					hot: false,
				}, {
					value: 1000,
					name: '1000书币',
					checked: false,
					hot: false,
				}]
			};
		},
		computed:{
			...mapGetters({
				getToken: "getToken"
			}),
			baseUrl(){
				return baseUrl
			}
		},
		onPageScroll(res){
			// #ifdef H5
			let top = res.scrollTop
			if(top>=170) {
				this.titleDemo = this.floors.title || ''
			} else {
				this.titleDemo = ''
			}
			// #endif
		},
		onLoad(e) {
			// console.log(this.getToken, 6676767)
			this.bookId = e.bookId
			// this.getbookDetailAction()
			// uni.showLoading({
			// 	title: '加载中...',
			// 	mask: true
			// });
			// let list = [{}];
			// for (let i = 0; i < 26; i++) {
			// 	list[i] = {};
			// 	list[i].name = String.fromCharCode(65 + i);
			// 	list[i].id = i;
			// }
			// this.list = list;
			// this.listCur = list[0];
		},
		onShow() {
			this.getbookDetailAction()
		},
		onReady() {
			// console.log(this.$store)
			// uni.hideLoading()
		},
		methods: {
			// ...mapActions([
			// 	setCapterBook
			// ]),
			bookType,
			timestampToTime,
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
			},
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
				console.log(this.modalName, 888)
			},
			hideModal(e) {
				this.modalName = null
			},
			ChooseCheckbox(e) {
				let items = this.checkbox;
				let values = e.currentTarget.dataset.value;
				console.log(e.currentTarget.dataset.value, items)
				let num = 0
				for (let i = 0, lenI = items.length; i < lenI; ++i) {
					if (items[i].value == values) {
						// items[i].checked = !items[i].checked;
						num = i
					}
				}
				let data = { amount: Number(values), bookId:Number(this.bookId) }
				console.log(data)
				API.userSend(data).then(
				        res => {
							setTimeout(()=>{
									uni.showToast({ icon: 'none', title: '打赏'+values+'书币', duration: 1500 });
									this.getbookDetailAction()
							},500)
							this.modalName = null
				        },
				        err => {}
				      );
				// for (let i = 0, lenI = items.length; i < lenI; ++i) {
				// 	if (items[i].value == values) {
				// 		items[i].checked = !items[i].checked;
				// 		break
				// 	}
				// }
			},
			// okModal() {
			// 	let chek = this.checkbox.filter((item)=> item.checked)
			// 	let checklist = chek.map(item => item.name)
			// 	console.log(chek, checklist)
			// 	console.log('ok')
			// },
			changeFill() {
				this.ifFull = !this.ifFull
			},
			toRead(id, jiNo) {
				uni.navigateTo({
					url: '/pages/two/book/bookread/bookread?id=' + id +'&name='+ this.floors.title +'&bookId=' + this.bookId+'&jiNo='+jiNo
				})
			},
			toSend(e) {
				let url = e.currentTarget.dataset.url
				uni.navigateTo({
					url: url + "?bookId=" + this.bookId +"&title=" + this.floors.title + "&img=" + this.floors.coverPic + "&category=" + this.floors.category
				})
			},
			bookCollectAction() {
				let data = {
					bookId: this.bookId
				}
				API.bookCollect(data).then(
				        res => {
							this.collectStatus = !this.collectStatus
							// this.getbookDetailAction()
							let setStatusBook = {
								isCollected: this.collectStatus,
								isLiked: this.likedStatus
							}
							// console.log(setStatusBook, 888)
							this.$store.dispatch("setStatusBook", setStatusBook)
				        },
				        err => {}
				      );
			},
			getbookDetailAction() {
				// console.log(1111)
				uni.showLoading({ mask: true})
				let data = { bookId:this.bookId }
				API.getbookDetail(data).then(
				        res => {
							// console.log(res.data, '多多')
							let bookEpisodeList = res.data.bookEpisodeList
							this.floors = res.data
							this.collectStatus = !!res.data.isCollected
							this.likedStatus = !!res.data.isLiked
							let setStatusBook = {
								isCollected: !!res.data.isCollected,
								isLiked: !!res.data.isLiked
							}
							// console.log(setStatusBook, 9999)
							this.$store.dispatch("setStatusBook", setStatusBook)
							this.$store.dispatch("setCapterBook", bookEpisodeList).then(() => {
								if(this.floors.newestChapterId) {
									bookEpisodeList.forEach((item,index)=>{
										if(item.id == this.floors.newestChapterId) {
											// console.log(item.id,888)
											this.currentPage.chapterId = item.id
											this.currentPage.jiNo = item.jiNo
											this.currentPage.name = item.title
										}
									})
								} else {
									this.currentPage.chapterId = bookEpisodeList[0].id
									this.currentPage.jiNo = bookEpisodeList[0].jiNo
									this.currentPage.name = bookEpisodeList[0].title
								}
												   // setTimeout(()=>{
													  //  uni.switchTab({
													  //  	url: '/pages/user/user'
													  //  })
												   // },1000)
													
							 });
				        },
				        err => {}
				      );
			}
		},
	}
</script>

<style lang="less">
	.bookDetail {
		.currentPage {
			min-height: 500rpx;
			overflow: hidden;
		}
		.topwrap {
			margin-right: 15px;
		}

		.topshouc {
			margin-right: 0;
		}

		.curs {
			/* border-bottom: 2px solid; */
			margin: 0 140rpx;
		}
		.cu-bar {
			margin-top: 60rpx;
			
		}
		.cu-btn.lg.half {
			text-align: center;
			margin: 0 auto;
			width: 200rpx;
		}
		.mbottom {
			padding-bottom: 160rpx;
		}
		.fixednav {
			position: fixed;
			left: 0;
			bottom: 0;
			width: 100vw;
		}
		.details {
			width: 200vw;
			// margin-bottom: 60rpx;
			background-color: #FFFFFF;
			transition: all .3s linear;
			
			.detailWrap {
				padding: 60rpx 40rpx 40rpx;

				.title {
					margin-bottom: 20rpx;
				}

				.content {
					color: #666;
					font-size: 20rpx;
					margin-bottom: 40rpx;
				}

				.auther {
					color: #666;
					margin-bottom: 40rpx;
				}
			}

			.selectWrap {
				padding: 60rpx 40rpx 40rpx;
			}
		}
		.bubble {
			width: 150px;
			    height: 150px;
			    margin: 20px auto;
			    border-radius: 50%;
			    background: 0 0;
			    text-align: center;
			    line-height: 55px;
			    font-size: 20px;
			    color: #44a9f7;
			    padding-top: 20px;
			    box-sizing: border-box;
			    box-shadow: inset -30px -30px 75px rgba(68,168,247,.2), inset 0 0 5px rgba(68,168,247,.5), inset 0 0 55px rgba(255,255,255,.5), inset -3px -3px 5px rgba(68,168,247,.5), 0 0 50px rgba(255,255,255,.75);
				hr {
				    width: 80%;
				    height: 1px;
				    border: none;
				    margin: 0 auto;
				    background-color: #44a9f7;
				}
		}
	}

	.bookDetail .tran {
		transform: translateX(-100vw);
	}

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
