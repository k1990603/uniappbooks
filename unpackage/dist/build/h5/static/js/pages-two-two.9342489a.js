(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-two-two"],{"0067":function(t,e,i){"use strict";i.r(e);var n=i("5364"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"0634":function(t,e,i){"use strict";var n=i("ee27"),a=i("4a46");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(i("bd98")),r=n(i("86b5")),s={name:"book",components:{booksList:r.default},data:function(){return{cardCur:0,dotStyle:!0,swiperList:[{id:5899,type:"image",coverPic:"/static/images/p1.png"},{id:6888,type:"image",coverPic:"/static/images/p2.png"},{id:7248,type:"image",coverPic:"/static/images/p3.png"},{id:7247,type:"image",coverPic:"/static/images/p4.png"},{id:7245,type:"image",coverPic:"/static/images/p5.png"},{id:7244,type:"image",coverPic:"/static/images/p6.png"}],avatar:[{value:"similar",label:"分类",color:"orange",url:"/pages/two/book/classification/classification"},{value:"pay",label:"储值",color:"red",url:"/pages/user/charge/charge"},{value:"rank",label:"排行",color:"pink",url:"/pages/two/book/bookRanking/bookRanking"}],floors:[]}},props:{showClass:{type:String,default:""},fresh:{type:Boolean,default:!1}},methods:{DotStyle:function(t){this.dotStyle=t.detail.value},cardSwiper:function(t){this.cardCur=t.detail.current},getbookPageList:function(){var t=this;uni.showLoading({mask:!0}),o.getbookPage().then((function(e){t.floors=e.data,console.log(t.swiperList,999),uni.stopPullDownRefresh(),uni.hideLoading(),t.$emit("freshChange")}),(function(t){}))}},watch:{showClass:function(t){"zeroMove"===t&&this.getbookPageList()},fresh:function(t){t&&"zeroMove"===this.showClass&&this.getbookPageList()}},onReady:function(){},onShow:function(){},mounted:function(){this.getbookPageList()}};e.default=s},"11d1":function(t,e,i){var n=i("2415");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("f2e27e18",n,!0,{sourceMap:!1,shadowMode:!1})},1431:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.s-switch-container[data-v-f522ce68]{margin:0 auto;padding:%?2?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:%?60?%;border-radius:%?100?%;background-color:#fff}.s-switch-item[data-v-f522ce68]{color:#ec008c;padding:0 %?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-transition:all .3s linear;transition:all .3s linear}.s-switch-selected[data-v-f522ce68]{color:#fff;border-radius:%?40?%;background:#ec008c}',""]),t.exports=e},"17e4":function(t,e,i){var n=i("cd0c");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("41a0c0cb",n,!0,{sourceMap:!1,shadowMode:!1})},"1bd8":function(t,e,i){"use strict";var n=i("ee27");i("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.get=e.put=e.postJson=e.post=e.request=void 0;var a=i("e66a"),o=n(i("3dd7")),r=function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{method:"POST",contentType:"form"},n={Accept:"application/json"};"POST"===i.method&&"form"===i.contentType&&(n["content-type"]="application/x-www-form-urlencoded");var r=o.default.getters["getToken"];return n["token"]=r||null,new Promise((function(r,s){wx.request({url:a.baseUrl+t,data:e,method:i.method||"POST",header:n,success:function(t){200!==t.data.code?-1===t.data.code?(o.default.dispatch("delToken",""),setTimeout((function(){uni.showToast({icon:"none",title:"未登录",duration:1500})}),200),r(t.data)):setTimeout((function(){uni.showToast({icon:"none",title:t.data.desc,duration:1500})}),500):r(t.data)},fail:function(t){return uni.stopPullDownRefresh(),setTimeout((function(){uni.showToast({icon:"none",title:"网络请求失败，请稍后再试",duration:1500})}),500),s("网络请求失败，请稍后再试")},complete:function(t){var e="",i=t&&t.statusCode;switch(i){case 400:e="错误请求",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 401:e="未授权，请重新登录",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 403:e="拒绝访问",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 404:e="请求错误,未找到该资源",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 405:e="请求方法未允许",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 408:e="请求超时",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 500:e="服务器端出错",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 501:e="网络未实现",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 502:e="网络错误",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 503:e="服务不可用",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 504:e="网络超时",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 505:e="http版本不支持该请求",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break}uni.hideLoading()}})}))};e.request=r;var s=function(t,e){return r(t,e,{method:"POST",contentType:"form"})};e.post=s;var c=function(t,e){return r(t,e,{method:"POST",contentType:"json"})};e.postJson=c;var u=function(t,e){return r(t,e,{method:"put",contentType:"json"})};e.put=u;var l=function(t,e){return e||(e={}),e.timestamp=(new Date).getTime(),r(t,e,{method:"GET"})};e.get=l},"1d20":function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"comic"},[i("v-uni-swiper",{staticClass:"card-swiper",class:t.dotStyle?"square-dot":"round-dot",attrs:{"indicator-dots":!1,circular:!0,autoplay:!0,interval:"5000",duration:"500","indicator-color":"#8799a3","indicator-active-color":"#0081ff"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.cardSwiper.apply(void 0,arguments)}}},t._l(t.swiperList,(function(e,n){return i("v-uni-swiper-item",{key:n,class:t.cardCur==n?"cur":""},[i("v-uni-navigator",{staticClass:"swiper-item",attrs:{url:"/pages/two/comic/comicDetail/comicDetail?comicId="+e.id}},[i("v-uni-image",{attrs:{src:e.coverPic,mode:"aspectFill"}})],1)],1)})),1),i("v-uni-view",{staticClass:"kindWrap grid col-3 text-center bg-white radius"},t._l(t.avatar,(function(e,n){return i("v-uni-view",{key:n},[i("v-uni-navigator",{attrs:{url:e.url,"hover-class":"navigator-hover"}},[i("v-uni-view",{staticClass:"kindItem shadow-blur",class:"bg-gradual-"+e.color},[i("v-uni-text",{staticClass:"text-white",class:"cuIcon-"+e.value})],1),i("v-uni-text",[t._v(t._s(e.label))])],1)],1)})),1),i("comicList",{attrs:{floors:t.floors}})],1)},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))},"21c5":function(t,e,i){"use strict";i.r(e);var n=i("f984"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"23e3":function(t,e,i){var n=i("2f1d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("8653bbb8",n,!0,{sourceMap:!1,shadowMode:!1})},2415:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".music[data-v-7ed21a10]{width:100%;min-height:100vh;background-color:#007aff}",""]),t.exports=e},"282f":function(t,e,i){"use strict";i.r(e);var n=i("42d3"),a=i("6982");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("3129");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"244ec380",null,!1,n["a"],r);e["default"]=c.exports},"28df":function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"music"},[i("v-uni-text",[t._v("music")])],1)},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))},"2f1d":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.s-switch-container[data-v-88fcaeda]{margin:0 auto;padding:%?2?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:%?60?%;border-radius:%?100?%;background-color:#fff}.s-switch-item[data-v-88fcaeda]{color:#ec008c;padding:0 %?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-transition:all .3s linear;transition:all .3s linear}.s-switch-selected[data-v-88fcaeda]{color:#fff;border-radius:%?40?%;background:#ec008c}',""]),t.exports=e},3129:function(t,e,i){"use strict";var n=i("a337"),a=i.n(n);a.a},3387:function(t,e,i){"use strict";var n=i("17e4"),a=i.n(n);a.a},"3ad8":function(t,e,i){"use strict";i.r(e);var n=i("6778"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"42d3":function(t,e,i){"use strict";var n={loayImg:i("ff82").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",t._l(t.floors,(function(e,n){return i("v-uni-view",{key:n,staticClass:"solid-bottom",staticStyle:{"box-shadow":"0px 3px 10px rgba(26, 26, 26, 0.2)"}},[n%2!=1?i("v-uni-view",{staticClass:"cu-bar bg-white margin-top"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"cuIcon-titles text-orange "}),i("v-uni-text",{staticClass:"text-black text-bold"},[t._v(t._s(e.title))])],1),i("v-uni-view",{staticClass:"action text-orange",attrs:{"data-url":"/pages/two/comic/comicType/comicType","data-id":e.title},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toNavigate.apply(void 0,arguments)}}},[i("v-uni-text",[t._v("更多")]),i("v-uni-text",{staticClass:"lg cuIcon-right"})],1)],1):t._e(),t._l(e.content,(function(e,a){return n%2!=1?i("v-uni-navigator",{key:a,staticClass:"cu-card article no-card",attrs:{url:"/pages/two/comic/comicDetail/comicDetail?comicId="+e.id,"hover-class":"navigator-hover"}},[i("v-uni-view",{staticClass:"cu-item shadow"},[i("v-uni-view",{staticClass:"content"},[i("loayImg",{attrs:{imgUrl:e.coverPic}}),i("v-uni-view",{staticClass:"desc"},[i("v-uni-view",{staticClass:"text-content"},[i("v-uni-view",{staticClass:"text-black text-bold"},[t._v(t._s(e.title))]),i("v-uni-text",[t._v(t._s(e.summary))])],1),i("v-uni-view",[a%2!==1?i("v-uni-view",{staticClass:"cu-tag bg-gradual-red light sm round"},[t._v(t._s(e.category.slice(0,-1)))]):t._e(),a%2===1?i("v-uni-view",{staticClass:"cu-tag bg-gradual-orange light sm round"},[t._v(t._s(e.category.slice(0,-1)))]):t._e()],1)],1)],1)],1)],1):t._e()})),n%2===1?i("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"cuIcon-titles text-orange "}),i("v-uni-text",{staticClass:"text-black text-bold"},[t._v(t._s(e.title))])],1),i("v-uni-view",{staticClass:"action text-orange",attrs:{"data-url":"/pages/two/comic/comicType/comicType","data-id":e.title},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toNavigate.apply(void 0,arguments)}}},[i("v-uni-text",[t._v("更多")]),i("v-uni-text",{staticClass:"lg cuIcon-right"})],1)],1):t._e(),n%2===1?i("v-uni-view",{staticClass:"cu-card dynamic grid col-2 bg-white no-card"},t._l(e.content,(function(e,n){return i("v-uni-view",{key:n,staticClass:"cu-item shadow"},[i("v-uni-navigator",{attrs:{url:"/pages/two/comic/comicDetail/comicDetail?comicId="+e.id}},[i("v-uni-view",{staticClass:"grid flex-sub padding-lr col-1 grid-square"},[i("v-uni-view",{staticClass:"bg-img"},[i("loayImg",{attrs:{imgUrl:e.coverPic}})],1)],1),i("v-uni-view",{staticClass:"text-content"},[i("v-uni-view",{staticClass:"text-black text-bold",staticStyle:{marginTop:"20rpx"}},[t._v(t._s(e.title))]),i("v-uni-view",{staticClass:"text-cut text-gray",staticStyle:{width:"320rpx",fontSize:"20rpx"}},[t._v(t._s(e.summary))])],1)],1)],1)})),1):t._e()],2)})),1)},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))},"456a":function(t,e,i){"use strict";var n=i("ee27");i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("54f8")),o={name:"SSwitch",props:{defaultValue:{type:Number,default:0},switchList:{type:Array,default:[]}},data:function(){return{switchArr:[]}},methods:{selectItem:function(t){if(!1===t.selected){var e,i=(0,a.default)(this.switchArr);try{for(i.s();!(e=i.n()).done;){var n=e.value;t.key===n.key?(n.selected=!0,this.$emit("switchValue",n)):n.selected=!1}}catch(o){i.e(o)}finally{i.f()}}}},created:function(){for(var t=this.switchList.length,e=0;e<t;e++){var i={key:this.switchList[e].key,value:this.switchList[e].value,selected:this.defaultValue===this.switchList[e].key};this.switchList[e].key===this.defaultValue&&this.$emit("switchValue",i),this.switchArr.push(i)}}};e.default=o},"4a21":function(t,e,i){"use strict";var n=i("e92e"),a=i.n(n);a.a},"4a60":function(t,e,i){"use strict";i.r(e);var n=i("a599"),a=i("95ba");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("3387");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"7feb0219",null,!1,n["a"],r);e["default"]=c.exports},"4bde":function(t,e,i){"use strict";i.r(e);var n=i("456a"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"4c0d":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".cu-card.dynamic > .cu-item[data-v-244ec380]{box-sizing:border-box;display:inline-block;margin-left:0;margin-right:0}.cu-card.dynamic > .cu-item .text-content[data-v-244ec380]{padding:0 %?30?%}",""]),t.exports=e},5178:function(t,e,i){"use strict";var n=i("23e3"),a=i.n(n);a.a},5364:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{}}};e.default=n},"543a":function(t,e,i){"use strict";var n=i("11d1"),a=i.n(n);a.a},"54f8":function(t,e,i){"use strict";i.r(e),i.d(e,"default",(function(){return a}));i("a4d3"),i("e01a"),i("d28b"),i("e260"),i("d3b7"),i("3ca3"),i("ddb0");var n=i("dde1");function a(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=Object(n["a"])(t))){var e=0,i=function(){};return{s:i,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o,r=!0,s=!1;return{s:function(){a=t[Symbol.iterator]()},n:function(){var t=a.next();return r=t.done,t},e:function(t){s=!0,o=t},f:function(){try{r||null==a["return"]||a["return"]()}finally{if(s)throw o}}}}},"5dfe":function(t,e,i){"use strict";var n=i("d6ee"),a=i.n(n);a.a},"66bc":function(t,e,i){"use strict";i.r(e);var n=i("1d20"),a=i("ffb1");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("9b69");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"e70bb016",null,!1,n["a"],r);e["default"]=c.exports},6778:function(t,e,i){"use strict";var n=i("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("ff82")),o={name:"bookList",components:{loayImg:a.default},data:function(){return{avatar:[{value:"similar",label:"分类",color:"orange",url:"/pages/two/book/classification/classification"},{value:"rank",label:"排行",color:"green",url:"/pages/two/book/classification/classification"},{value:"selection",label:"VIP",color:"blue",url:"/pages/two/book/classification/classification"}]}},props:{floors:{type:Array,default:[]}},methods:{toNavigate:function(t){var e=t.currentTarget.dataset.url,i=t.currentTarget.dataset.category;uni.navigateTo({url:e+"?category="+i})}},created:function(){}};e.default=o},6982:function(t,e,i){"use strict";i.r(e);var n=i("ebac"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"6fbc":function(t,e,i){"use strict";i.r(e);var n=i("9fd8"),a=i("b560");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("5dfe");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"02b6b250",null,!1,n["a"],r);e["default"]=c.exports},"86b5":function(t,e,i){"use strict";i.r(e);var n=i("e750"),a=i("3ad8");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("4a21");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"4db341d7",null,!1,n["a"],r);e["default"]=c.exports},"8ba3":function(t,e,i){"use strict";var n=i("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;n(i("e143"));var a=n(i("9f90")),o=n(i("4a60")),r=n(i("66bc")),s=n(i("8da0")),c={components:{SSwitch:a.default,BBook:o.default,CComic:r.default,MMusic:s.default},data:function(){return{CustomBar:this.CustomBar,showClass:"",fresh:!1,arr:[{key:0,value:"小说"},{key:1,value:"漫画"}]}},onLoad:function(){},onPullDownRefresh:function(){this.fresh=!0},onShow:function(){this.fresh=!0},methods:{freshChange:function(){this.fresh=!1},getSwitchValue:function(t){var e=t.key;this.showClass=e?1===e?"oneMove":"twoMove":"zeroMove"},toSearch:function(){"zeroMove"===this.showClass?uni.navigateTo({url:"/pages/two/book/book_mall/index"}):"oneMove"===this.showClass&&uni.navigateTo({url:"/pages/two/comic/comic_mall/index"})}}};e.default=c},"8da0":function(t,e,i){"use strict";i.r(e);var n=i("28df"),a=i("0067");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("543a");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"7ed21a10",null,!1,n["a"],r);e["default"]=c.exports},"8dee":function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-image",{attrs:{src:t.url,mode:t.fill}})},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))},"90f1":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".comic[data-v-e70bb016]{width:100%;min-height:100vh}.comic .cu-bar[data-v-e70bb016]{margin-top:%?60?%}.comic .kindWrap[data-v-e70bb016]{padding:%?20?% 0 %?30?%;box-shadow:0 3px 10px rgba(26,26,26,.2)}.comic .kindWrap .kindItem[data-v-e70bb016]{margin:0 auto %?10?%;text-align:center;width:%?100?%;height:%?100?%;border-radius:50%;font-size:%?50?%;padding-top:%?12?%;box-shadow:0 6px 9px 1px rgba(0,0,0,.3)}.comic .kindWrap .kindItem .text-white[data-v-e70bb016]{font-size:%?70?%}",""]),t.exports=e},"95ba":function(t,e,i){"use strict";i.r(e);var n=i("0634"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"96c2":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".twoWrap[data-v-02b6b250]{overflow:hidden;width:100%}.twoWrap .contents[data-v-02b6b250]{width:300%;\n\t/* background-color: #007AFF; */\n\t/* min-height: 100vh; */-webkit-transition:all .3s linear;transition:all .3s linear\n\t/* display: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center; */}.oneMove[data-v-02b6b250]{-webkit-transform:translateX(-100vw);transform:translateX(-100vw)}.twoMove[data-v-02b6b250]{-webkit-transform:translateX(-200vw);transform:translateX(-200vw)}.logo[data-v-02b6b250]{height:%?200?%;width:%?200?%;margin-top:%?200?%;margin-left:auto;margin-right:auto;margin-bottom:%?50?%}.text-area[data-v-02b6b250]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.title[data-v-02b6b250]{font-size:%?36?%;color:#8f8f94}",""]),t.exports=e},"9b69":function(t,e,i){"use strict";var n=i("a99f"),a=i.n(n);a.a},"9f90":function(t,e,i){"use strict";i.r(e);var n=i("c709"),a=i("4bde");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("f543");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"f522ce68",null,!1,n["a"],r);e["default"]=c.exports},"9fd8":function(t,e,i){"use strict";var n={"s-switch":i("9f90").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"twoWrap"},[i("cu-custom",{attrs:{bgColor:"bg-gradual-pink",matgintop:!0,bottomColor:t.showClass,headerStatus:!0,isBack:!1}},[i("template",{attrs:{slot:"content"},slot:"content"},[i("s-switch",{attrs:{defaultValue:0,switchList:t.arr},on:{switchValue:function(e){arguments[0]=e=t.$handleEvent(e),t.getSwitchValue.apply(void 0,arguments)}}})],1),i("template",{attrs:{slot:"right"},slot:"right"},[i("v-uni-text",{staticClass:"lg text-pink"}),i("v-uni-text",{staticClass:"lg cuIcon-searchlist",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toSearch.apply(void 0,arguments)}}})],1)],2),i("v-uni-view",{staticClass:"contents grid col-3",class:t.showClass},[i("B-book",{attrs:{fresh:t.fresh,showClass:t.showClass},on:{freshChange:function(e){arguments[0]=e=t.$handleEvent(e),t.freshChange.apply(void 0,arguments)}}}),i("C-comic",{attrs:{fresh:t.fresh,showClass:t.showClass},on:{freshChange:function(e){arguments[0]=e=t.$handleEvent(e),t.freshChange.apply(void 0,arguments)}}}),i("M-music")],1)],1)},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))},a337:function(t,e,i){var n=i("4c0d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("25b85a78",n,!0,{sourceMap:!1,shadowMode:!1})},a599:function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"book"},[i("v-uni-swiper",{staticClass:"screen-swiper",class:t.dotStyle?"square-dot":"round-dot",attrs:{"indicator-dots":!0,circular:!0,autoplay:!0,interval:"5000",duration:"500"}},t._l(t.swiperList,(function(e,n){return i("v-uni-swiper-item",{key:n,class:t.cardCur==n?"cur":""},[i("v-uni-navigator",{staticClass:"banner",attrs:{url:"/pages/two/book/bookDetail/bookDetail?bookId="+e.id}},[i("v-uni-image",{attrs:{src:e.coverPic,mode:"aspectFill"}})],1)],1)})),1),i("v-uni-view",{staticClass:"kindWrap grid col-3 text-center bg-white radius"},t._l(t.avatar,(function(e,n){return i("v-uni-view",{key:n},[i("v-uni-navigator",{attrs:{url:e.url,"hover-class":"navigator-hover"}},[i("v-uni-view",{staticClass:"kindItem shadow-blur",class:"bg-gradual-"+e.color},[i("v-uni-text",{staticClass:"lg text-white",class:"cuIcon-"+e.value})],1),i("v-uni-text",{staticClass:"text-black"},[t._v(t._s(e.label))])],1)],1)})),1),i("booksList",{attrs:{floors:t.floors}})],1)},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))},a99f:function(t,e,i){var n=i("90f1");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("cebbc6ec",n,!0,{sourceMap:!1,shadowMode:!1})},b53f:function(t,e,i){"use strict";var n=i("4a46");Object.defineProperty(e,"__esModule",{value:!0}),e.getComicHome=o,e.getComicStyle=r,e.getComicDetail=s,e.getSendPage=c,e.getCommentPage=u,e.episodesContent=l,e.closedComic=d,e.likeComic=f,e.comictype=v,e.comment=b,e.ranking=g,e.exceptionalComic=p;var a=n(i("1bd8"));function o(){return a.get("/books/comic/homePage")}function r(t){return a.get("/books/comic/page",t)}function s(t){return a.get("/books/comic/details",t)}function c(t){return a.get("/books/comic/sendPage",t)}function u(t){return a.get("/books/comic/commentPage",t)}function l(t){return a.get("/books/comic/getComicPicture",t)}function d(t){return a.get("/books/comic/closedComic",t)}function f(t){return a.get("/books/comic/likeComic",t)}function v(t){return a.get("/books/comic/comictype",t)}function b(t){return a.get("/books/comic/comment",t)}function g(t){return a.get("/books/comic/ranking",t)}function p(t){return a.get("/books/comic/exceptionalComic",t)}},b560:function(t,e,i){"use strict";i.r(e);var n=i("8ba3"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},b6802:function(t,e,i){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}i.d(e,"a",(function(){return n}))},bd98:function(t,e,i){"use strict";var n=i("4a46");Object.defineProperty(e,"__esModule",{value:!0}),e.getbookPage=o,e.getbookDetail=r,e.getbookType=s,e.categoryPageList=c,e.getBookStyle=u,e.episodesContent=l,e.getCommentPage=d,e.getSendPage=f,e.categoryList=v,e.bookCollect=b,e.bookLike=g,e.comment=p,e.ranking=h,e.userSend=m;var a=n(i("1bd8"));function o(){return a.get("/books/book/homePage")}function r(t){return a.get("/books/book/details",t)}function s(t){return a.get("/books/book/homePageList",t)}function c(t){return a.get("/books/book/categoryPageList",t)}function u(t){return a.get("/books/book/page",t)}function l(t){return a.get("/books/book/episodesContent",t)}function d(t){return a.get("/books/book/commentList",t)}function f(t){return a.get("/books/book/userSendList",t)}function v(t){return a.get("/books/book/categoryList",t)}function b(t){return a.get("/books/book/bookCollect",t)}function g(t){return a.get("/books/book/bookLike",t)}function p(t){return a.get("/books/book/comment",t)}function h(t){return a.get("/books/book/ranking",t)}function m(t){return a.post("/books/book/userSend",t)}},c709:function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"s-switch-container"},t._l(t.switchArr,(function(e){return i("v-uni-view",{key:e.key,staticClass:"s-switch-item",class:{"s-switch-selected":e.selected},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.selectItem(e)}}},[t._v(t._s(e.value))])})),1)},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))},cd0c:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".book[data-v-7feb0219]{width:100%;min-height:100vh}.book .banner[data-v-7feb0219]{height:100%}.book .kindWrap[data-v-7feb0219]{padding:%?20?% 0 %?30?%;box-shadow:0 3px 10px rgba(26,26,26,.2)}.book .kindWrap .kindItem[data-v-7feb0219]{margin:0 auto %?10?%;text-align:center;width:%?100?%;height:%?100?%;border-radius:50%;font-size:%?50?%;padding-top:%?12?%;box-shadow:0 6px 9px 1px rgba(0,0,0,.3)}.book .kindWrap .kindItem .text-white[data-v-7feb0219]{font-size:%?70?%}.book .floor1[data-v-7feb0219]{background-color:#fff}.book .floor1 .content[data-v-7feb0219]{padding-bottom:%?40?%}.book .floor1 .content uni-image[data-v-7feb0219]{width:%?200?%;height:10.4em}",""]),t.exports=e},d6ee:function(t,e,i){var n=i("96c2");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("0904b277",n,!0,{sourceMap:!1,shadowMode:!1})},d951:function(t,e,i){var n=i("1431");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("5b346a9f",n,!0,{sourceMap:!1,shadowMode:!1})},dde1:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));i("a630"),i("fb6a"),i("d3b7"),i("25f0"),i("3ca3");var n=i("b6802");function a(t,e){if(t){if("string"===typeof t)return Object(n["a"])(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(i):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?Object(n["a"])(t,e):void 0}}},e189:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".cu-card.dynamic > .cu-item[data-v-4db341d7]{box-sizing:border-box;display:inline-block;margin-left:0;margin-right:0}.cu-card.dynamic > .cu-item .text-content[data-v-4db341d7]{padding:0 %?30?%}",""]),t.exports=e},e66a:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.baseUrl=void 0;var n="http://47.244.209.81";e.baseUrl=n},e750:function(t,e,i){"use strict";var n={loayImg:i("ff82").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",t._l(t.floors,(function(e,n){return i("v-uni-view",{key:n,staticClass:"bg-white radius",staticStyle:{"box-shadow":"0px 3px 10px rgba(26, 26, 26, 0.2)"}},[n%2!=1?i("v-uni-view",{staticClass:"cu-bar bg-white margin-top"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"cuIcon-titles text-orange "}),i("v-uni-text",{staticClass:"text-black text-bold"},[t._v(t._s(e.title))])],1),i("v-uni-view",{staticClass:"action text-orange",attrs:{"data-url":"/pages/two/book/bookType/bookType","data-category":e.title},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toNavigate.apply(void 0,arguments)}}},[i("v-uni-text",[t._v("更多")]),i("v-uni-text",{staticClass:"lg cuIcon-right"})],1)],1):t._e(),t._l(e.list,(function(e,a){return n%2!=1?i("v-uni-navigator",{key:a,staticClass:"cu-card article no-card",attrs:{url:"/pages/two/book/bookDetail/bookDetail?bookId="+e.id,"hover-class":"navigator-hover"}},[i("v-uni-view",{staticClass:"cu-item shadow"},[i("v-uni-view",{staticClass:"content"},[i("loayImg",{staticStyle:{width:"140rpx"},attrs:{imgUrl:e.coverPic,fill:"aspectFit"}}),i("v-uni-view",{staticClass:"desc"},[i("v-uni-view",{staticClass:"text-content"},[i("v-uni-view",{staticClass:"text-cut text-black text-bold"},[t._v(t._s(e.title))]),i("v-uni-view",{staticClass:"text-cut-two"},[t._v(t._s(e.summary))])],1),i("v-uni-view",[i("v-uni-view",{staticClass:"cu-tag bg-gradual-orange light sm round"},[t._v(t._s(e.author))])],1)],1)],1)],1)],1):t._e()})),n%2===1?i("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"cuIcon-titles text-orange "}),i("v-uni-text",{staticClass:"text-black text-bold"},[t._v(t._s(e.title))])],1),i("v-uni-view",{staticClass:"action text-orange",attrs:{"data-url":"/pages/two/book/bookType/bookType","data-category":e.title},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toNavigate.apply(void 0,arguments)}}},[i("v-uni-text",[t._v("更多")]),i("v-uni-text",{staticClass:"lg cuIcon-right"})],1)],1):t._e(),n%2===1?i("v-uni-view",{staticClass:"cu-card dynamic grid col-2 bg-white no-card"},t._l(e.list,(function(e,n){return i("v-uni-view",{key:n,staticClass:"cu-item shadow"},[i("v-uni-navigator",{attrs:{url:"/pages/two/book/bookDetail/bookDetail?bookId="+e.id}},[i("v-uni-view",{staticClass:"grid flex-sub padding-lr col-1 grid-square"},[i("v-uni-view",{staticClass:"bg-img"},[i("loayImg",{attrs:{imgUrl:e.coverPic,fill:"scaleToFill"}})],1)],1),i("v-uni-view",{staticClass:"text-content"},[i("v-uni-view",{staticClass:"text-cut text-black text-bold",staticStyle:{marginTop:"20rpx"}},[t._v(t._s(e.title))]),i("v-uni-view",{staticClass:"text-cut text-gray"},[t._v(t._s(e.summary))])],1)],1)],1)})),1):t._e()],2)})),1)},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))},e92e:function(t,e,i){var n=i("e189");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("79253f3a",n,!0,{sourceMap:!1,shadowMode:!1})},ebac:function(t,e,i){"use strict";var n=i("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("54f8")),o=n(i("ff82")),r={name:"comicList",components:{loayImg:o.default},data:function(){return{}},props:{floors:{type:Array,default:[]}},methods:{toNavigate:function(t){var e=t.currentTarget.dataset.url,i=t.currentTarget.dataset.id;uni.navigateTo({url:e+"?category="+i})},selectItem:function(t){if(!1===t.selected){var e,i=(0,a.default)(this.switchArr);try{for(i.s();!(e=i.n()).done;){var n=e.value;t.key===n.key?(n.selected=!0,this.$emit("switchValue",n)):n.selected=!1}}catch(o){i.e(o)}finally{i.f()}}}},created:function(){}};e.default=r},f543:function(t,e,i){"use strict";var n=i("d951"),a=i.n(n);a.a},f984:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"loayImg",props:{imgUrl:{type:String,default:""},fill:{type:String,default:"aspectFill"}},data:function(){return{url:"/static/images/loading.gif"}},methods:{},created:function(){var t=this,e=new Object;e.userAgent=window.navigator.userAgent.toLowerCase(),e.ie=/msie/.test(e.userAgent),e.Moz=/gecko/.test(e.userAgent);var i=new Image;i.src=this.imgUrl,e.ie?img.onreadystatechange=function(){"complete"!=i.readyState&&"loaded"!=i.readyState||(t.url=t.imgUrl)}:e.Moz&&(i.onload=function(){1==i.complete&&(t.url=t.imgUrl)})}};e.default=n},fe29:function(t,e,i){"use strict";var n=i("ee27"),a=i("4a46");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(i("b53f")),r=n(i("282f")),s={components:{comicList:r.default},data:function(){return{cardCur:0,dotStyle:!0,swiperList:[],avatar:[{value:"similar",label:"分类",color:"orange",url:"/pages/two/comic/classification/classification"},{value:"pay",label:"储值",color:"red",url:"/pages/user/charge/charge"},{value:"rank",label:"排行",color:"pink",url:"/pages/two/comic/comicRanking/comicRanking"}],floors:[],comicStatus:[{value:0}]}},props:{showClass:{type:String,default:""},fresh:{type:Boolean,default:""}},methods:{DotStyle:function(t){this.dotStyle=t.detail.value},cardSwiper:function(t){this.cardCur=t.detail.current},getComicList:function(){var t=this;uni.showLoading({mask:!0}),o.getComicHome().then((function(e){var i=e.data;for(var n in t.floors=[],i)"今日推荐"===n&&(t.swiperList=i[n]),t.floors.push({title:n,content:i[n]});uni.stopPullDownRefresh(),uni.hideLoading(),t.$emit("freshChange")}),(function(t){}))}},watch:{showClass:function(t){"oneMove"===t&&this.getComicList()},fresh:function(t){t&&"oneMove"===this.showClass&&this.getComicList()}},mounted:function(){}};e.default=s},ff82:function(t,e,i){"use strict";i.r(e);var n=i("8dee"),a=i("21c5");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("5178");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"88fcaeda",null,!1,n["a"],r);e["default"]=c.exports},ffb1:function(t,e,i){"use strict";i.r(e);var n=i("fe29"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a}}]);