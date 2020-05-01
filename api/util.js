// import { clearLoginStatus } from '../utils/auth';
import { baseUrl } from '../config';
import store from './../store'
// const app = getApp()


// if (access_) {
//   axios.defaults.headers['Authorization'] = access_
// } else {
//   axios.defaults.headers['Authorization'] = ''
// }

// axios.defaults.timeout = 60000;

const request = (url, data, option = { method: 'POST', contentType: 'form' }) => {
  let headers = { 'Accept': 'application/json' };
  if (option.method === 'POST' && option.contentType === 'form') {
    headers['content-type'] = 'application/x-www-form-urlencoded';
  }
  // const token = wx.getStorageSync('token');
  // const token = app.globalData.authorizationCode;
  let token = store.getters['getToken']
  // let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhdXRoMCIsImV4cCI6MTU4NzcwNDYwNCwidXNlcm5hbWUiOiJqaWFvMTIzIn0.Zx3OR0zy4cdqNJVHUbqt4IxDK9xhRwWONRmNT1fwRyo'
  if (token) {
    headers['token'] = token;
  } else {
	  headers['token'] = null;
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + url,
      data: data,
      method: option.method || 'POST',
      header: headers,
      success: function (res) {
		  // console.log(res, 'res', res.data.code , res.data.desc)
        if (res.data.code !== 200) {
			if(res.data.code === -1){
				store.dispatch("delToken", '')
				setTimeout(()=>{
					uni.showToast({ icon: 'none', title: '未登录', duration: 1500 });
				},200)
				}else{
					setTimeout(()=>{
						uni.showToast({ icon: 'none', title: res.data.desc, duration: 1500 });
					},500)
				}
			// return reject(res.data.desc);
		} else {
			console.log(res, '2222')
			resolve(res.data);
		}
        
        // if (!res.data || !res.data.head) {
        //   return reject('发生未知错误，请稍后再试');
        // }
        // let data = res.data;
        // if (data.head.status == 1) {
        //   resolve(data.body);
        // } else if (data.head.errorCode === '999') {
        //   //退出登录 清除用户数据
        //   clearLoginStatus();
        //   // console.log('9999', url)
        //   wx.reLaunch({ url: '/pages/login/login' });
        // } else {
        //   reject(data.head.errorMsg);
        // }
      },
      fail: function (e) {
		uni.stopPullDownRefresh();
		setTimeout(()=>{
			uni.showToast({ icon: 'none', title: '网络请求失败，请稍后再试', duration: 1500 });
		},500)
        return reject('网络请求失败，请稍后再试');
      },
      complete: function (res) {
		let msg = '';
		    let status = res && res.statusCode;
		    switch (status) {
		      case 400:
		        msg = '错误请求';
				setTimeout(()=>{
					uni.showToast({ icon: 'none', title: msg, duration: 1500 });
				},500)
		        break;
		      case 401:
		        msg = '未授权，请重新登录';
				setTimeout(()=>{
					uni.showToast({ icon: 'none', title: msg, duration: 1500 });
				},500)
		        break;
		      case 403:
		        msg = '拒绝访问';
				setTimeout(()=>{
					uni.showToast({ icon: 'none', title: msg, duration: 1500 });
				},500)
		        break;
		      case 404:
		        msg = '请求错误,未找到该资源';
				setTimeout(()=>{
					uni.showToast({ icon: 'none', title: msg, duration: 1500 });
				},500)
		        break;
		      case 405:
		        msg = '请求方法未允许';
				setTimeout(()=>{
					uni.showToast({ icon: 'none', title: msg, duration: 1500 });
				},500)
		        break;
		      case 408:
		        msg = '请求超时';
				setTimeout(()=>{
					uni.showToast({ icon: 'none', title: msg, duration: 1500 });
				},500)
		        break;
		      case 500:
		        msg = '服务器端出错';
				setTimeout(()=>{
					uni.showToast({ icon: 'none', title: msg, duration: 1500 });
				},500)
		        break;
		      case 501:
		        msg = '网络未实现';
				setTimeout(()=>{
					uni.showToast({ icon: 'none', title: msg, duration: 1500 });
				},500)
		        break;
		      case 502:
		        msg = '网络错误';
				setTimeout(()=>{
					uni.showToast({ icon: 'none', title: msg, duration: 1500 });
				},500)
		        break;
		      case 503:
		        msg = '服务不可用';
				setTimeout(()=>{
					uni.showToast({ icon: 'none', title: msg, duration: 1500 });
				},500)
		        break;
		      case 504:
		        msg = '网络超时';
				setTimeout(()=>{
					uni.showToast({ icon: 'none', title: msg, duration: 1500 });
				},500)
		        break;
		      case 505:
		        msg = 'http版本不支持该请求';
				setTimeout(()=>{
					uni.showToast({ icon: 'none', title: msg, duration: 1500 });
				},500)
		        break;
		      // default:
		      //   msg = `连接错误${status || ''}`;
		    }
		uni.hideLoading();
      }
    });
  });
};

const post = (url, data) => {
  return request(url, data, {
    method: 'POST',
    contentType: 'form'
  });
};

const postJson = (url, data) => {
  return request(url, data, {
    method: 'POST',
    contentType: 'json'
  });
};

const put = (url, data) => {
  return request(url, data, {
    method: 'put',
    contentType: 'json'
  });
};

const get = (url, data) => {
  if (!data) { data = {}; }
  data.timestamp = new Date().getTime();
  return request(url, data, { method: 'GET' });
};

export {
  request,
  post,
  postJson,
  put,
  get
}