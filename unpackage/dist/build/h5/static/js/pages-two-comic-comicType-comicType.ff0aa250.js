(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-two-comic-comicType-comicType"],{"0c43":function(t,e,n){"use strict";var o=n("4a46"),i=n("ee27");n("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("d0ff")),c=o(n("b53f")),r=n("a986"),s=i(n("ff82")),u={data:function(){return{showSkeleton:!0,category:null,categoryDemo:null,comicContent:[],pageNumber:1,pageSize:10,isLoadMore:!0}},components:{loayImg:s.default},onPullDownRefresh:function(){this.comicContent.length<this.pageTotal&&(this.pageNumber=1,this.comicContent=[],this.showSkeleton=!0,this.getComicStyleList())},onReachBottom:function(){this.isLoadMore?(this.pageNumber+=1,this.getComicStyleList()):uni.showToast({icon:"none",title:"没有更多了",duration:1500})},onLoad:function(t){this.comicContent=[],this.categoryDemo=t.category,this.category=(0,r.comicType)(t.category),this.getComicStyleList()},methods:{comicType:r.comicType,getComicStyleList:function(){var t=this,e={category:this.category,pageNumber:this.pageNumber,pageSize:this.pageSize};uni.showLoading({mask:!0}),c.getComicStyle(e).then((function(e){var n=e.data.list;t.comicContent=[].concat((0,a.default)(t.comicContent),(0,a.default)(n)),t.pageTotal=e.data.total,t.comicContent.length>=t.pageTotal&&(t.isLoadMore=!1),uni.hideLoading(),uni.stopPullDownRefresh()}),(function(t){}))}}};e.default=u},"1bd8":function(t,e,n){"use strict";var o=n("ee27");n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.get=e.put=e.postJson=e.post=e.request=void 0;var i=n("e66a"),a=o(n("3dd7")),c=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{method:"POST",contentType:"form"},o={Accept:"application/json"};"POST"===n.method&&"form"===n.contentType&&(o["content-type"]="application/x-www-form-urlencoded");var c=a.default.getters["getToken"];return o["token"]=c||null,new Promise((function(c,r){wx.request({url:i.baseUrl+t,data:e,method:n.method||"POST",header:o,success:function(t){200!==t.data.code?-1===t.data.code?(a.default.dispatch("delToken",""),setTimeout((function(){uni.showToast({icon:"none",title:"未登录",duration:1500})}),200),c(t.data)):setTimeout((function(){uni.showToast({icon:"none",title:t.data.desc,duration:1500})}),500):c(t.data)},fail:function(t){return uni.stopPullDownRefresh(),setTimeout((function(){uni.showToast({icon:"none",title:"网络请求失败，请稍后再试",duration:1500})}),500),r("网络请求失败，请稍后再试")},complete:function(t){var e="",n=t&&t.statusCode;switch(n){case 400:e="错误请求",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 401:e="未授权，请重新登录",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 403:e="拒绝访问",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 404:e="请求错误,未找到该资源",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 405:e="请求方法未允许",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 408:e="请求超时",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 500:e="服务器端出错",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 501:e="网络未实现",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 502:e="网络错误",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 503:e="服务不可用",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 504:e="网络超时",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 505:e="http版本不支持该请求",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break}uni.hideLoading()}})}))};e.request=c;var r=function(t,e){return c(t,e,{method:"POST",contentType:"form"})};e.post=r;var s=function(t,e){return c(t,e,{method:"POST",contentType:"json"})};e.postJson=s;var u=function(t,e){return c(t,e,{method:"put",contentType:"json"})};e.put=u;var l=function(t,e){return e||(e={}),e.timestamp=(new Date).getTime(),c(t,e,{method:"GET"})};e.get=l},"1d49":function(t,e,n){"use strict";n.r(e);var o=n("f8ba"),i=n("8436");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("a82c");var c,r=n("f0c5"),s=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,"3271b4d4",null,!1,o["a"],c);e["default"]=s.exports},"21c5":function(t,e,n){"use strict";n.r(e);var o=n("f984"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},"23e3":function(t,e,n){var o=n("2f1d");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("8653bbb8",o,!0,{sourceMap:!1,shadowMode:!1})},"2f1d":function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.s-switch-container[data-v-88fcaeda]{margin:0 auto;padding:%?2?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:%?60?%;border-radius:%?100?%;background-color:#fff}.s-switch-item[data-v-88fcaeda]{color:#ec008c;padding:0 %?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-transition:all .3s linear;transition:all .3s linear}.s-switch-selected[data-v-88fcaeda]{color:#fff;border-radius:%?40?%;background:#ec008c}',""]),t.exports=e},"3f26":function(t,e,n){var o=n("9a8c2");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("0bc3a3cf",o,!0,{sourceMap:!1,shadowMode:!1})},5178:function(t,e,n){"use strict";var o=n("23e3"),i=n.n(o);i.a},8436:function(t,e,n){"use strict";n.r(e);var o=n("0c43"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},"8dee":function(t,e,n){"use strict";var o,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-image",{attrs:{src:t.url,mode:t.fill}})},a=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}))},"9a8c2":function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,".comicStyleWrap[data-v-3271b4d4]{height:100vh}.loadMore[data-v-3271b4d4]{font-size:%?30?%;color:#555;margin-bottom:%?20?%;text-align:center}.userinfo[data-v-3271b4d4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.userinfo-avatar[data-v-3271b4d4]{width:50px;height:50px;border-radius:50%;left:20px;margin-left:20px;object-fit:contain}.userinfo-nickname[data-v-3271b4d4]{margin:20px}",""]),t.exports=e},a82c:function(t,e,n){"use strict";var o=n("3f26"),i=n.n(o);i.a},a986:function(t,e,n){"use strict";function o(t){var e="";switch(t){case 0:e="玄幻魔法";break;case 1:e="武侠修真";break;case 2:e="都市言情";break;case 3:e="历史军事";break;case 4:e="侦探推理";break;case 5:e="网游动漫";break;case 6:e="科幻灵异";break;case 7:e="其他类型";break}return e}function i(t){var e="";switch(t){case"猜你喜欢":e=1;break;case"男生喜欢":e=4;break;case"女生喜欢":e=3;break;case"大家都在看":e=2;break}return e}function a(t){var e="";switch(t){case"猜你喜欢":e="后宫";break;case"男生喜欢":e="热血";break;case"女生喜欢":e="恋爱,古风";break;case"今日推荐":e="";break}return e}Object.defineProperty(e,"__esModule",{value:!0}),e.bookType=o,e.bookTypeDetail=i,e.comicType=a},b53f:function(t,e,n){"use strict";var o=n("4a46");Object.defineProperty(e,"__esModule",{value:!0}),e.getComicHome=a,e.getComicStyle=c,e.getComicDetail=r,e.getSendPage=s,e.getCommentPage=u,e.episodesContent=l,e.closedComic=d,e.likeComic=f,e.comictype=m,e.comment=b,e.ranking=g,e.exceptionalComic=p;var i=o(n("1bd8"));function a(){return i.get("/books/comic/homePage")}function c(t){return i.get("/books/comic/page",t)}function r(t){return i.get("/books/comic/details",t)}function s(t){return i.get("/books/comic/sendPage",t)}function u(t){return i.get("/books/comic/commentPage",t)}function l(t){return i.get("/books/comic/getComicPicture",t)}function d(t){return i.get("/books/comic/closedComic",t)}function f(t){return i.get("/books/comic/likeComic",t)}function m(t){return i.get("/books/comic/comictype",t)}function b(t){return i.get("/books/comic/comment",t)}function g(t){return i.get("/books/comic/ranking",t)}function p(t){return i.get("/books/comic/exceptionalComic",t)}},b6802:function(t,e,n){"use strict";function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}n.d(e,"a",(function(){return o}))},d0ff:function(t,e,n){"use strict";n.r(e);var o=n("b6802");function i(t){if(Array.isArray(t))return Object(o["a"])(t)}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("e260"),n("d3b7"),n("3ca3"),n("ddb0");function a(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var c=n("dde1");function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t){return i(t)||a(t)||Object(c["a"])(t)||r()}n.d(e,"default",(function(){return s}))},dde1:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("a630"),n("fb6a"),n("d3b7"),n("25f0"),n("3ca3");var o=n("b6802");function i(t,e){if(t){if("string"===typeof t)return Object(o["a"])(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(o["a"])(t,e):void 0}}},e66a:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.baseUrl=void 0;var o="http://47.244.209.81";e.baseUrl=o},f8ba:function(t,e,n){"use strict";var o={loayImg:n("ff82").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"comicStyleWrap padding-top-xl bg-white"},[n("cu-custom",{attrs:{bgColor:"bg-gradual-pink",isBack:!0}},[n("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),n("template",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.categoryDemo))])],2),t._l(t.comicContent,(function(e,o){return n("v-uni-navigator",{key:o,staticClass:"cu-card article no-card solid-bottom",attrs:{url:"/pages/two/comic/comicDetail/comicDetail?comicId="+e.id,"hover-class":"navigator-hover"}},[n("v-uni-view",{staticClass:"cu-item shadow"},[n("v-uni-view",{staticClass:"content solid-bottom"},[n("loayImg",{attrs:{imgUrl:e.coverPic}}),n("v-uni-view",{staticClass:"desc"},[n("v-uni-view",{staticClass:"text-content"},[n("v-uni-view",{staticClass:"text-black"},[t._v(t._s(e.title))]),n("v-uni-text",[t._v(t._s(e.summary))])],1),n("v-uni-view",[o%2!=1?n("v-uni-view",{staticClass:"cu-tag bg-red light sm round"},[t._v(t._s(e.category&&e.category.slice(0,-1)))]):t._e(),o%2===1?n("v-uni-view",{staticClass:"cu-tag bg-gradual-green light sm round"},[t._v(t._s(e.category&&e.category.slice(0,-1)))]):t._e()],1)],1)],1)],1)],1)})),t.isLoadMore?n("v-uni-view",{staticClass:"loadMore text-center"},[t._v("加载中...")]):t._e(),t.isLoadMore||t.comicContent.length?t._e():n("v-uni-text",{staticClass:"imgtext text-center margin-top-xl"},[t._v("暂无数据")])],2)},a=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}))},f984:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"loayImg",props:{imgUrl:{type:String,default:""},fill:{type:String,default:"aspectFill"}},data:function(){return{url:"/static/images/loading.gif"}},methods:{},created:function(){var t=this,e=new Object;e.userAgent=window.navigator.userAgent.toLowerCase(),e.ie=/msie/.test(e.userAgent),e.Moz=/gecko/.test(e.userAgent);var n=new Image;n.src=this.imgUrl,e.ie?img.onreadystatechange=function(){"complete"!=n.readyState&&"loaded"!=n.readyState||(t.url=t.imgUrl)}:e.Moz&&(n.onload=function(){1==n.complete&&(t.url=t.imgUrl)})}};e.default=o},ff82:function(t,e,n){"use strict";n.r(e);var o=n("8dee"),i=n("21c5");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("5178");var c,r=n("f0c5"),s=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,"88fcaeda",null,!1,o["a"],c);e["default"]=s.exports}}]);