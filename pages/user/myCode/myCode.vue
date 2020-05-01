<template>
	<view class="text-center">
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">
				我的推广二维码
			</block>
		</cu-custom>
		<!-- <loayImg :imgUrl="baseUrl + url" :fill="'aspectFit'"></loayImg> -->
		<!-- <text>{{ baseUrl + url }}</text> -->
		<image class="code margin-top-xl" :src="baseUrl + url" mode="aspectFit"></image>
		<view class="margin-top-xl text-gray">用户扫码注册，可赚取佣金</view>
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
			}
		}
	}
</script>

<style>
	.code{
		padding-top: 120rpx;
	}
</style>
