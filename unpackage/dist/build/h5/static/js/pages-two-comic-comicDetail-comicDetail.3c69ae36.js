(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-two-comic-comicDetail-comicDetail"],{"1bd8":function(t,e,i){"use strict";var a=i("ee27");i("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.get=e.put=e.postJson=e.post=e.request=void 0;var o=i("e66a"),n=a(i("3dd7")),c=function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{method:"POST",contentType:"form"},a={Accept:"application/json"};"POST"===i.method&&"form"===i.contentType&&(a["content-type"]="application/x-www-form-urlencoded");var c=n.default.getters["getToken"];return a["token"]=c||null,new Promise((function(c,s){wx.request({url:o.baseUrl+t,data:e,method:i.method||"POST",header:a,success:function(t){200!==t.data.code?-1===t.data.code?(n.default.dispatch("delToken",""),setTimeout((function(){uni.showToast({icon:"none",title:"未登录",duration:1500})}),200),c(t.data)):setTimeout((function(){uni.showToast({icon:"none",title:t.data.desc,duration:1500})}),500):c(t.data)},fail:function(t){return uni.stopPullDownRefresh(),setTimeout((function(){uni.showToast({icon:"none",title:"网络请求失败，请稍后再试",duration:1500})}),500),s("网络请求失败，请稍后再试")},complete:function(t){var e="",i=t&&t.statusCode;switch(i){case 400:e="错误请求",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 401:e="未授权，请重新登录",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 403:e="拒绝访问",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 404:e="请求错误,未找到该资源",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 405:e="请求方法未允许",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 408:e="请求超时",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 500:e="服务器端出错",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 501:e="网络未实现",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 502:e="网络错误",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 503:e="服务不可用",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 504:e="网络超时",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 505:e="http版本不支持该请求",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break}uni.hideLoading()}})}))};e.request=c;var s=function(t,e){return c(t,e,{method:"POST",contentType:"form"})};e.post=s;var l=function(t,e){return c(t,e,{method:"POST",contentType:"json"})};e.postJson=l;var u=function(t,e){return c(t,e,{method:"put",contentType:"json"})};e.put=u;var r=function(t,e){return e||(e={}),e.timestamp=(new Date).getTime(),c(t,e,{method:"GET"})};e.get=r},"3a45":function(t,e,i){"use strict";var a,o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"bookDetail"},[i("v-uni-view",{staticClass:"fixed"},[i("cu-custom",{attrs:{isBack:!0,bgColor:t.titleDemo?"bg-gradual-pink":"text-white"}},[i("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),t.titleDemo?i("template",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.titleDemo))]):t._e(),t.getToken?i("template",{attrs:{slot:"right"},slot:"right"},[i("v-uni-text",{staticClass:"lg text-pink"}),t.collectStatus?i("v-uni-view",{staticClass:"cu-tag round bg-grey topwrap",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closedComicAction.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"text-white"},[t._v("已收藏")])],1):i("v-uni-view",{staticClass:"cu-tag round bg-orange topwrap",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closedComicAction.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"lg cuIcon-add topshouc"}),i("v-uni-text",[t._v("收藏")])],1)],1):t._e()],2)],1),i("v-uni-view",{staticClass:"bg-img bg-mask flex align-end",style:"background-image: url("+t.floors.coverPic+");height: 414upx;background-size: cover;"},[i("v-uni-view",{staticClass:"padding-xl text-white"},[i("v-uni-view",{staticClass:"padding-xs text-xxl text-bold"},[t._v(t._s(t.floors.title))]),i("v-uni-view",{staticClass:"padding-sm text-sm text-white cu-btn round line-white"},[t._v(t._s(t.floors.category&&t.floors.category.slice(0,-1)))])],1)],1),i("v-uni-scroll-view",{staticClass:"bg-white nav text-center",attrs:{"scroll-x":!0}},t._l(2,(function(e,a){return i("v-uni-view",{key:a,staticClass:"cu-item curs",class:a==t.TabCur?"text-orange cur":"",attrs:{"data-id":a},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabSelect.apply(void 0,arguments)}}},[t._v(t._s(a?"选集":"详情"))])})),1),i("v-uni-view",{staticClass:"details grid col-2",class:[1==t.TabCur?"tran":"",t.ifFull?"":"currentPage"]},[i("v-uni-view",{staticClass:"detailWrap"},[i("v-uni-view",{staticClass:"title text-lg"},[t._v("作品简介")]),i("v-uni-view",{staticClass:"content"},[t._v(t._s(t.floors.summary))]),i("v-uni-view",{staticClass:"auther text-grey"},[t._v("作者："+t._s(t.floors.author))]),i("v-uni-view",{staticClass:"grid col-3"},[i("v-uni-view",{staticClass:"text-left"},[i("v-uni-text",{staticClass:"lg text-orange cuIcon-favorfill"},[t._v(t._s(t.floors.collectSum||0)+"人已收藏")])],1),i("v-uni-view",{staticClass:"text-center"},[i("v-uni-text",{staticClass:"lg text-blue cuIcon-appreciate"},[t._v(t._s(t.floors.likeSum||0)+"人已点赞")])],1),i("v-uni-view",{staticClass:"text-right"},[i("v-uni-text",{staticClass:"lg text-pink cuIcon-like"},[t._v(t._s(10*(t.floors.collectSum+t.floors.likeSum)||0)+"人气值")])],1)],1)],1),i("v-uni-view",{staticClass:"selectWrap grid col-3"},[t._l(t.floors.comicEpisodes,(function(e,a){return t.ifFull||a<6?i("v-uni-view",{key:a,staticClass:"padding-xs",attrs:{"data-id":e.id}},[i("v-uni-view",{staticClass:"cu-btn radius line-gray",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toRead(e.id)}}},[t._v("第"+t._s(a+1)+"章")])],1):t._e()})),t.ifFull?i("v-uni-view",{staticClass:"flex flex-direction",staticStyle:{width:"100vw"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeFill.apply(void 0,arguments)}}},[i("v-uni-button",{staticClass:"cu-btn radius bg-gray lg text-sm margin-tb-sm"},[t._v("收起更多章节")])],1):i("v-uni-view",{staticClass:"flex flex-direction",staticStyle:{width:"100vw"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeFill.apply(void 0,arguments)}}},[i("v-uni-button",{staticClass:"cu-btn radius bg-gray lg text-sm margin-tb-sm"},[t._v("查看更多章节")])],1)],2)],1),i("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"cuIcon-titles text-orange "}),t._v("最新评论")],1),i("v-uni-view",{staticClass:"action text-orange",attrs:{"data-url":"/pages/two/comic/moreCommon/moreCommon"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toSend.apply(void 0,arguments)}}},[i("v-uni-text",[t._v("更多")]),i("v-uni-text",{staticClass:"lg cuIcon-right"})],1)],1),i("v-uni-view",{staticClass:"cu-card dynamic no-card"},[i("v-uni-view",{staticClass:"cu-list menu-avatar comment solids-top"},t._l(t.floors.commentList,(function(e,a){return a<4?i("v-uni-view",{key:a,staticClass:"cu-item"},[i("v-uni-view",{staticClass:"cu-avatar round",style:"background-image:url("+t.baseUrl+e.portrait+");"}),i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"text-grey"},[t._v(t._s(e.userName))]),i("v-uni-view",{staticClass:"text-gray text-content text-df"},[t._v(t._s(e.commentInfo))]),i("v-uni-view",{staticClass:"margin-top-sm flex justify-between"},[i("v-uni-view",{staticClass:"text-gray text-df"},[t._v(t._s(e.createTime))])],1)],1)],1):t._e()})),1)],1),i("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"cuIcon-titles text-orange "}),t._v("猜你喜欢")],1)],1),i("v-uni-view",{staticClass:"bg-white padding flex flex-direction"},[i("v-uni-view",{staticClass:"bubble"},[i("v-uni-text",[t._v("已打赏")]),i("hr"),i("v-uni-text",[t._v(t._s(t.floors.sendSum||0)+"书币")])],1),i("v-uni-button",{staticClass:"cu-btn bg-blue round margin-tb-sm lg half",attrs:{"data-target":"ChooseModal"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showModal.apply(void 0,arguments)}}},[t._v("打赏")])],1),i("v-uni-view",{staticClass:"cu-modal bottom-modal",class:"ChooseModal"==t.modalName?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-dialog",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e)}}},[i("v-uni-view",{staticClass:"cu-bar bg-white"},[i("v-uni-view",{staticClass:"action text-blue",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[t._v("取消")])],1),i("v-uni-view",{staticClass:"grid col-3 padding-sm"},t._l(t.checkbox,(function(e,a){return i("v-uni-view",{key:a,staticClass:"padding-xs"},[i("v-uni-button",{staticClass:"cu-btn orange lg block line-orange",attrs:{"data-value":e.value},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.ChooseCheckbox.apply(void 0,arguments)}}},[t._v(t._s(e.name)),e.hot?i("v-uni-view",{staticClass:"cu-tag sm round",class:e.checked?"bg-white text-orange":"bg-orange"},[t._v("HOT")]):t._e()],1)],1)})),1)],1)],1),i("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"cuIcon-titles text-orange"}),t._v("打赏记录")],1)],1),i("v-uni-view",{staticClass:"cu-card dynamic no-card"},[i("v-uni-view",{staticClass:"cu-list menu-avatar comment solids-top mbottom bg-white"},[t._l(t.floors.sendList,(function(e,a){return a<4?i("v-uni-view",{key:a,staticClass:"cu-item"},[i("v-uni-view",{staticClass:"cu-avatar round",style:"background-image:url("+t.baseUrl+e.portrait+");"}),i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"text-grey"},[t._v(t._s(e.userName||""))]),i("v-uni-view",{staticClass:"text-orange text-content text-df"},[t._v("赠送  "+t._s(e.userAmount||0)+"个书币给作者")]),i("v-uni-view",{staticClass:"margin-top-sm flex justify-between"},[i("v-uni-view",{staticClass:"text-gray text-df"},[t._v(t._s(e.createTime))])],1)],1)],1):t._e()})),i("v-uni-view",{staticClass:"bg-white padding flex flex-direction"},[i("v-uni-button",{staticClass:"cu-btn line-grey round margin-tb-sm lg",attrs:{"data-url":"/pages/two/comic/moreSend/moreSend"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toSend.apply(void 0,arguments)}}},[t._v("更多")])],1)],2)],1),i("v-uni-view",{staticClass:"fixednav flex  p-xs mb-sm bg-white solids-top"},[i("v-uni-view",{staticClass:"flex-twice bg-white padding-sm margin-xs radius",staticStyle:{"line-height":"2.8"}},[t._v(t._s(t.currentPage.name))]),i("v-uni-view",{staticClass:"flex-sub padding-sm margin-xs radius"},[t.floors.chapterQuery&&!t.floors.chapterQuery.chapterId?i("v-uni-button",{staticClass:"cu-btn bg-orange round lg shadow",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toRead(t.currentPage.chapterId)}}},[t._v("立即阅读")]):i("v-uni-button",{staticClass:"cu-btn bg-orange round lg shadow",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toRead(t.currentPage.chapterId)}}},[t._v("继续阅读")])],1)],1)],1)},n=[];i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}))},4938:function(t,e,i){"use strict";var a=i("4a46"),o=i("ee27");i("4160"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(i("f3f3")),c=i("2f62"),s=a(i("b53f")),l=i("e66a"),u=i("d33c"),r={data:function(){return{TabCur:0,comicId:null,floors:{},ifFull:!1,modalName:null,titleDemo:"",currentPage:{chapterId:null,name:""},collectStatus:0,checkbox:[{value:100,name:"100书币",checked:!1,hot:!1},{value:200,name:"200书币",checked:!1,hot:!1},{value:300,name:"300书币",checked:!1,hot:!1},{value:600,name:"600书币",checked:!1,hot:!1},{value:800,name:"800书币",checked:!1,hot:!1},{value:1e3,name:"1000书币",checked:!1,hot:!1}]}},computed:(0,n.default)({},(0,c.mapGetters)({getToken:"getToken"}),{baseUrl:function(){return l.baseUrl}}),onPageScroll:function(t){var e=t.scrollTop;this.titleDemo=e>=170&&this.floors.title||""},onLoad:function(t){this.comicId=t.comicId},onReady:function(){},onShow:function(){this.getComicDetailAction()},methods:{timestampToTime:u.timestampToTime,tabSelect:function(t){this.TabCur=t.currentTarget.dataset.id},showModal:function(t){this.modalName=t.currentTarget.dataset.target,console.log(this.modalName,888)},hideModal:function(t){this.modalName=null},ChooseCheckbox:function(t){for(var e=this,i=this.checkbox,a=t.currentTarget.dataset.value,o=0,n=0,c=i.length;n<c;++n)i[n].value==a&&(o=n);var l={amount:i[o].value,outId:this.comicId};s.exceptionalComic(l).then((function(t){setTimeout((function(){uni.showToast({icon:"none",title:"打赏"+a+"书币",duration:1500})}),500),e.getComicDetailAction(),e.modalName=null}),(function(t){}))},changeFill:function(){this.ifFull=!this.ifFull},toSend:function(t){var e=t.currentTarget.dataset.url;uni.navigateTo({url:e+"?comicId="+this.comicId+"&title="+this.floors.title+"&img="+this.floors.coverPic+"&category="+this.floors.category})},toRead:function(t){uni.navigateTo({url:"/pages/two/comic/comicread/comicread?id="+t+"&name="+this.floors.title+"&comicId="+this.comicId})},closedComicAction:function(){var t=this,e={comicId:this.comicId};s.closedComic(e).then((function(e){t.getComicDetailAction()}),(function(t){}))},getComicDetailAction:function(){var t=this;uni.showLoading({mask:!0});var e={comicId:this.comicId};s.getComicDetail(e).then((function(e){t.floors=e.data;var i=e.data.comicEpisodes;t.collectStatus=!!e.data.collectStatus;var a={isCollected:!!e.data.collectStatus,isLiked:!!e.data.likeStatus};t.$store.dispatch("setStatusComic",a),t.$store.dispatch("setCapterComic",i).then((function(){t.floors.chapterQuery.chapterId?i.forEach((function(e,i){e.id==t.floors.chapterQuery.chapterId&&(t.currentPage.chapterId=e.id,t.currentPage.name=e.title)})):(t.currentPage.chapterId=i[0].id,t.currentPage.name=i[0].title)}))}),(function(t){}))}}};e.default=r},6613:function(t,e,i){"use strict";i.r(e);var a=i("3a45"),o=i("e4f8");for(var n in o)"default"!==n&&function(t){i.d(e,t,(function(){return o[t]}))}(n);i("b2f55");var c,s=i("f0c5"),l=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,"0ca8e353",null,!1,a["a"],c);e["default"]=l.exports},6746:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'.bookDetail .currentPage[data-v-0ca8e353]{min-height:%?500?%;overflow:hidden}.bookDetail .topwrap[data-v-0ca8e353]{margin-right:15px}.bookDetail .topshouc[data-v-0ca8e353]{margin-right:0}.bookDetail .curs[data-v-0ca8e353]{\n  /* border-bottom: 2px solid; */margin:0 %?140?%}.bookDetail .cu-bar[data-v-0ca8e353]{margin-top:%?60?%}.bookDetail .cu-btn.lg.half[data-v-0ca8e353]{text-align:center;margin:0 auto;width:%?200?%}.bookDetail .mbottom[data-v-0ca8e353]{padding-bottom:%?160?%}.bookDetail .fixednav[data-v-0ca8e353]{position:fixed;left:0;bottom:0;width:100vw}.bookDetail .details[data-v-0ca8e353]{width:200vw;background-color:#fff;-webkit-transition:all .3s linear;transition:all .3s linear}.bookDetail .details .detailWrap[data-v-0ca8e353]{padding:%?60?% %?40?% %?40?%}.bookDetail .details .detailWrap .title[data-v-0ca8e353]{margin-bottom:%?20?%}.bookDetail .details .detailWrap .content[data-v-0ca8e353]{color:#666;margin-bottom:%?40?%}.bookDetail .details .detailWrap .auther[data-v-0ca8e353]{margin-bottom:%?40?%}.bookDetail .details .selectWrap[data-v-0ca8e353]{padding:%?60?% %?40?% %?40?%}.bookDetail .bubble[data-v-0ca8e353]{width:150px;height:150px;margin:20px auto;border-radius:50%;background:0 0;text-align:center;line-height:55px;font-size:20px;color:#44a9f7;padding-top:20px;box-sizing:border-box;box-shadow:inset -30px -30px 75px rgba(68,168,247,.2),inset 0 0 5px rgba(68,168,247,.5),inset 0 0 55px hsla(0,0%,100%,.5),inset -3px -3px 5px rgba(68,168,247,.5),0 0 50px hsla(0,0%,100%,.75)}.bookDetail .bubble hr[data-v-0ca8e353]{width:80%;height:1px;border:none;margin:0 auto;background-color:#44a9f7}.bookDetail .tran[data-v-0ca8e353]{-webkit-transform:translateX(-100vw);transform:translateX(-100vw)}.fixed[data-v-0ca8e353]{position:fixed;z-index:99}.VerticalNav.nav[data-v-0ca8e353]{width:%?200?%;white-space:normal}.VerticalNav.nav .cu-item[data-v-0ca8e353]{width:100%;text-align:center;background-color:#fff;margin:0;border:none;height:50px;position:relative}.VerticalNav.nav .cu-item.cur[data-v-0ca8e353]{background-color:#f1f1f1}.VerticalNav.nav .cu-item.cur[data-v-0ca8e353]::after{content:"";width:%?8?%;height:%?30?%;border-radius:%?10?% 0 0 %?10?%;position:absolute;background-color:currentColor;top:0;right:%?0?%;bottom:0;margin:auto}.VerticalBox[data-v-0ca8e353]{display:-webkit-box;display:-webkit-flex;display:flex}.VerticalMain[data-v-0ca8e353]{background-color:#f1f1f1;-webkit-box-flex:1;-webkit-flex:1;flex:1}',""]),t.exports=e},b2f55:function(t,e,i){"use strict";var a=i("d00e"),o=i.n(a);o.a},b53f:function(t,e,i){"use strict";var a=i("4a46");Object.defineProperty(e,"__esModule",{value:!0}),e.getComicHome=n,e.getComicStyle=c,e.getComicDetail=s,e.getSendPage=l,e.getCommentPage=u,e.episodesContent=r,e.closedComic=d,e.likeComic=v,e.comictype=m,e.comment=g,e.ranking=f,e.exceptionalComic=h;var o=a(i("1bd8"));function n(){return o.get("/books/comic/homePage")}function c(t){return o.get("/books/comic/page",t)}function s(t){return o.get("/books/comic/details",t)}function l(t){return o.get("/books/comic/sendPage",t)}function u(t){return o.get("/books/comic/commentPage",t)}function r(t){return o.get("/books/comic/getComicPicture",t)}function d(t){return o.get("/books/comic/closedComic",t)}function v(t){return o.get("/books/comic/likeComic",t)}function m(t){return o.get("/books/comic/comictype",t)}function g(t){return o.get("/books/comic/comment",t)}function f(t){return o.get("/books/comic/ranking",t)}function h(t){return o.get("/books/comic/exceptionalComic",t)}},d00e:function(t,e,i){var a=i("6746");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("60486899",a,!0,{sourceMap:!1,shadowMode:!1})},d33c:function(t,e,i){"use strict";function a(t){var e=new Date(t),i=e.getFullYear()+"年",a=(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"月",o=e.getDate()<10?"0"+e.getDate():e.getDate()+"日",n=e.getHours()<10?"0"+e.getHours():e.getHours(),c=e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes(),s=e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds();return i+a+o+" "+n+":"+c+":"+s}Object.defineProperty(e,"__esModule",{value:!0}),e.timestampToTime=a,e.preventMoreClick=c;var o=null,n=600;function c(t,e){(function(){var i=(new Date).getTime();(!o||i-o>n)&&(e.call(t),o=i)})()}},e4f8:function(t,e,i){"use strict";i.r(e);var a=i("4938"),o=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=o.a},e66a:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.baseUrl=void 0;var a="http://47.244.209.81";e.baseUrl=a}}]);