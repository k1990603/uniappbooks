<template>
	<view class="charge bg-white">
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">
				推广赚取
			</block>
		</cu-custom>
		
		<!-- <view class="padding-bottom-xs bg-gray"></view> -->
		
		<view class="padding bg-white">
			<!-- <view class="margin">推广赚钱说明</view> -->
			<view class="margin">1. 分享你的推广二维码，通过此二维码进入充值的客户的,你将获得：{{data.levelOne}}{{data.levelOneScale*100+'%'}}提成佣金,{{data.levelTwo}}{{data.levelTwoScale*100+'%'}}提成佣金,{{data.levelThree}}{{data.levelThreeScale*100+'%'}}提成佣金,。</view>
			<view class="margin">2. 你的推广二维码获取方式：点击下方菜单“用户中心-个人中心-推广二维码”即可获取推广二维码和链接，然后将二维码或链接分享给朋友、群、朋友圈。</view>
			<view class="margin">3. 有人通过你分享的二维码注册的，则该用户为你的推广用户。</view>
			<view class="margin">4. 你将永久获得：通过此二维码进入充值的客户的{{data.levelOneScale*100+'%'}}提成，不限充值次数和时间。</view>
			<view class="margin">5. 推广二维码分享后，你可以在：“个人中心—推广用户”中查看通过此推广二维码进入的客户和客户充值的金额。然后在“申请提现”中可以申请提现。</view>
			<view class="margin">6.申请提现三个工作日内到账。</view>
			<view class="margin margin-top-xl">如有疑问，请联系客服QQ： 
				<text class="text-orange">123456</text> 
			</view>
		</view>
	</view>
</template>

<script>
	import * as API from "../../../api/user.js";
	export default {
		data() {
			return {
				data: {
					levelOne: "一级分销商",
					levelOneScale: 0.3,
					levelThree: "三级分销商",
					levelThreeScale: 0.1,
					levelTwo: "二级分销商",
					levelTwoScale: 0.2
				}
			};
		},
		mounted() {
			this.showAction()
		},
		methods:{
			showAction() {
				uni.showLoading({ mask: true})
				API.show().then(
				        res => {
							this.data = res.data
							// debugger
							// this.chargeList.push({ rechargeNum:data,givingNum:'VIP包年',id:0 })
				        },
				        err => {}
				      );
			}
		}
	}
</script>

<style lang="less">
.charge {
	height: 100vh;
	// padding-top: 120rpx;
	.chargeContent {
		position: relative;
		transition: all .3s linear;
		image {
			position: absolute;
			top: 0;
			right: 0;
			width: 100rpx;
			height: 90rpx;
		}
	}
}
</style>
