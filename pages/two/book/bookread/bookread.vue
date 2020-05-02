<template>
	<view class="Box" style="">
		<!-- 网页背景开始 -->
		<view class="pagbg anmt" :style="{backgroundColor:pageBg}"></view>
		<view class="zhongMenu" @tap="dianjile()"></view>
		<!-- 网页背景结束 -->
		<!-- 带返回键的导航栏开始 -->
		<view class="topBox anmt" :style="{color:fontColor,backgroundColor:menuBg,top:show?'0':'-150px'}">
			<view :style="{height:statusBarHeight}"></view>
			<view style="height: 40upx;"></view>
			<view style="height: 100upx;line-height: 100upx;text-overflow: ellipsis;" class="tMain">
				<image src="/static/images/yueduBack.png" class="back" @click="back()"></image>
				<text class="text-cut" style="font-size: 24upx;width: 420rpx">({{section_title}})</text>
				<text v-if="getToken" class="cuIcon-favorfill" :class="[isCollected?'text-orange':'']" @tap="bookCollectAction"></text>
				<text v-if="getToken" class="cuIcon-appreciate" :class="[isLiked?'text-orange':'']" @tap="bookLikeAction"></text>
			</view>
		</view>
		<!-- 带返回键的导航栏结束 -->
		<!-- 菜单开始 -->
		<view class="bottomBox anmt" :style="{color:fontColor,backgroundColor:menuBg,bottom:show?'0':'-150px'}">
			<view style="overflow: hidden;">
				<view style="float: left;width: 50%;overflow: hidden;">
					<view style="float: left;width: 30%;line-height: 70upx;text-align: center;font-size: 24upx;">字体</view>
					<view style="float: left;width: 70%;height: 70upx;display: flex;align-content: center;justify-content: center;">
						<slider style="width: 100%;" :value="size" min="20" max="100" @changing="changeFontSize" @change="changeFontSize" :activeColor="fontColor" :backgroundColor="pageBg" :block-color="fontColor" block-size="20" />
					</view>
				</view>
				<view style="float: left;width: 50%;overflow: hidden;">
					<view style="float: left;width: 30%;line-height: 70upx;text-align: center;font-size: 24upx;">间距</view>
					<view style="float: left;width: 70%;height: 70upx;display: flex;align-content: center;justify-content: center;">
						<slider style="width: 100%;" :value="lineHeight" min="50" max="150" @changing="changeLineHeight" @change="changeLineHeight" :activeColor="fontColor" :backgroundColor="pageBg" :block-color="fontColor" block-size="20" />
					</view>
				</view>
			</view>
			<view style="overflow: hidden;">
				<view style="float: left;width: 15%;line-height: 100upx;text-align: center;font-size: 24upx;">背景</view>
				<view style="float: left;width: 85%;height: 100upx;display: flex;">
					<view class="sekuai" v-for="(item,index) in zhutiList" @tap="qiehuan(index)" :key="item.name" :style="{backgroundColor:item.pageBg,borderColor:dqzhuti==index?item.fontColor:'rgba(0,0,0,0)'}" v-if="index!=1&&index!=2"></view>
				</view>
			</view>
			<view style="width: 100%;display: flex;" class="ddd">
				<view @tap="mulu" data-target="DrawerModalL">
					<view><text class="tficon">&#xe671;</text></view>
					<view>目录</view>
				</view>
				<view @click="qiehuan(dqzhuti==1?0:1)">
					<view><text class="tficon">{{dqzhuti==1?'&#xe699;':'&#xe612;'}}</text></view>
					<view>{{dqzhuti==1?'白天':'夜间'}}</view>
				</view>
				<view @click="qiehuan(dqzhuti==2?0:2)" :style="dqzhuti==2?'color:green':''">
					<view><text class="tficon">&#xe639;</text></view>
					<view>护眼</view>
				</view>
			</view>
		</view>
		<!-- 菜单结束 -->
		<!-- 顶部开始 -->
		<view class="anmt" :style="{color:fontColor,lineHeight:statusBarHeight,backgroundColor:show?menuBg:pageBg,position:'fixed',top:'0',left:'0',zIndex:'6',width:'100%',fontSize:'3vw',zIndex:'20'}">
			<!-- 时间电量开始 -->
			<view :style="{height:statusBarHeight,padding: '0 5vw'}">
				<view style="float: left;letter-spacing:0">
					<text v-text="systemTime"></text>
				</view>
				<view style="float: right;letter-spacing:0;">
					<text class="iconfont icon-80dianliang" style="font-size: 5vw;position: relative;">
						<text class="dianxin" :style="{backgroundColor:show?menuBg:pageBg}">
							<text class="dLiang" :style="{backgroundColor:fontColor,width:battery+'%'}"></text>
						</text>
					</text>
				</view>
			</view>
			<!-- 时间电量结束 -->
			<!-- 书名章节开始 -->
			<view style="height: 40upx;line-height: 40upx;padding: 0 5vw;">
				<view style="float: left;width: 300upx;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;" v-text="name"></view>
				<view v-text="section_title" style="float: right;width: 300upx;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;text-align: right;"></view>
			</view>
			<!-- 书名章节结束 -->
		</view>
		<!-- 顶部结束 -->
		<!-- 小说正文开始 -->
		<view class="sview" :style="{paddingTop:'calc('+statusBarHeight+' + 80px)',color:textColor,fontSize:forUpx(size)+'px',lineHeight:forUpx(lineHeight)+'px','paddingBottom':!status?'300rpx':'0'}">
			<text v-text="section_title" style="text-align: right; font-weight: bold; margin-bottom: 60rpx;"></text>
			<rich-text v-if="!status" :nodes="content_text"></rich-text>
		</view>
		<view v-if="status === 2" class="padding flex flex-direction">
			<text class="text-sm text-center text-gray">书币不足以扣除该章节</text>
			<button class="cu-btn bg-gradual-orange text-center text-white line-grey round margin-tb-sm lg" data-url="/pages/two/comic/moreSend/moreSend" @tap="toCharge">充值</button>
		</view>
		<view v-if="status === 1" class="padding flex flex-direction">
			<text class="text-sm text-center text-gray">该章节为付费章节，请登录</text>
			<button class="cu-btn bg-gradual-orange text-center text-white line-grey round margin-tb-sm lg" data-url="/pages/two/comic/moreSend/moreSend" @tap="toCharge">登录</button>
		</view>
		<!-- 小说正文结束 -->
		<!-- start抽屉 -->
		<!-- <view class="DrawerClose" :class="modalName=='viewModal'?'show':''" @tap="hideModal">
			<text class="cuIcon-pullright"></text>
		</view>
		<scroll-view scroll-y class="DrawerWindow" :class="modalName=='viewModal'?'show':''">
			<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg">
				<view class="cu-item arrow" v-for="(item,index) in getCapterBookList" :key="index">
					<view class="content">
						<text class="cuIcon-github text-grey"></text>
						<text class="text-grey">{{ item.title }}</text>
					</view>
				</view>
			</view>
		</scroll-view> -->
		<scroll-view scroll-y class="cu-modal drawer-modal justify-start" :class="modalName=='DrawerModalL'?'show':''" @tap="hideModal">
			<!-- <view class="cu-dialog basis-lg" @tap.stop="" :style="[{top:CustomBar+'px',height:'calc(100vh - ' + CustomBar + 'px)'}]"> -->
			<view class="cu-dialog basis-lg" @tap.stop="" style="width: 500rpx;text-align: none;">
				<view class="cu-list menu text-left">
					<view class="cu-item arrow" v-for="(item,index) in getCapterBookList" :key="index" @tap="tocapter(item.id, item.jiNo)">
						<view class="content">
							<view :data-id="item.id">{{ item.title }}</view>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
		<!-- end抽屉 -->
	</view>
