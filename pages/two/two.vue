<template>
	<view class="twoWrap">
		<cu-custom bgColor="bg-gradual-pink" :matgintop="true" :bottomColor="showClass ==='oneMove'" :headerStatus="true" :isBack="false">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">
				<s-switch @switchValue="getSwitchValue" :defaultValue="0" :switchList="arr"></s-switch>
				<!-- 垂直导航 -->
			</block>
			<block slot="right">
				<text class="lg text-pink"></text>
				<text class="lg cuIcon-searchlist" @tap="toSearch"></text>
			</block>
		</cu-custom>
		<view class="contents grid col-3" :class="showClass">
			<!-- <B-book :class="[!defaultKey?'bgShow animation-slide-right':'animation-slide-left bgHide']"></B-book> -->
			<B-book :fresh="fresh" :showClass="showClass" @freshChange="freshChange"></B-book>
			<C-comic :fresh="fresh" :showClass="showClass" @freshChange="freshChange"></C-comic>
			<M-music></M-music>
		</view>
	</view>
</template>

<script>
	import Vue from 'vue'
	import SSwitch from '@/components/s-switch/s-switch.vue'
	import BBook from '@/pages/two/book/book.vue'
	import CComic from '@/pages/two/comic/comic.vue'
	import MMusic from '@/pages/two/music/music.vue'
	
	// Vue.component('B-book',BBook)
	// Vue.component('C-comic',CComic)
	// Vue.component('M-music',MMusic)
	export default {
		components:{
			SSwitch,
			BBook,
			CComic,
			MMusic
		},
		data() {
			return {
				// title: 'Hello',
				CustomBar: this.CustomBar,
				// defaultKey: 0,
				showClass: '',
				fresh: false,
				arr: [
				                {
				                    key: 0,
				                    value: '小说'
				                },
				                {
				                    key: 1,
				                    value: '漫画'
				                }
								// {
								//     key: 2,
								//     value: '听书'
								// }
								// {
								//     key: 3,
								//     value: '视频'
								// }
				            ]
			}
		},
		onLoad() {
			// console.log(this.CustomBar)
		},
		onPullDownRefresh() {
			// console.log('下拉刷新');
			// this.lists = [];
			// this.refreshing = true;
			// this.pageNumber = 1
			// this.comicContent = []
			// this.showSkeleton = true
			// this.getComicStyleList();
			// console.log(1111)
			this.fresh = true
		},
		onShow(){
			this.fresh = true
		},
		methods: {
			freshChange() {
				this.fresh = false
			},
			getSwitchValue(e){
				let defaultKey = e.key
				if (!defaultKey) {
					this.showClass = ''
				} else if(defaultKey === 1) {
					this.showClass = 'oneMove'
				} else {
					this.showClass = 'twoMove'
				}
			},
			toSearch() {
				// console.log(this.showClass, 999)
				if(this.showClass === '') {
					// console.log(1111)
					uni.navigateTo({
					    url: '/pages/two/book/book_mall/index'
					});
				} else if(this.showClass === 'oneMove') {
					// console.log(222)
					uni.navigateTo({
					    url: '/pages/two/comic/comic_mall/index'
					});
				} 
			}
		}
	}
</script>

<style>
	.twoWrap {
		overflow: hidden;
		width: 100%;
	}

	.twoWrap .contents {
		width: 300%;
		/* background-color: #007AFF; */
		/* min-height: 100vh; */
		transition: all .3s linear;
		/* display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center; */
	}
	.oneMove {
		transform: translateX(-100vw);
	}
	
	.twoMove {
		transform: translateX(-200vw);
	}
	
	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
