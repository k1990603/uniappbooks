<template>
	<view class="loginWrap">
		<cu-custom bgColor="bg-gradual-pink" :isBack="false">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">
				登录
			</block>
		</cu-custom>
		<view class="loginContainer ">
		  <view class="wrap_logo">
		    <image class="logo" mode="aspectFit" src="/static/images/authlogo.png" />
		  </view>
		  <view class="wrap_form">
		    <!-- <form catchsubmit="formSubmit"> -->
		      <view class="wrap_input">
		        <view class="row border-half solid-bottom">
		          <image class="icon" mode="aspectFit" src="/static/images/account.png" />
		          <input placeholder-class="phcolor" class="input_phone" name="phone" v-model="phone" data-input="input" @input="bindKeyInput"
		            placeholder="请输入账号" bindconfirm="input_confirm" />
		          <view class="after"></view>
		        </view>
		        <view class="row border-half solid-bottom">
		          <image class="icon" mode="aspectFit" src="/static/images/password.png" />
		          <input placeholder-class="phcolor" name="password" :password="!pass_visible" v-model="password" @input="bindPasswordInput"
		            placeholder="请输入密码" />
		          <image v-if="pass_visible" class="icon eye" mode="aspectFit" @tap="changePasswordVisble" src="/static/images/visible.png"/>
				  <image v-else class="icon eye" mode="aspectFit" @tap="changePasswordVisble" src="/static/images/unvisible.png"/>
		          <view class="after"></view>
		        </view>
		      </view>
		      <view class="wrap_submit" v-if="(phone.length > 0 && vCode.length > 0) || (phone.length > 0 && password.length > 0)">
		        <!-- <zhl-button> -->
		          <button type="primary" class="btn_submit btn_color" @tap="formSubmit()" formType="submit">登录</button>
		        <!-- </zhl-button> -->
		      </view>
		      <view class="wrap_submit" v-else>
		        <!-- <zhl-button> -->
		          <button class="btn_submit btn_color_no" @tap="formSubmit">登录</button>
		        <!-- </zhl-button> -->
		      </view>
		    <!-- </form> -->
		  </view>
		  <view class="text-gray text-center margin-top-xl" @tap="toRegister">没有账户?去注册</view>
		</view>
	</view>
</template>

<script>
	import * as API from "../../../api/login.js"
	import { mapActions, mapGetters} from 'vuex' 
	export default {
		data() {
			return {
				// 是否发送class类型
				    isSendClass: '',
				    // 发送验证码按钮文本
				    // btnText: '获取验证码',
				    // 手机号字段值
				    phone: '',
				    // 验证码字段值
				    vCode: '',
				    loginType: "APPLETS_DEMANDER",
				    loginTypeFlag: 2, // 1.默认账号登录 2.验证码登录
				    password: '',
				    pass_visible: false // 显示明文密码 true: 显示  false: 不显示
			};
		},
		// props: {
		//     id: {
		//         type: String,
		//         default: null
		//     },
		// 	type: {
		// 		type: String,
		// 		default: null
		// 	}
		// },
		// computed:{
		// 	...mapGetters({
		// 		getToken: "getToken"
		// 	}),
		// },
		mounted() {
			// console.log(uni.getStorage('id'), uni.getStorage('type'),222)
			// console.log(this.getToken, 999)
			// if (this.getToken) {
			// 	uni.navigateTo({
			// 		url: '/pages/user/user'
			// 	})
			// }
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
			     uni.showLoading({ title: '正在登录...', mask: true})
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
			     // console.log(this.password)
			     let body={
			       userName: this.phone,
			       password: this.password
			     }
			     API.login(body).then(res => {
			       uni.hideLoading();
			       uni.showToast({ icon: 'success', title: '登录成功', duration: 1000 });
			       // app.globalData.isAuth = true;
			       // app.globalData.NameAuth = this.phone;
			       uni.setStorage('isAuth', true);
			       uni.setStorage('NameAuth', this.phone);
				   this.$store.dispatch("updateToken", res.data).then(() => {
					   // let id = uni.getStorage('id') || '';
					   // let type = uni.getStorage('type') || '';
					   // setTimeout(()=>{
						   // uni.switchTab({
						   // 	url: '/pages/user/user?id='+id+"&type="+type
						   // })
						   // let that = this
						   // uni.getStorage({
						   //     key: 'id',
						   //     success: function (res) {
						   // 						   let id = res.data
						   //         uni.getStorage({
						   //             key: 'type',
						   //             success: function (reg) {
						   // 								   let type = reg.data
						   //                 uni.navigateTo({
						   //                 	url: "/pages/register/register?id="+id+"&type="+type
						   //                 })
						   //             }
						   //         });
						   //     }
						   // });
					   // },1000)
						
				    });
			       // redirect();
			     }, err => {
			       // uni.hideLoading();
			       // uni.showToast({ icon: 'none', title: err || '失败,请稍后再试' });
			     })
			   },
			   toRegister() {
				   // uni.getStorageInfo({
				   //     success: function (res) {
						 //   console.log(res)
						 //   let id = res.id || null;
						 //   let type = res.type || null;
						 //   console.log(id, type, 9999)
						 //   // uni.navigateTo({
						 //   // 	url: "/pages/register/register?id="+id+"&type="+type
						 //   // })
				   //     }
				   // });
				   let that = this
				   uni.getStorage({
				       key: 'id',
				       success: function (res) {
						   console.log(111)
						   let id = res.data
				           uni.getStorage({
				               key: 'type',
				               success: function (reg) {
								   let type = reg.data
				                   uni.navigateTo({
				                   	url: "/pages/register/register?id="+id+"&type="+type
				                   })
				               }
				           });
				       },
					   fail() {
						uni.navigateTo({
							url: "/pages/register/register"
						})
					   }
				   });
				   // let id = uni.getStorageSync('storage_key') || null;
				   // let type = uni.getStorageSync('storage_key') || null;
				   // uni.navigateTo({
				   // 	url: "/pages/register/register?id="+id+"&type="+type
				   // })
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
	  padding: 6rpx 15rpx;
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
