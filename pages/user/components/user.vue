<template>  
    <view class="my">
		<view class="myTitle">
			<image src="/static/images/ubg.png" class="ubg" mode=""></image>
			<view class="container flex  p-xs margin-bottom-sm mb-sm">
				<view class="flex-sub text-white margin-xs radius">
					<view class="cu-avatar round xl margin-left"  :style="[{ backgroundImage:'url('+ baseUrl + userInfo.portrait +')' }]" @tap="uploadImg">
						<view class="cu-tag badge bg-pink" :class="userInfo.isVip?'bg-gradual-pink':'bg-grey'">VIP</view>
						<!-- <view class="cu-tag badge bg-pink">VIP</view> -->
					</view>
				</view>
				<view class="flex-twice text-white margin-xs radius" style="fontSize:28rpx">
					<view class="title">账号：{{ userInfo.userName }}</view>
					<view class="text">
					  <span v-if="userInfo.isVip" class="title">VIP开始时间：{{userInfo.startTime}}</span>
					 <span v-if="userInfo.isVip" style="display: block;">VIP到期时间：{{ userInfo.endTime }}</span>
					 </view>
				</view>
				<view class="flex-sub text-white margin-xs radius">
					<view class="action margin-bottom">
						<!-- <a href="/index.php?m=&amp;c=Mh&amp;a=withdraw" class="btn btn-sign" style="color:#2196F3">申请提现</a> -->
						<button class="cu-btn round bg-white text-blue text-sm">
							申请提现
						</button>
					</view>
					<view class="action">
						<button v-if="!userInfo.isSignIn" @tap="signAction" class="cu-btn round bg-white text-blue text-sm" style="padding:0 54rpx">
							签到
						</button>
						<button v-else class="cu-btn round bg-white text-blue text-sm" style="padding:0 44rpx">
							已签到
						</button>
								<!-- 		<a href="javascript:;" class="btn btn-sign" style="color:#2196F3">签到</a>			 -->
					</view>
				</view>
			</view>
		</view>
		<!-- 书币 -->
		<view class="bg-white grid col-2 padding bookWrap">
			<view class="text-center solids-right">
				<text>书币余额</text>
			</view>
			<view class="text-center">
				<text>余额</text>
			</view>
			<view class="text-center solids-right">
				<text class="text-gradual-orange text-xxl">{{ userInfo.bookCurrency || 0 }}</text>
			</view>
			<view class="text-center text-lg">
				<text class="text-gradual-orange text-xxl">{{ userInfo.balance || 0 }}</text>
			</view>
			<!-- <view></view> -->
		</view>
		<!-- 书币 -->
		<view class="cu-list menu">
			<view class="cu-item">
				<view class="content">
					<text class="cuIcon-my text-grey"></text>
					<text class="text-grey">我的账户</text>
				</view>
				<div class="action">
					<button class="cu-btn round lines-orange text-sm margin-right-xs" @tap="toNavigate" data-url="/pages/user/charge/charge">
						购买书币
					</button>
					<button class="cu-btn round lines-orange text-sm" @tap="toNavigate" data-url="/pages/user/chargeMoney/chargeMoney">
						立即充值
					</button>
				</div>
			</view>
		</view>
		<view class="cu-list menu">
			<view class="cu-item">
				<view class="content">
					<!-- <image src="/static/logo.png" class="png" mode="aspectFit"></image> -->
					<text class="cuIcon-text text-orange"></text>
					<text class="text-grey">咨询,代理,待充值QQ</text>
				</view>
				<view class="action text-grey text-sm">
					<text>12345678</text>
				</view>
			</view>
		</view>
		<view class="cu-list menu margin-top">
			<view class="cu-item arrow">
				<button class="cu-btn content" open-type="contact">
					<text class="cuIcon-moneybag text-olive"></text>
					<text class="text-grey">推广赚钱</text>
				</button>
			</view>
			<!-- <view class="cu-item arrow">
				<navigator class="content" hover-class="none" url="../list/list" open-type="redirect">
					<text class="cuIcon-discoverfill text-orange"></text>
					<text class="text-grey">Navigator 跳转</text>
				</navigator>
			</view> -->
			<view class="cu-item arrow" @tap="toNavigate" data-url="/pages/user/myPromote/myPromote">
				<view class="content">
					<text class="cuIcon-friend text-pink"></text>
					<text class="text-grey">我的推广用户</text>
				</view>
			</view>
			<view class="cu-item arrow" @tap="toNavigate" data-url="/pages/user/myCode/myCode">
				<view class="content">
					<text class="cuIcon-qrcode text-green"></text>
					<text class="text-grey">我的推广二维码</text>
				</view>
			</view>
			<!-- <view class="cu-item arrow">
				<view class="content">
					<text class="cuIcon-service text-red  margin-right-xs"></text>
					<text class="text-grey">客服帮忙</text>
				</view>
			</view> -->
			<view class="cu-item arrow">
				<view class="content">
					<text class="cuIcon-mark text-yellow"></text>
					<text class="text-grey">我的消息</text>
				</view>
			</view>
			<view class="cu-item arrow">
				<view class="content">
					<text class="cuIcon-form text-cyan"></text>
					<text class="text-grey">建议反馈</text>
				</view>
			</view>
			<view class="cu-item arrow">
				<view class="content">
					<text class="cuIcon-recharge text-pink"></text>
					<text class="text-grey">账单明细</text>
				</view>
			</view>
			<!-- #ifdef H5 -->
			<view class="cu-item arrow" @tap="downLoad">
				<view class="content">
					<text class="cuIcon-down text-blue"></text>
					<text class="text-grey">下载</text>
				</view>
			</view>
			<!-- #endif -->
		</view>
		<view class="cu-list menu" @tap="logout">
			<view class="cu-item arrow">
				<view class="content">
					<text class="cuIcon-expressman text-mauve"></text>
					<text class="text-grey">退出</text>
				</view>
			</view>
		</view>
		<view class="cu-list menu"></view>
    </view>  
