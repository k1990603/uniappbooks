(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-charge-charge"],{"1bd8":function(t,n,e){"use strict";var o=e("ee27");e("d3b7"),Object.defineProperty(n,"__esModule",{value:!0}),n.get=n.put=n.postJson=n.post=n.request=void 0;var i=e("e66a"),a=o(e("3dd7")),u=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{method:"POST",contentType:"form"},o={Accept:"application/json"};"POST"===e.method&&"form"===e.contentType&&(o["content-type"]="application/x-www-form-urlencoded");var u=a.default.getters["getToken"];return o["token"]=u||null,new Promise((function(u,s){wx.request({url:i.baseUrl+t,data:n,method:e.method||"POST",header:o,success:function(t){200!==t.data.code?-1===t.data.code?(a.default.dispatch("delToken",""),setTimeout((function(){uni.showToast({icon:"none",title:"未登录",duration:1500})}),200)):setTimeout((function(){uni.showToast({icon:"none",title:t.data.desc,duration:1500})}),500):(console.log(t,"2222"),u(t.data))},fail:function(t){return uni.stopPullDownRefresh(),setTimeout((function(){uni.showToast({icon:"none",title:"网络请求失败，请稍后再试",duration:1500})}),500),s("网络请求失败，请稍后再试")},complete:function(t){var n="",e=t&&t.statusCode;switch(e){case 400:n="错误请求",setTimeout((function(){uni.showToast({icon:"none",title:n,duration:1500})}),500);break;case 401:n="未授权，请重新登录",setTimeout((function(){uni.showToast({icon:"none",title:n,duration:1500})}),500);break;case 403:n="拒绝访问",setTimeout((function(){uni.showToast({icon:"none",title:n,duration:1500})}),500);break;case 404:n="请求错误,未找到该资源",setTimeout((function(){uni.showToast({icon:"none",title:n,duration:1500})}),500);break;case 405:n="请求方法未允许",setTimeout((function(){uni.showToast({icon:"none",title:n,duration:1500})}),500);break;case 408:n="请求超时",setTimeout((function(){uni.showToast({icon:"none",title:n,duration:1500})}),500);break;case 500:n="服务器端出错",setTimeout((function(){uni.showToast({icon:"none",title:n,duration:1500})}),500);break;case 501:n="网络未实现",setTimeout((function(){uni.showToast({icon:"none",title:n,duration:1500})}),500);break;case 502:n="网络错误",setTimeout((function(){uni.showToast({icon:"none",title:n,duration:1500})}),500);break;case 503:n="服务不可用",setTimeout((function(){uni.showToast({icon:"none",title:n,duration:1500})}),500);break;case 504:n="网络超时",setTimeout((function(){uni.showToast({icon:"none",title:n,duration:1500})}),500);break;case 505:n="http版本不支持该请求",setTimeout((function(){uni.showToast({icon:"none",title:n,duration:1500})}),500);break}uni.hideLoading()}})}))};n.request=u;var s=function(t,n){return u(t,n,{method:"POST",contentType:"form"})};n.post=s;var c=function(t,n){return u(t,n,{method:"POST",contentType:"json"})};n.postJson=c;var r=function(t,n){return u(t,n,{method:"put",contentType:"json"})};n.put=r;var d=function(t,n){return n||(n={}),n.timestamp=(new Date).getTime(),u(t,n,{method:"GET"})};n.get=d},2845:function(t,n,e){var o=e("24fb");n=o(!1),n.push([t.i,".charge[data-v-c532f338]{height:100vh;padding-top:%?120?%}.charge .chargeContent[data-v-c532f338]{position:relative;-webkit-transition:all .3s linear;transition:all .3s linear}.charge .chargeContent uni-image[data-v-c532f338]{position:absolute;top:0;right:0;width:%?100?%;height:%?90?%}",""]),t.exports=n},"366c":function(t,n,e){t.exports=e.p+"static/img/hot.5323d06f.svg"},5028:function(t,n,e){"use strict";var o=e("4a46");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=o(e("8d07")),a={data:function(){return{chargeList:[],checkValue:null}},mounted:function(){this.getchongBookCurrencyList()},methods:{checkAction:function(t){this.checkValue=t},chargeAction:function(){var t={amount:this.checkValue};this.checkValue>=365?i.chongVIP(t).then((function(t){uni.showToast({icon:"none",title:"购买成功",duration:1500}),setTimeout((function(){uni.switchTab({url:"/pages/user/user"})}),500)}),(function(t){})):i.chongBookCurrency(t).then((function(t){uni.showToast({icon:"none",title:"购买成功",duration:1500}),setTimeout((function(){uni.switchTab({url:"/pages/user/user"})}),500)}),(function(t){}))},getchongBookCurrencyList:function(){var t=this;i.chongBookCurrencyList().then((function(n){t.chargeList=n.data,t.chongVIPListAction()}),(function(t){}))},chongVIPListAction:function(){var t=this;i.chongVIPList().then((function(n){var e=n.data[0].vipYear;t.chargeList.push({rechargeNum:e,givingNum:"VIP包年",id:0})}),(function(t){}))}}};n.default=a},"60d4":function(t,n,e){"use strict";var o,i=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("v-uni-view",{staticClass:"charge bg-white"},[o("cu-custom",{attrs:{bgColor:"bg-gradual-pink",isBack:!0}},[o("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),o("template",{attrs:{slot:"content"},slot:"content"},[t._v("购买书币")])],2),o("v-uni-view",{staticClass:"padding bg-white"},[o("v-uni-view",{staticClass:"grid col-2 margin-bottom text-center text-gray"},t._l(t.chargeList,(function(n,i){return o("v-uni-view",{key:i,staticClass:"padding-sm"},[o("v-uni-view",{staticClass:"padding-sm radius shadow chargeContent",class:t.checkValue===n.rechargeNum?"light bg-orange lines-red":"lines-gray",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.checkAction(n.rechargeNum)}}},[o("v-uni-image",{attrs:{src:e("366c"),mode:""}}),o("v-uni-view",{staticClass:"text-lg text-black"},[t._v(t._s(n.rechargeNum||0)+"元")]),n.rechargeNum<365?o("v-uni-text",[t._v(t._s(100*n.rechargeNum)+t._s(n.givingNum?"+"+n.givingNum+"书币":""))]):o("v-uni-text",[t._v(t._s(n.givingNum))])],1)],1)})),1)],1),o("v-uni-view",{staticClass:"padding-bottom-xs bg-gray"}),o("v-uni-view",{staticClass:"padding bg-white flex flex-direction solid-bottom"},[o("v-uni-button",{staticClass:"cu-btn round bg-orange lg disabled",class:t.checkValue?"":"light",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.chargeAction.apply(void 0,arguments)}}},[t._v("立即充值")])],1),o("v-uni-view",{staticClass:"padding bg-white"},[o("v-uni-view",{staticClass:"margin"},[t._v("充值说明")]),o("v-uni-view",{staticClass:"margin"},[t._v("1、人民币/金币的汇率为：1元=100书币")]),o("v-uni-view",{staticClass:"margin"},[t._v("2、金币属于虚拟商品，一经购买概不退换。")]),o("v-uni-view",{staticClass:"margin"},[t._v("3、若充值遇到任何问题，可以联系我们的客服。")])],1)],1)},a=[];e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return o}))},"8d07":function(t,n,e){"use strict";var o=e("4a46");Object.defineProperty(n,"__esModule",{value:!0}),n.getCode=a,n.getPromote=u,n.personalCenter=s,n.uploadImg=c,n.quit=r,n.signIn=d,n.recharge=l,n.chongBookCurrencyList=g,n.chongBookCurrency=h,n.chongVIPList=f,n.chongVIP=v;var i=o(e("1bd8"));function a(){return i.get("/books/promote/yards")}function u(t){return i.get("/books/promote/page",t)}function s(t){return i.get("/books/user/personalCenter",t)}function c(t){return i.post("/books/user/upload",t)}function r(t){return i.get("/books/user/quit",t)}function d(t){return i.get("/books/user/signIn",t)}function l(t){return i.get("/books/account/recharge",t)}function g(t){return i.get("/books/user/chongBookCurrencyList",t)}function h(t){return i.get("/books/user/chongBookCurrency",t)}function f(t){return i.get("/books/user/chongVIPList",t)}function v(t){return i.get("/books/user/chongVIP",t)}},c6cd7:function(t,n,e){"use strict";e.r(n);var o=e("60d4"),i=e("f35f");for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);e("e1de");var u,s=e("f0c5"),c=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,"c532f338",null,!1,o["a"],u);n["default"]=c.exports},d5f5:function(t,n,e){var o=e("2845");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=e("4f06").default;i("61cb80fe",o,!0,{sourceMap:!1,shadowMode:!1})},e1de:function(t,n,e){"use strict";var o=e("d5f5"),i=e.n(o);i.a},e66a:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.baseUrl=void 0;var o="http://47.244.209.81";n.baseUrl=o},f35f:function(t,n,e){"use strict";e.r(n);var o=e("5028"),i=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);n["default"]=i.a}}]);