</template>
<script>
	var interval,timeInter,dianliangInter;
import zhuti from '@/static/theme'
import * as API from '@/api/books.js'
import { mapGetters} from 'vuex' 
export default{
	data(){
		return{
			CustomBar: this.CustomBar,
			modalName: null,
			section_title:'第一章 ',//章节标题
			//正文
			content_text:'',
			jiNo: null,
			id: null,
			bookId: null,
			name: '', // 书名
			show:false,//菜单display
			dqzhuti:0,//当前主题
			zhutiList:zhuti.data,//主题列表
			fontColor:'rgb(100,103,120)',//菜单字体颜色
			pageBg:'rgb(247,247,247)',//页面背景色
			menuBg:'#fff',//菜单背景色
			textColor:'#000',//富文本文字颜色
			statusBarHeight: '',
			Dindex:'',//当前章节索引
			shuming:'',//书名
			// id:'',//本书ID
			battery:'',//电量
			systemTime:'',//系统时间,
			size:uni.getStorageSync('fontsize')?uni.getStorageSync('fontsize'):40,//正文字体大小
			lineHeight:uni.getStorageSync('lineHeight')?uni.getStorageSync('lineHeight'):70,//正文行间距
			// pageNumber: 1,
			// pageSize: 10,
			isLoadMore: true,
			num: 0,
			isCollected: false,
			isLiked: false,
			status: 0
		}
	},
	computed:{
		...mapGetters({
			getCapterBookList: "getCapterBookList",
			getbookStatus: "getbookStatus",
			getToken:"getToken"
		}),
	},
	onUnload() {
		// 页面卸载的时候清除定时器
		clearInterval(timeInter)
		clearInterval(dianliangInter)
		uni.hideLoading();
		//页面卸载的时候将通知栏显示出来
		plus.navigator.setFullscreen(false);
	},
	created() {
		this.isCollected = this.getbookStatus.isCollected
		this.isLiked = this.getbookStatus.isLiked
		var this_ = this;
		//获取状态栏高度给顶部占位节点
		plus.navigator.setFullscreen(true);
		var zt = uni.getStorageSync('zhuti');//主题索引
		if(zt){
			this.dqzhuti = zt;
			this.fontColor=zhuti.data[zt].fontColor;//菜单字体颜色
			this.pageBg=zhuti.data[zt].pageBg;//页面背景色
			this.menuBg=zhuti.data[zt].menuBg;//菜单背景色
			this.textColor=zhuti.data[zt].textColor;//富文本文字颜色
		}else{
			this.dqzhuti = 0;
			this.fontColor=zhuti.data[0].fontColor;//菜单字体颜色
			this.pageBg=zhuti.data[0].pageBg;//页面背景色
			this.menuBg=zhuti.data[0].menuBg;//菜单背景色
			this.textColor=zhuti.data[0].textColor;//富文本文字颜色
		}
		uni.getSystemInfo({
			success: res=>{
				this.statusBarHeight = res.statusBarHeight + 'px';
			}
		})
	},
	onShow() {
		// console.log(this.getCapterBookList)
		//页面显示的时候将通知栏隐藏掉
		plus.navigator.setFullscreen(true);
	},
	onHide() {
		//页面隐藏的时候将通知栏显示出来
		plus.navigator.setFullscreen(false);
	},
	onLoad(e) {
		this.jiNo = e.jiNo
		this.id = e.id
		this.bookId = e.bookId
		this.name = e.name
		this.episodesContentAction()
		plus.navigator.setStatusBarStyle('dark');
		plus.navigator.setStatusBarBackground('#FF0000');
		this.dianliang();
		this.getTimes();
		//每分钟获取一次电量
		dianliangInter = setInterval(()=>{
			this.dianliang();
		},60000)
		//每秒获取一次时间
		timeInter = setInterval(()=>{
			this.getTimes();
		},1000)
	},
	onPullDownRefresh() {
		uni.stopPullDownRefresh();
		// if(this.num>0) {
		// 	this.num -= 1
		// 	this.jiNo = this.getCapterBookList[this.num].jiNo,
		// 	this.id = this.getCapterBookList[this.num].id
		// 	this.episodesContentAction()
		// } else {
		// 	uni.showToast({ icon: 'none', title: '没有更多了', duration: 1500 });
		// }
	},
	onReachBottom() {
		if (this.isLoadMore) {
			this.num += 1
			this.jiNo = this.getCapterBookList[this.num].jiNo,
			this.id = this.getCapterBookList[this.num].id
			this.episodesContentAction()
			// this.navstaus?this.categoryPageListList():this.getbookTypeList();
		} else {
			uni.showToast({ icon: 'none', title: '没有更多了', duration: 1500 });
		}
	},
	mounted() {
		// this.isCollected = this.getbookStatus.isCollected
		// this.isLiked = this.getbookStatus.isLiked
	},
	methods:{
		//修改正文字体大小
		changeFontSize(e){
			this.size = e.detail.value;
			uni.setStorageSync('fontsize',e.detail.value);
		},
		//修改正文行间距
		changeLineHeight(e){
			this.lineHeight = e.detail.value;
			uni.setStorageSync('lineHeight',e.detail.value);
		},
		mulu(e){
			this.modalName = e.currentTarget.dataset.target
			// uni.showToast({
			// 	title: '打开目录'
			// });
		},
		hideModal(e) {
			this.modalName = null
		},
		back(){
			uni.navigateBack({});
			// uni.navigateTo({
			// 	url: "/pages/two/book/bookDetail/bookDetail?bookId=" + this.bookId
			// })
		},
		toCharge() {
			uni.reLaunch({
				url: "/pages/user/user"
			})
		},
		dianjile(){
			this.show=!this.show;
		},
		//切换主题
		qiehuan(e){
			this.fontColor=zhuti.data[e].fontColor;//菜单字体颜色
			this.pageBg=zhuti.data[e].pageBg;//页面背景色
			this.menuBg=zhuti.data[e].menuBg;//菜单背景色
			this.textColor=zhuti.data[e].textColor;//富文本文字颜色
			uni.setStorageSync('zhuti',e);
			this.dqzhuti=e;
		},
		//获取系统电量
		dianliang(){
			var this_ = this;
			if (uni.getSystemInfoSync().platform != 'ios'){
				var main = plus.android.runtimeMainActivity();
				var Intent = plus.android.importClass('android.content.Intent');  
				var recevier = plus.android.implements('io.dcloud.feature.internal.reflect.BroadcastReceiver', {  
				          onReceive: function(context, intent) {  
				        var action = intent.getAction();  
				        if (action == Intent.ACTION_BATTERY_CHANGED) {  
				            var level   = intent.getIntExtra("level", 0); //电量  
				            var voltage = intent.getIntExtra("voltage", 0); //电池电压  
				            var temperature = intent.getIntExtra("temperature", 0); //电池温度  
				                        //如需获取别的，在这里继续写，此代码只提供获取电量  
							this_.battery = level;
				        }  
				     }  
				 });  
				var IntentFilter = plus.android.importClass('android.content.IntentFilter');  
				var filter = new IntentFilter(Intent.ACTION_BATTERY_CHANGED);  
				main.registerReceiver(recevier, filter); 
			}else{
				var UIDevice = plus.ios.import("UIDevice");  
				var dev = UIDevice.currentDevice();  
				if (!dev.isBatteryMonitoringEnabled()) {  
				    dev.setBatteryMonitoringEnabled(true);  
				}  
				var level =dev.batteryLevel();
				this_.battery = level*100;
			}
		},
		getTimes(){
			var times = new Date();
			this.systemTime = (times.getHours()<10?'0'+times.getHours():times.getHours()) + ':' + (times.getMinutes()<10?'0'+times.getMinutes():times.getMinutes());
		},
		forUpx(e){
			return uni.upx2px(e)
		},
		tocapter(id, jiNo) {
			// console.log(id)
			this.id = id
			this.jiNo = jiNo
			// status&&(this.content_text = '')
			this.episodesContentAction()
		},
		bookCollectAction() {
			let data = {
				bookId: this.bookId
			}
			API.bookCollect(data).then(
			        res => {
						this.isCollected = !this.isCollected
						let setStatusBook = {
							isCollected: this.isCollected,
							isLiked: this.isLiked
						}
						this.$store.dispatch("setStatusBook", setStatusBook).then(()=>{
							let msg = this.isCollected?'收藏成功':'取消收藏'
							uni.showToast({ icon: 'none', title: msg, duration: 1500 });
						})
			        },
			        err => {}
			      );
		},
		bookLikeAction() {
			let data = {
				bookId: this.bookId
			}
			API.bookLike(data).then(
			        res => {
						this.isLiked = !this.isLiked
						let setStatusBook = {
							isCollected: this.isCollected,
							isLiked: this.isLiked
						}
						this.$store.dispatch("setStatusBook", setStatusBook).then(()=>{
							let msg = this.isLiked?'点赞成功':'取消点赞'
							uni.showToast({ icon: 'none', title: msg, duration: 1500 });
						})
			        },
			        err => {}
			      );
		},
		episodesContentAction() {
			// console.log(1111)
			uni.showLoading({ mask: true})
			let data = { jiNo:this.jiNo,bid: this.bookId,chapterId:this.id }
			this.content_text = ''
			this.section_title = ''
			this.modalName = null
			API.episodesContent(data).then(
			        res => {
						// console.log(res.data, '多多')
						if (res.desc === '书币不足！') {
							this.status = 2
						} else if(res.desc === '请登录！') {
							this.status = 1
						} else {
							this.status = 0
							this.content_text = res.data
							
						}
						let getCapterBookList = JSON.parse(JSON.stringify(this.getCapterBookList))
						// console.log(this.chapterId, 'this.chapterId')
						getCapterBookList.forEach((item,index)=>{
							if(item.id == this.id) {
								this.section_title = item.title
								this.num = index
								if (index>=getCapterBookList.length-1) {
									this.isLoadMore = false
								}
							}
						})
			        },
			        err => {}
			      );
		}
	}
}
</script>
<style>
	@font-face {font-family: "iconfont";
	  src: url('/static/font/dianliang.ttf') format('truetype');
	}
	.iconfont {
	  font-family: "iconfont" !important;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
	.icon-80dianliang:before {
	  content: "\e617";
	}
	.pagbg{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	.zuizhong.active{
		opacity: 1;
		position: fixed;
		width: 100upx;
		text-align: center;
		font-size: 30upx;
		font-weight: bold;
		color: #ec706b;
		transform: translateX(50%) scale(0.7);
		right: 80upx;
		-webkit-transition: all 0.5s;
		z-index: 9
	}
	.zuizhong{
		opacity: 0;
		position: fixed;
		width: 100upx;
		text-align: center;
		font-size: 20upx;
		font-weight: bold;
		color: #ec706b;
		right: 80upx;
		transform: translateX(50%)  scale(0.1);
		-webkit-transition: all 0.5s;
		transition: all 0.5s;
		z-index: 9
	}
	.quanquan{
		-webkit-box-shadow: rgba(0,0,0,0.12) 0px 3px 13px 1px;
		box-shadow: rgba(0,0,0,0.12) 0px 3px 13px 1px;
		position: fixed;
		right: 70upx;
		z-index: 9;
		border-radius: 50%;
		overflow: hidden;
		transform: translateX(50%) scale(0.5);
	}
	.back{
		width: 40upx;
		height: 40upx;
		margin: 0 40upx;
	}
	.sview{
		width: calc(100% - 40upx);
		font-size: 45upx;
		line-height: 90upx;
		position: relative;
		text-indent:calc(2em + 12upx);
		margin: 0 auto;
		z-index: 5;
		white-space:normal;
		word-break:break-all;
		word-wrap:break-word;
		overflow: hidden;
		padding: 100upx 20upx 0;
	}
	.titlee{
		width: 100%;
		font-size: 45upx;
		line-height: 65upx;
		position: relative;
		z-index: 5;
		padding: 0 20upx 50upx;
		text-indent:-2.3em;
	}
	.tMain{
		display: flex;
		align-items:center;
	}
	page{
		letter-spacing:6upx;
	}
	.topBox{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		opacity: 1;
		z-index: 9;
	}
	.bottomBox{
		padding: 0 0 20upx 0;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		opacity: 1;
		z-index: 9;
	}
	.bottomBox .ddd>view{
		width: 100%;
		text-align: center;
		font-size: 24upx;
		line-height: 40upx;
	}
	.bottomBox .ddd image{
		width: 40upx;
		height: 40upx;
	}
	@font-face {font-family: "ydiconfont";
	  src: url('https://at.alicdn.com/t/font_1282539_9h0uwv1sxps.ttf') format('truetype'); /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
	}
	.tficon{
		font-family: ydiconfont;
		font-size: 34upx;
	}
	.guanggao{
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 6;
		width: 100%;
	}
	.dianxin{
		position: absolute;
		top: 32.5%;
		left: 11%;
		width: 72%;
		height: 35%;
	}
	.dLiang{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: block;
	}
	.anmt{
		transition: all 0.5s;
	}
	.sekuai{
		width: 150upx;
		height: 100upx;
		background-color: #EC706B;
		border-radius: 12upx;
		border: 5upx solid #000;
		transform: scale(0.4);
		margin: -10upx -35upx 0;
	}
	.zhongMenu{
		top: 50%;
		position: fixed;
		left: 0;
		width: 100%;
		height: 50%;
		transform: translateY(-50%);
		z-index: 9;
	}
	.Box .cuIcon-favorfill{
		position: absolute;
		right: 50rpx;
		font-size: 40rpx;
	}
	.Box .cuIcon-appreciate{
		position: absolute;
		right: 140rpx;
		font-size: 40rpx;
	}
</style>