</template>
<script>
    import { mapActions, mapGetters} from 'vuex' 
	import { baseUrl } from "../../../config.js"
	import * as API from "../../../api/user.js";
	let startY = 0, moveY = 0, pageAtTop = true;
    export default {
		data(){
			return {
				coverTransform: 'translateY(0px)',
				coverTransition: '0s',
				moving: false,
				userInfo: {}
			}
		},
		props: {
		    fresh: {
		        type: Boolean,
		        default: false
		    }
		},
		computed:{
			...mapGetters({
				getToken: "getToken",
				getUserInfo: "getUserInfo"
			}),
			baseUrl(){
				return baseUrl
			}
		},
		onShow(e) {
			// console.log(11111)
			// console.log(e,7777)
			// if (!this.getToken) {
			// 	uni.navigateTo({
			// 		url: '/pages/login/login'
			// 	})
			// }
			// this.personalCenterList()
		},
		mounted(){
			// console.log(22222)
			this.personalCenterList()
			// console.log(this.getToken)
			// console.log(this.$store)
		},
		watch:{
			fresh(e){
					console.log(111)
					if (e) {
						this.personalCenterList()
					}
			　　　　},
		},
		// #ifndef MP
		onNavigationBarButtonTap(e) {
			const index = e.index;
			if (index === 0) {
				this.navTo('/pages/set/set');
			}else if(index === 1){
				// #ifdef APP-PLUS
				const pages = getCurrentPages();
				const page = pages[pages.length - 1];
				const currentWebview = page.$getAppWebview();
				currentWebview.hideTitleNViewButtonRedDot({
					index
				});
				// #endif
				uni.navigateTo({
					url: '/pages/notice/notice'
				})
			}
		},
		// #endif
  //       computed: {
		// 	...mapState(['hasLogin','userInfo'])
		// },
        methods: {
			downLoad() {
				window.location.href="../../../books/static/xiaotanke.apk"
				// uni.downloadFile({
				//     url: '/static/xiaotanke.apk', //仅为示例，并非真实的资源
				//     success: (res) => {
				//         if (res.statusCode === 200) {
				//             console.log('下载成功');
				//         }
				//     }
				// });
			},
			logout(){
				this.$store.dispatch("delToken", '').then(()=>{
					API.quit().then(
					        res => {
								uni.showToast({ icon: 'none', title: '退出成功', duration: 1500 });
					        },
					        err => {}
					      );
				})
			},
			signAction() {
				API.signIn().then(
					        res => {
								this.personalCenterList()
								// console.log(this.getUserInfo)
								uni.showToast({ icon: 'none', title: '获得'+res.data.bookCurrency || 0+ '书币', duration: 1500 });
					        },
					        err => {}
					      );
				
			},
			personalCenterList() {
				uni.showLoading({ mask: true})
				API.personalCenter().then(
				        res => {
							// console.log(res.data, '多多')
							this.userInfo = res.data
							this.$store.dispatch("updateUserInfo", this.userInfo)
							uni.stopPullDownRefresh();
							this.$emit('freshAction')
				        },
				        err => {}
				      );
			},
			uploadImg() {
				let that = this
				uni.chooseImage({
					count:1,
					sizeType:['original'],
					sourceType: ['album', 'camera'],
					success(res){
						const tempFilePaths = res.tempFilePaths;
						// console.log(res,that.getToken, 3333)
						// let img = that.getBase64Image(tempFilePaths)
						uni.uploadFile({
						            url: 'http://47.244.209.81/books/uploadDownload/uploadImage', //仅为示例，非真实的接口地址
						            filePath: tempFilePaths[0],
						            name: 'file',
									header: {
										// 'Content-Type': 'multipart/form-data',
										'token': that.getToken
									},
						            success: (uploadFileRes) => {
										that.personalCenterList()
						                // console.log(uploadFileRes.data, 999);
										uni.showToast({ icon: 'none', title: '上传成功', duration: 1500 });
						            }
						        });
					}
				})
			},
			 urlTobase64(url) {
			            uni.request({
			                url: url,
			                method: 'GET',
			                responseType: 'arraybuffer',
			                success: res => {
			                    let base64 = wx.arrayBufferToBase64(res.data); //把arraybuffer转成base64
			                    base64 = 'data:image/jpeg;base64,' + base64; //不加上这串字符，在页面无法显示
			                    console.log(base64);
			                }
			            });
			        },
			toNavigate(e) {
				// console.log(e)
				let url = e.currentTarget.dataset.url
				uni.navigateTo({
					url: url
				})
			},
			/**
			 * 统一跳转接口,拦截未登录路由
			 * navigator标签现在默认没有转场动画，所以用view
			 */
			navTo(url){
				if(!this.hasLogin){
					url = '/pages/public/login';
				}
				uni.navigateTo({  
					url
				})  
			}, 
	
			/**
			 *  会员卡下拉和回弹
			 *  1.关闭bounce避免ios端下拉冲突
			 *  2.由于touchmove事件的缺陷（以前做小程序就遇到，比如20跳到40，h5反而好很多），下拉的时候会有掉帧的感觉
			 *    transition设置0.1秒延迟，让css来过渡这段空窗期
			 *  3.回弹效果可修改曲线值来调整效果，推荐一个好用的bezier生成工具 http://cubic-bezier.com/
			 */
			coverTouchstart(e){
				if(pageAtTop === false){
					return;
				}
				this.coverTransition = 'transform .1s linear';
				startY = e.touches[0].clientY;
			},
			coverTouchmove(e){
				moveY = e.touches[0].clientY;
				let moveDistance = moveY - startY;
				if(moveDistance < 0){
					this.moving = false;
					return;
				}
				this.moving = true;
				if(moveDistance >= 80 && moveDistance < 100){
					moveDistance = 80;
				}
		
				if(moveDistance > 0 && moveDistance <= 80){
					this.coverTransform = `translateY(${moveDistance}px)`;
				}
			},
			coverTouchend(){
				if(this.moving === false){
					return;
				}
				this.moving = false;
				this.coverTransition = 'transform 0.3s cubic-bezier(.21,1.93,.53,.64)';
				this.coverTransform = 'translateY(0px)';
			}
        }
    }  
</script>  
<style lang="less">
	.my {
		.ubg {
			width: 100%;
		}
		.myTitle {
			height: 300rpx;
			overflow: hidden;
		}
		.container {
			width: 100%;
			    height: 300rpx;
			    position: absolute;
			    left: 0;
			    top: 0;
			    display: flex;
			    align-items: center;
		}
		.cu-list {
			margin-top: 30rpx;
		}
	}
	
</style>