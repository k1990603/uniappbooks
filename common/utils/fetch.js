// 统一请求方法
import { apiRoot } from '@/api/url.js'
export default function fetch(url, params, method="POST"){
	 return new Promise((resolve, reject) => {
		uni.request({
			url: apiRoot+url,
			data: params,
			method,
			header: {
			 // 'custom-header': 'hello' //自定义请求头信息
			 // 'Token':getUserToken()
			},
			success: (res) => {
				// console.log(res);
				if(res && res.data){
					const { success, message, data} = res.data;
					if(success && data){
						resolve(data)
					}else{
						reject(message)
					}
				}
				// console.log(res.data);
				// this.text = 'request success';
			},
			fail: (rej) => {
				reject(rej)
			}
		 });
	 })
}
