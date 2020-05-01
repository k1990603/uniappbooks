<template>
	<view class="loginWrap">
		<cu-custom bgColor="bg-gradual-pink" :isBack="false">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">
				注册
			</block>
		</cu-custom>
		<view class="loginContainer ">
		  <view class="wrap_logo">
		    <image class="logo" mode="aspectFit" src="../../static/images/authlogo.gif" />
		  </view>
		  <view class="wrap_form">
		    <!-- <form catchsubmit="formSubmit"> -->
		      <view class="wrap_input">
		        <view class="row border-half solid-bottom">
		          <image class="icon" mode="aspectFit" src="../../static/images/account.png" />
		          <input placeholder-class="phcolor" class="input_phone" name="phone" v-model="phone" data-input="input" @input="bindKeyInput"
		            placeholder="请输入账号" bindconfirm="input_confirm" />
		          <view class="after"></view>
		        </view>
		        <view class="row border-half solid-bottom">
		          <image class="icon" mode="aspectFit" src="../../static/images/password.png" />
		          <input placeholder-class="phcolor" name="password" :password="!pass_visible" v-model="password" @input="bindPasswordInput"
		            placeholder="请输入密码" />
		          <image v-if="pass_visible" class="icon eye" mode="aspectFit" @tap="changePasswordVisble" src="../../static/images/visible.png"/>
				  <image v-else class="icon eye" mode="aspectFit" @tap="changePasswordVisble" src="../../static/images/unvisible.png"/>
		          <view class="after"></view>
		        </view>
		      </view>
		      <view class="wrap_submit" v-if="(phone.length > 0 && vCode.length > 0) || (phone.length > 0 && password.length > 0)">
		        <!-- <zhl-button> -->
		          <button type="primary" class="btn_submit btn_color" @tap="formSubmit" formType="submit">注册</button>
		        <!-- </zhl-button> -->
		      </view>
		      <view class="wrap_submit" v-else>
		        <!-- <zhl-button> -->
		          <button class="btn_submit btn_color_no">注册</button>
		        <!-- </zhl-button> -->
		      </view>
		    <!-- </form> -->
		  </view>
		  <view class="text-gray text-center margin-top-xl" @tap="toLogin">有账户?去登录</view>
		</view>
	</view>
</template>

<script>
	import * as API from "../../api/login.js"
	export default {
		data() {
			return {
				// 是否发送class类型
				    isSendClass: '',
				    // 发送验证码按钮文本
				    btnText: '获取验证码',
				    // 手机号字段值
				    phone: '',
				    // 验证码字段值
				    vCode: '',
				    loginType: "APPLETS_DEMANDER",
				    loginTypeFlag: 2, // 1.默认账号登录 2.验证码登录
				    password: '',
					id: null,
					type: null,
				    pass_visible: false // 显示明文密码 true: 显示  false: 不显示
			};
		},
		onLoad(e) {
			// console.log(e.id)
			uni.setStorage({
			    key: 'id',
			    data: e.id,
			    success: function () {
			        // console.log('success');
			    }
			});
			uni.setStorage({
			    key: 'type',
			    data: e.type,
			    success: function () {
			        // console.log('success');
			    }
			});
			this.id = e.id
			this.type = e.type
			// let that = this
			// uni.getStorage({
			// 	key: 'id',
			// 	success:(res)=>{
			// 		console.log(res,444)
			// 		that.id = res.data || e.id
			// 	},
			// 	fail() {
			// 		that.id = e.id
			// 	}
			// });
			// uni.getStorage({
			// 	key: 'type',
			// 	success:(res)=>{
			// 		that.type = res.data || e.type
			// 		// console.log(11)
			// 	},
			// 	fail() {
			// 		that.type = e.type
			// 		// console.log(111)
			// 	}
			// });
			// let id = uni.getStorage('id');
			// let type = uni.getStorage('type');
			// this.id = id || e.id
			// this.type = type || e.type
			
			// console.log(this.id, 888)
			// uni.setStorage('id', this.id);
			// uni.setStorage('type', this.type);
			// console.log(uni.getStorage('id'), uni.getStorage('type'),777)
		},
		methods: {
			bindKeyInput: function (e) {
				this.phone = e.detail.value
			  },
			bindPasswordInput: function (e) {
				this.password = e.detail.value
			  },
			changePasswordVisble() {
				this.pass_visible = !this.pass_visible
			  },
			 formSubmit() {
			     //校验输入是否有效
			     uni.showLoading({ title: '正在注册...', mask: true})
			     console.log(this.phone, this.password)
			       if (!this.phone) {
			         // console.log(2222)
			         uni.showToast({ icon: 'none', title: '账号不能为空', duration: 1500 });
			         return false;
			       }
			       if (!this.password) {
			         uni.showToast({ icon: 'none', title: '密码不能为空', duration: 1500 });
			         return false;
			       }
			     this.loginByPassword();
			   },
			 loginByPassword() {
				 console.log(this.id, 888)
			     // console.log(this.password)
			     let body={
			       userName: this.phone,
			       password: this.password,
				   id: this.id,
				   type: this.type
			     }
			     API.register(body).then(res => {
			       uni.hideLoading();
			       uni.showToast({ icon: 'success', title: '注册成功', duration: 1000 });
			       // app.globalData.isAuth = true;
			       // app.globalData.NameAuth = this.phone;
			       // uni.setStorageSync('isAuth', true);
			       // uni.setStorageSync('NameAuth', this.phone);
				   setTimeout(()=>{
					  uni.switchTab({
					  	url: '/pages/user/user?id='+this.id+"&type="+this.type
					  })
				   },1000)
			       // redirect();
			     }, err => {
			       // uni.hideLoading();
			       // uni.showToast({ icon: 'none', title: err || '失败,请稍后再试' });
			     })
			   },
			   toLogin() {
				   uni.switchTab({
				   	url: '/pages/user/user?id='+this.id+"&type="+this.type
				   })
			   }
		}
	}
