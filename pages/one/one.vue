<template>
	<view class="oneWrap">
		<cu-custom bgColor="bg-gradual-pink" :headerStatus="true" :isBack="false">
			<block slot="content">
				<s-switch @switchValue="getSwitchValue" :defaultValue="0" :switchList="arr"></s-switch>
			</block>
			<block v-if="!defaultKey && getToken" slot="right">
				<text class="lg text-pink"></text>
				<text class="lg cuIcon-delete" @tap="deleteAllHistoricalAction"></text>
			</block>
		</cu-custom>
		<view class="content grid col-2 bg-white" :class="[defaultKey?'bgShow':'']">
			<H-history :defaultKey="defaultKey" :fresh="fresh" @freshChange="freshChange"></H-history>
			<C-collect :defaultKey="defaultKey" :fresh="fresh" @freshChange="freshChange"></C-collect>
		</view>
	</view>
</template>

<script>
	import Vue from 'vue'
	import SSwitch from '@/components/s-switch/s-switch.vue'
	import HHistory from '@/pages/one/history/history.vue'
	import CCollect from '@/pages/one/collect/collect.vue'
	import * as API from '@/api/history.js'
	import { mapGetters, mapActions} from 'vuex'
	
	export default {
		components:{
			SSwitch,
			HHistory,
			CCollect
		},
		data() {
			return {
				title: 'Hello',
				CustomBar: this.CustomBar,
				defaultKey: 0,
				fresh: false,
				arr: [
									{
				                    key: 0,
				                    value: '历史'
				                },
				                {
				                    key: 1,
				                    value: '收藏'
				                }
				            ]
			}
		},
		computed:{
			...mapGetters({
				getToken: "getToken"
			}),
		},
		onPullDownRefresh() {
			if(this.getToken) {
				this.fresh = true
			} else {
				uni.stopPullDownRefresh();
			}
		},
		onLoad() {
			// console.log(this.CustomBar)
		},
		onShow(){
			console.log(33, this.defaultKey)
			this.fresh = true
		},
		methods: {
			freshChange() {
				this.fresh = false
			},
			// deleteBtn(){
			// 	deleteBtn
			// 	uni.showToast({ icon: 'none', title: '清除', duration: 1500 });
			// },
			deleteAllHistoricalAction(){
				API.deleteAllHistorical().then(
				        res => {
							this.fresh = true
							setTimeout(()=>{
								uni.showToast({ icon: 'none', title: '全部清除', duration: 1500 });
							},1000)
				        },
				        err => {}
				      );
			},
			getSwitchValue(e){
				console.log(e.key)
				this.defaultKey = e.key
				// setTimeout(()=>{
				// 	this.defaultKey = e.key
				// }, 1000)
				// if(e.key != this.defaultKey) {
				// 	uni.navigateTo({
				// 	    url: '/pages/collect/collect',
				// 		animationType: 'slide-in-right',
				// 		    animationDuration: 200
				// 	});
				// }
			}
		}
	}
</script>

<style>
	.oneWrap {
		overflow: hidden;
		width: 100%;
	}
	.oneWrap .content {
		width: 200%;
		/* min-height: calc(100vh - 90rpx); */
		transition: all .3s linear;
		/* display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center; */
	}
	
	.bgShow {
		/* display: block; */
		transform: translateX(-100vw);
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
