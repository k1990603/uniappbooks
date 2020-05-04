<template>
	<view class="text-center">
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">
				我的推广二维码
			</block>
		</cu-custom>
		<!-- <loayImg :imgUrl="baseUrl + url" :fill="'aspectFit'"></loayImg> -->
		<!-- <text>{{ baseUrl + url }}</text> -->
		<image class="code margin-top-xl" :src="baseUrl + url" mode="aspectFit" @longtap="save"></image>
		<view class="margin-top-xl text-gray">
			<text>{{ baseUrl + url }}</text>
		</view>
		<view class="margin-top-xl text-gray">分享扫码，注册可赚取佣金</view>
	</view>
</template>

<script>
	import * as API from "../../../api/user.js";
	import { baseUrl } from "../../../config.js"
	import loayImg from "../../../components/loayImg/loayImg.vue"
	export default {
		data() {
			return {
				url: ''
			}
		},
		comments:{
			loayImg
		},
		computed: {
		    baseUrl(){
				return baseUrl
			}
		  },
		onLoad(e) {
			// console.log(e)
		},
		mounted() {
			this.getCodeAction()
		},
		methods: {
			// baseUrl,
			getCodeAction() {
				API.getCode().then(
				        res => {
							this.url = res.data
							// console.log(baseUrl + this.url, '二维码')
				        },
				        err => {}
				      );
			},
			save() {
				
				// #ifdef APP-PLUS
				uni.showActionSheet({
					itemList: ['保存图片到相册'],
					success: () => {
						plus.gallery.save(this.baseUrl + this.url, function() {
							uni.showToast({
								title: '保存成功',
								icon: 'none'
							})
						}, function() {
							uni.showToast({
								title: '保存失败，请重试！',
								icon: 'none'
							})
						});
					}
				})
				// #endif
			}
		}
	}
</script>

<style>
	.code{
		// padding-top: 120rpx;
	}
</style>