</script>

<style lang="less">
	/* pages/login/login.wxss */
	
	.loginWrap {
	  background-color: white;
	  height: 100vh;
	}
	
	.loginContainer {
	  padding: 75rpx 70rpx 42rpx;
	  height: 100%;
	  position: relative;
	  box-sizing: border-box;
	}
	
	.loginContainer .wrap_logo {
	  display: flex;
	  justify-content: center;
	  width: 100%;
	  margin-bottom: 70rpx;
	}
	
	.loginContainer .wrap_logo .logo {
	  width: 200rpx;
	  height: 200rpx;
	}
	
	.loginContainer .wrap_text {
	  text-align: center;
	  color: #323232;
	}
	
	.loginContainer .wrap_text .txt1 {
	  color: #323232;
	  display: block;
	  font-size: 28rpx;
	  text-align: center;
	}
	
	.txt2 {
	  width: 91rpx;
	  height: 34rpx;
	  border-radius: 8rpx;
	  border: solid 1rpx #313131;
	  font-size: 24rpx;
	  line-height: 34rpx;
	  color: #323232;
	  float: left;
	  margin-left: 25rpx
	}
	
	.loginContainer .wrap_form input,
	.loginContainer .wrap_form .pass_text {
	  height: 86rpx;
	  flex: 1 1;
	  padding: 0 15rpx;
	  font-size: 28rpx;
	  line-height: 86rpx;
	}
	
	.loginContainer .wrap_input .row {
	  display: flex;
	  /* border-bottom: 1px solid #D8D8D8; */
	  /* margin: 15rpx 0; */
	  justify-content: space-between;
	  align-items: center;
	}
	
	.loginContainer .wrap_input .row .icon {
	  width: 31rpx;
	  height: 32rpx;
	}
	
	.loginContainer .wrap_input .row .icon.eye {
	  float: right;
	}
	
	.loginContainer .wrap_input .row .btn_mobileCode {
	  flex: 0 0 200rpx;
	  margin-left: 10rpx;
	  line-height: 86rpx;
	  font-size: 32rpx;
	  background: transparent;
	  color: #008ee3;
	  text-align: right;
	}
	
	.loginContainer .wrap_input .row .btn_mobileCode.isSendClass {
	  color: #dddddd;
	}
	
	.loginContainer .wrap_submit {
	  margin-top: 45rpx;
	}
	
	.loginContainer .wrap_submit .btn_submit {
	  background-blend-mode: normal, normal;
	  width: 600rpx;
	  height: 86rpx;
	  line-height: 86rpx;
	  font-size: 32rpx;
	  padding: 0;
	  /* border-radius: 4rpx; */
	}
	
	.placeholder {
	  font-size: 32rpx;
	  color: #C2C2C2;
	}
	
	.loginContainer .wrap_submit .btn_submit::after {
	  border: none;
	}
	
	.loginContainer .wrap_submit .btn_color {
	  /* background: #008EE3; */
	  background-image: linear-gradient(90deg, #1bb5ee 0%, #008ee3 100%), linear-gradient(#000, #000);
	}
	
	.loginContainer .wrap_submit .btn_color_no {
	  background-image: linear-gradient(90deg, #d0d0d0 0%, #d0d0d0 100%), linear-gradient( #000000, #000000);
	  color: white;
	}
	
	.loginContainer .web-v {
	  margin-top: 24rpx;
	  height: 40rpx;
	  line-height: 40rpx;
	  color: #b9c1c6;
	  font-size: 30rpx;
	  text-align: center;
	}
	
	.loginContainer .web-s {
	  color: #008ee3;
	}
	
	.loginContainer .web-x {
	  margin-top: 24rpx;
	  height: 40rpx;
	  line-height: 40rpx;
	  color: #b9c1c6;
	  font-size: 28rpx;
	}
	
	.change-login {
	  margin-top: 35rpx;
	  font-size: 30rpx;
	  color: #008EE3;
	}
	
	.footer {
	  font-size: 24rpx;
	  position: absolute;
	  bottom: 30rpx;
	  text-align: center;
	  width: 100%;
	  left: 0;
	  right: 0;
	  color: #606060;
	}
	
	.agreement {
	  color: #008EE3;
	}
	
	.btn_color_register {
	  width: 224rpx;
	  font-size: 30rpx;
	  height: 86rpx;
	  line-height: 86rpx;
	  color: #008EE3;
	  border: 1px solid #008EE3;
	  background-color: #fff;
	}
</style>
