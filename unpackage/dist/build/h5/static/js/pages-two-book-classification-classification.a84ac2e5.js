(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-two-book-classification-classification"],{"12e0":function(t,e,o){"use strict";var i=o("2cf40"),n=o.n(i);n.a},1829:function(t,e,o){var i=o("24fb");e=i(!1),e.push([t.i,'.fixed[data-v-8550954e]{position:fixed;z-index:99}.VerticalNav.nav[data-v-8550954e]{width:%?200?%;white-space:normal}.VerticalNav.nav .cu-item[data-v-8550954e]{width:100%;text-align:center;background-color:#fff;margin:0;border:none;height:50px;position:relative}.VerticalNav.nav .cu-item.cur[data-v-8550954e]{background-color:#f1f1f1}.VerticalNav.nav .cu-item.cur[data-v-8550954e]::after{content:"";width:%?8?%;height:%?30?%;border-radius:%?10?% 0 0 %?10?%;position:absolute;background-color:currentColor;top:0;right:%?0?%;bottom:0;margin:auto}.VerticalBox[data-v-8550954e]{display:-webkit-box;display:-webkit-flex;display:flex}.VerticalMain[data-v-8550954e]{background-color:#f1f1f1;-webkit-box-flex:1;-webkit-flex:1;flex:1}',""]),t.exports=e},"1bd8":function(t,e,o){"use strict";var i=o("ee27");o("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.get=e.put=e.postJson=e.post=e.request=void 0;var n=o("e66a"),a=i(o("3dd7")),s=function(t,e){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{method:"POST",contentType:"form"},i={Accept:"application/json"};"POST"===o.method&&"form"===o.contentType&&(i["content-type"]="application/x-www-form-urlencoded");var s=a.default.getters["getToken"];return i["token"]=s||null,new Promise((function(s,r){wx.request({url:n.baseUrl+t,data:e,method:o.method||"POST",header:i,success:function(t){200!==t.data.code?-1===t.data.code?(a.default.dispatch("delToken",""),setTimeout((function(){uni.showToast({icon:"none",title:"未登录",duration:1500})}),200)):setTimeout((function(){uni.showToast({icon:"none",title:t.data.desc,duration:1500})}),500):(console.log(t,"2222"),s(t.data))},fail:function(t){return uni.stopPullDownRefresh(),setTimeout((function(){uni.showToast({icon:"none",title:"网络请求失败，请稍后再试",duration:1500})}),500),r("网络请求失败，请稍后再试")},complete:function(t){var e="",o=t&&t.statusCode;switch(o){case 400:e="错误请求",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 401:e="未授权，请重新登录",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 403:e="拒绝访问",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 404:e="请求错误,未找到该资源",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 405:e="请求方法未允许",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 408:e="请求超时",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 500:e="服务器端出错",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 501:e="网络未实现",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 502:e="网络错误",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 503:e="服务不可用",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 504:e="网络超时",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 505:e="http版本不支持该请求",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break}uni.hideLoading()}})}))};e.request=s;var r=function(t,e){return s(t,e,{method:"POST",contentType:"form"})};e.post=r;var c=function(t,e){return s(t,e,{method:"POST",contentType:"json"})};e.postJson=c;var u=function(t,e){return s(t,e,{method:"put",contentType:"json"})};e.put=u;var l=function(t,e){return e||(e={}),e.timestamp=(new Date).getTime(),s(t,e,{method:"GET"})};e.get=l},"2cf40":function(t,e,o){var i=o("1829");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=o("4f06").default;n("42e2f1c4",i,!0,{sourceMap:!1,shadowMode:!1})},4403:function(t,e,o){"use strict";var i,n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",[o("v-uni-view",{staticClass:"fixed"},[o("cu-custom",{attrs:{isBack:!0,bgColor:"bg-shadeTop text-white"}},[o("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),o("template",{attrs:{slot:"content"},slot:"content"},[t._v("分类")])],2)],1),o("v-uni-swiper",{staticClass:"screen-swiper round-dot",attrs:{"indicator-dots":!1,circular:!0,autoplay:!0,interval:"5000",duration:"500"}},t._l(4,(function(t,e){return o("v-uni-swiper-item",{key:e},[o("v-uni-image",{attrs:{src:"https://ossweb-img.qq.com/images/lol/web201310/skin/big3900"+e+".jpg",mode:"aspectFill"}})],1)})),1),o("v-uni-view",{staticClass:"VerticalBox margin-top-sm"},[o("v-uni-scroll-view",{staticClass:"VerticalNav nav",staticStyle:{height:"calc(100vh - 375upx)"},attrs:{"scroll-y":!0,"scroll-with-animation":!0,"scroll-top":t.verticalNavTop}},t._l(t.list,(function(e,i){return o("v-uni-view",{key:i,staticClass:"cu-item",class:i==t.tabCur?"text-green cur":"",attrs:{"data-id":i},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.TabSelect.apply(void 0,arguments)}}},[t._v(t._s(e.name))])})),1),o("v-uni-scroll-view",{staticClass:"VerticalMain",staticStyle:{height:"calc(100vh - 375upx)"},attrs:{"scroll-y":!0,"scroll-with-animation":!0,"scroll-into-view":"main-"+t.mainCur},on:{scroll:function(e){arguments[0]=e=t.$handleEvent(e),t.VerticalMain.apply(void 0,arguments)}}},t._l(t.list,(function(e,i){return o("v-uni-view",{key:i,staticClass:"padding-top padding-lr",attrs:{id:"main-"+i}},[o("v-uni-view",{staticClass:"cu-bar solid-bottom bg-white"},[o("v-uni-view",{staticClass:"action"},[o("v-uni-text",{staticClass:"cuIcon-title text-green"}),t._v(t._s(e.name))],1),o("v-uni-view",{staticClass:"action text-orange",staticStyle:{"margin-right":"0"},attrs:{"data-url":"/pages/two/book/bookType/bookType","data-category":e.id},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toNavigate.apply(void 0,arguments)}}},[o("v-uni-text",[t._v("更多")]),o("v-uni-text",{staticClass:"lg cuIcon-right"})],1)],1),o("v-uni-view",{staticClass:"cu-list menu-avatar"},t._l(e.list,(function(e,i){return o("v-uni-view",{key:i,staticClass:"cu-item",attrs:{"data-url":"/pages/two/book/bookDetail/bookDetail","data-bookid":e.id},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toNavigates.apply(void 0,arguments)}}},[o("v-uni-view",{staticClass:"cu-avatar radius lg",style:"background-image:url("+e.coverPic+");"}),o("v-uni-view",{staticClass:"content"},[o("v-uni-view",[o("v-uni-text",{staticClass:"text-cut"},[t._v(t._s(e.title))])],1),o("v-uni-view",{staticClass:"text-gray text-sm flex"},[o("v-uni-text",{staticClass:"text-cut"},[t._v(t._s(e.summary))])],1)],1)],1)})),1)],1)})),1)],1)],1)},a=[];o.d(e,"b",(function(){return n})),o.d(e,"c",(function(){return a})),o.d(e,"a",(function(){return i}))},a986:function(t,e,o){"use strict";function i(t){var e="";switch(t){case 0:e="玄幻魔法";break;case 1:e="武侠修真";break;case 2:e="都市言情";break;case 3:e="历史军事";break;case 4:e="侦探推理";break;case 5:e="网游动漫";break;case 6:e="科幻灵异";break;case 7:e="其他类型";break}return e}function n(t){var e="";switch(t){case"猜你喜欢":e=1;break;case"男生喜欢":e=4;break;case"女生喜欢":e=3;break;case"大家都在看":e=2;break}return e}function a(t){var e="";switch(t){case"猜你喜欢":e="后宫";break;case"男生喜欢":e="热血";break;case"女生喜欢":e="恋爱,古风";break;case"今日推荐":e="";break}return e}Object.defineProperty(e,"__esModule",{value:!0}),e.bookType=i,e.bookTypeDetail=n,e.comicType=a},bd98:function(t,e,o){"use strict";var i=o("4a46");Object.defineProperty(e,"__esModule",{value:!0}),e.getbookPage=a,e.getbookDetail=s,e.getbookType=r,e.categoryPageList=c,e.getBookStyle=u,e.episodesContent=l,e.getCommentPage=d,e.getSendPage=f,e.categoryList=v,e.bookCollect=b,e.bookLike=k,e.comment=g,e.ranking=p,e.userSend=h;var n=i(o("1bd8"));function a(){return n.get("/books/book/homePage")}function s(t){return n.get("/books/book/details",t)}function r(t){return n.get("/books/book/homePageList",t)}function c(t){return n.get("/books/book/categoryPageList",t)}function u(t){return n.get("/books/book/page",t)}function l(t){return n.get("/books/book/episodesContent",t)}function d(t){return n.get("/books/book/commentList",t)}function f(t){return n.get("/books/book/userSendList",t)}function v(t){return n.get("/books/book/categoryList",t)}function b(t){return n.get("/books/book/bookCollect",t)}function k(t){return n.get("/books/book/bookLike",t)}function g(t){return n.get("/books/book/comment",t)}function p(t){return n.get("/books/book/ranking",t)}function h(t){return n.post("/books/book/userSend",t)}},c602:function(t,e,o){"use strict";var i=o("4a46");o("4160"),o("ac1f"),o("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(o("bd98")),a=o("a986"),s={data:function(){return{list:[],tabCur:0,mainCur:0,verticalNavTop:0,load:!0}},onLoad:function(){},onReady:function(){this.categoryListAction()},methods:{bookType:a.bookType,toNavigate:function(t){var e=t.currentTarget.dataset.url,o=t.currentTarget.dataset.category;uni.navigateTo({url:e+"?category="+o})},toNavigates:function(t){var e=t.currentTarget.dataset.url,o=t.currentTarget.dataset.bookid;uni.navigateTo({url:e+"?bookId="+o})},categoryListAction:function(){var t=this;uni.showLoading({mask:!0});var e={bookId:this.bookId};n.categoryList(e).then((function(e){console.log(e.data,"多多"),console.log(t.list,t.listCur);var o=e.data;o.forEach((function(t){t.id=t.category,t.name=(0,a.bookType)(t.category)})),t.list=o,t.listCur=t.list[0]}),(function(t){}))},TabSelect:function(t){this.tabCur=t.currentTarget.dataset.id,this.mainCur=t.currentTarget.dataset.id,this.verticalNavTop=50*(t.currentTarget.dataset.id-1)},VerticalMain:function(t){var e=this,o=0;if(this.load){for(var i=function(t){var i=uni.createSelectorQuery().select("#main-"+e.list[t].id);i.fields({size:!0},(function(i){e.list[t].top=o,o+=i.height,e.list[t].bottom=o})).exec()},n=0;n<this.list.length;n++)i(n);this.load=!1}for(var a=t.detail.scrollTop+10,s=0;s<this.list.length;s++)if(a>this.list[s].top&&a<this.list[s].bottom)return this.verticalNavTop=50*(this.list[s].id-1),this.tabCur=this.list[s].id,console.log(a),!1}}};e.default=s},d397:function(t,e,o){"use strict";o.r(e);var i=o("4403"),n=o("dfba");for(var a in n)"default"!==a&&function(t){o.d(e,t,(function(){return n[t]}))}(a);o("12e0");var s,r=o("f0c5"),c=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"8550954e",null,!1,i["a"],s);e["default"]=c.exports},dfba:function(t,e,o){"use strict";o.r(e);var i=o("c602"),n=o.n(i);for(var a in i)"default"!==a&&function(t){o.d(e,t,(function(){return i[t]}))}(a);e["default"]=n.a},e66a:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.baseUrl=void 0;var i="http://47.244.209.81";e.baseUrl=i}}]);