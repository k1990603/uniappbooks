<template>
	<view class="boxMail">
		<cu-custom bgColor="bg-gradual-pink" :headerStatus="true" :isBack="true">
			<block slot="backText">返回</block>
		</cu-custom>
		<view class="cu-bar search">
			<view class="search-form round bg-white">
				<text class="cuIcon-search"></text>
				<input :adjust-position="false" type="text" @input='searchKey' @confirm='searchBtn' placeholder="搜索漫画" confirm-type="search"></input>
			</view>
			<view class="action">
				<text @tap="searchBtn">搜索</text>
			</view>
		</view>
		<!-- <view class="margin-top text-center" v-if="listData.length <= 0">
			暂时只提供搜索的方式
		</view> -->
		<view class="cu-bar solid-bottom" v-if="listData.length > 0">
			<view class="action">搜索结果</view>
		</view>
		<view class="cu-list menu-avatar" v-if="listData.length > 0">
		
			<view class="cu-item" v-for="(item,index) in listData" :key="index" @tap="details(item.id)">
				<image :src="item.coverPic" class="cu-avatar radius lg" mode="widthFix" lazy-load></image>
				<view class="content">
					<view>
						<view class="text-cut">{{item.title}}</view>
						<view class="cu-tag round bg-orange sm">{{item.author}}</view>
					</view>
					<view class="text-gray text-sm flex"> <view class="text-cut">{{item.summary}}</view></view>
				</view>
			</view>
			
		</view>
		
	</view>
</template>

<script>
	import _tool from '@/utils/tools.js';
	import * as API from '@/api/comic.js'
	export default {
		data() {
			return {
				key: '', listData: [],
			}
		},
		onLoad() {

		},
		methods: {
			searchKey(event) {
				console.log(event, 77)
				this.key = event.detail.value;
				// let data = { name: this.key }
				// API.getComicStyle(data).then(
				//         res => {
				// 			console.log(res.data, '多多')
				// 			this.listData = res.data.list
				//         },
				//         err => {}
				//       );
			},
			searchBtn() {
				console.log(3333)
				if (this.key) {
					this.listData = []
					let data = { name: this.key }
					uni.showLoading({ mask: true})
					console.log(111)
					API.getComicStyle(data).then(
					        res => {
								console.log(99999)
								let list = res.data.list || []
								if(list.length<1) {
									uni.showToast({ icon: 'none', title: '没有搜索到相关漫画', duration: 1500 })
								} else {
									this.listData = list
								}
					        },
					        err => {
								console.log(err, 'err')
							}
					      )
				}
				
			},
			GetSearchData(res) {
				let that = this;
				_tool.searchData(res).then(function(res) {
					console.log(res, 888)
					that.listData = res;
				});
			},
			details(id) {
				uni.navigateTo({
					url: '/pages/two/comic/comicDetail/comicDetail?comicId=' + id
				})
			}
		}
	}
</script>

<style>
	.boxMail{
		padding-top: 120rpx;
	}
	.cu-bar .search-form{
		background-color: #ffffff;
	}
</style>
